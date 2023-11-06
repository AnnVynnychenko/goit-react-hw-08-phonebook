import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/auth/authFetchApi';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hook';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LogInPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    )
  );
}

export default App;
