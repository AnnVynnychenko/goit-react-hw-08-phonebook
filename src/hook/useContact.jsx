import { useSelector } from 'react-redux';
import {
  getContacts,
  getError,
  getIsLoading,
} from 'redux/contacts/contactsSelectors';

const useContact = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return {
    contacts,
    isLoading,
    error,
  };
};

export default useContact;
