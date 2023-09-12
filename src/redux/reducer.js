import { authSliceReducer } from './auth/authSlice';
import { filterReducer } from './filter/filterSlice';

const { combineReducers } = require('@reduxjs/toolkit');
const { persistedContactsReducer } = require('./contacts/contactsSlice');

const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filters: filterReducer,
  auth: authSliceReducer,
});

export default rootReducer;
