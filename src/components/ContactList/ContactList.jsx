import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../features/phonebookSlice';

function ContactList({ contacts }) {
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Usuń
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
