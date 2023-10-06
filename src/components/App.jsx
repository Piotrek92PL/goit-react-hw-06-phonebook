import React, { useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux'; // usunięto `useDispatch`

// Zakomentowany import setFilter
// import { setFilter } from '../features/phonebookSlice';

export function App() {
  // Usunięto nieużywane `dispatch`
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      // TODO: Set contacts from local storage to Redux store if needed
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Zakomentowana funkcja `handleFilterChange`
  // const handleFilterChange = e => {
  //   dispatch(setFilter(e.target.value));
  // };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filteredContacts()} />
    </div>
  );
}
