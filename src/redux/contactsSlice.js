import { createSlice } from '@reduxjs/toolkit';
import { contactsDefault } from 'components/data/contactsDefault';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  items: contactsDefault,
  filter: '',
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },

    deleteContact(state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },

    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);