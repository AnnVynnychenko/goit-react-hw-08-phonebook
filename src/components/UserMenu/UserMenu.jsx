import { useAuth } from 'hook';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authFetchApi';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className={css.userContainer}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button
        className={css.logoutButton}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
