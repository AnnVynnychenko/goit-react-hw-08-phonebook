import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import PhoneBook from 'components/PhoneBook';

const ContactsPage = () => {
  return (
    <PhoneBook titleBegin="Phone" titleEnd="Book">
      <ContactForm />
      <Contacts title="Contacts">
        <Filter />
        <ContactList />
      </Contacts>
    </PhoneBook>
  );
};

export default ContactsPage;
