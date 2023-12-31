import { useAuth } from 'hook';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
