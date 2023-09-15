import PropTypes from 'prop-types';
import css from './PhoneBook.module.css';

const PhoneBook = ({ titleBegin, titleEnd, children }) => {
  return (
    <section className={css.phoneBook}>
      <h1 className={css.title}>
        {titleBegin}
        <span className={css.titleEnd}>{titleEnd}</span>
      </h1>
      {children}
    </section>
  );
};

export default PhoneBook;

PhoneBook.propTypes = {
  titleBegin: PropTypes.string.isRequired,
  titleEnd: PropTypes.string.isRequired,
  children: PropTypes.node,
};
