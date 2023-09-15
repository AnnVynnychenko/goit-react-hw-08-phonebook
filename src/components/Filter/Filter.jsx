import { useDispatch, useSelector } from 'react-redux';
import css from '../../sharedStyles.module.css';
import { contactsFiltered } from 'redux/filter/filterSlice';
import { getFilterValue } from 'redux/filter/filterSelectors';

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const filterContacts = e => {
    const { value } = e.currentTarget;
    dispatch(contactsFiltered(value));
  };
  return (
    <div className={css.formContainer}>
      <label className={css.formLabel}>
        <p>Find contacts by name</p>
        <input
          className={css.formInput}
          type="text"
          value={filter}
          onChange={filterContacts}
          required
        />
      </label>
    </div>
  );
};

export default Filter;
