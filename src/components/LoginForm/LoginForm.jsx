import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authFetchApi';
import css from '../../sharedStyles.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.formContainer}>
      <label className={css.formLabel}>
        Email
        <input type="email" name="email" className={css.formInput} />
      </label>
      <label className={css.formLabel}>
        Password
        <input type="password" name="password" className={css.formInput} />
      </label>
      <button type="submit" className={css.formBtn}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
