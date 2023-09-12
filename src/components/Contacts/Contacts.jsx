import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = ({ title, children }) => {
  return (
    <section className={css.contacts}>
      <h2 className={css.titleContacts}>{title}</h2>
      {children}
    </section>
  );
};

export default Contacts;

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
