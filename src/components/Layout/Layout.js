import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import css from './Layout.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div className={css.layout}>
      <AppBar />
      <main>
        <div className={css.main}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Layout;
