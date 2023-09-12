import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authFetchApi';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    dispatch(login({ email: email.value, password: password.value }));
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
