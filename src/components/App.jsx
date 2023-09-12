// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';
// import PhoneBook from './PhoneBook';
// import Contacts from './Contacts';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
    // <PhoneBook titleBegin="Phone" titleEnd="book">
    //   <ContactForm />
    //   <Contacts title="Contacts">
    //     <Filter />
    //     <ContactList />
    //   </Contacts>
    // </PhoneBook>
  );
}

export default App;
