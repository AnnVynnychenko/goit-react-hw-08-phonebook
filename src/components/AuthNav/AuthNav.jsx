import { NavLink } from 'react-router-dom';
import css from '../../sharedStyles.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  margin-right: 30px;

  &.active {
    font-weight: bold;
    color: #ff5722;
  }
`;

const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register" className={css.navLink}>
        Register
      </StyledLink>
      <StyledLink to="/login" className={css.navLink}>
        Log In
      </StyledLink>
    </div>
  );
};

export default AuthNav;
