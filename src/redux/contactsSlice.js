import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    onFilterChange: (state, action) => {
      state.filter = action.payload;
    },

    addContact: (state, action) => {
      console.log(action);
      const { name, number } = action.payload;
      const isExist = state.contacts.items.some(contact => {
        return contact.name === name;
      });
      if (isExist) {
        alert(`${name} is already in contacts.`);
        return;
      }
      state.contacts.items = [
        ...state.contacts.items,
        { id: nanoid(), name, number },
      ];
    },

    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { onFilterChange, addContact, deleteContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;

// https://64036bf1f61d96ac487f65de.mockapi.io/contacts
