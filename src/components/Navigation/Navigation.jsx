import { useAuth } from 'hook';
import { NavLink } from 'react-router-dom';
import css from '../../sharedStyles.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    font-weight: bold;
    color: #ff5722;
  }
`;

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <StyledLink to="/" className={css.navLink}>
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts" className={css.navLink}>
          Contacts
        </StyledLink>
      )}
    </>
  );
};

export default Navigation;
