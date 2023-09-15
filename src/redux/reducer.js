import { combineReducers } from '@reduxjs/toolkit';
import { authPersistReducer } from './auth/authSlice';
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
  auth: authPersistReducer,
});

export default rootReducer;
