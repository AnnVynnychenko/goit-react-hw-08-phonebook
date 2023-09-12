import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import cssContacts from '../ContactForm/ContactForm.module.css';
import { getFilterValue } from 'redux/contacts/contactsSelectors';
import { contactsFiltered } from 'redux/filter/filterSlice';

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const filterContacts = e => {
    const { value } = e.currentTarget;
    dispatch(contactsFiltered(value));
  };
  return (
    <label className={css.contactLabel}>
      <span className={cssContacts.textForm}>Find contacts by name</span>
      <input
        className={`${cssContacts.contactInput} ${css.filterInput}`}
        type="text"
        value={filter}
        onChange={filterContacts}
        required
      />
    </label>
  );
};

export default Filter;
