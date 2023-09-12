import { createSelector } from '@reduxjs/toolkit';
import { getContacts } from 'redux/contacts/contactsSelectors';

export const getFilterValue = state => state.contacts.filters.filter;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(
      contact =>
        contact.name && contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  }
);
