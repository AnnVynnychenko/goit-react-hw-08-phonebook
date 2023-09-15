import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authFetchApi';
import css from '../../sharedStyles.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.formContainer}>
      <label className={css.formLabel}>
        Username
        <input type="text" name="name" className={css.formInput} />
      </label>
      <label className={css.formLabel}>
        Email
        <input type="email" name="email" className={css.formInput} />
      </label>
      <label className={css.formLabel}>
        Password
        <input type="password" name="password" className={css.formInput} />
      </label>
      <button type="submit" className={css.formBtn}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
