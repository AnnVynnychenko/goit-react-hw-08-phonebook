import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/contactsFetchApi';
import { selectVisibleContacts } from 'redux/filter/filterSelectors';
import { useContact } from 'hook';
import Loader from 'components/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useContact();
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      {isLoading && <Loader />}
      {contacts && (
        <ul className={css.contactList}>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={css.contactItem}>
                <div>
                  <p className={css.overflow}>{name}:</p>
                  <p className={css.telNumber}>{number}</p>
                </div>
                <button
                  className={css.deleteContactBtn}
                  type="button"
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default ContactList;
