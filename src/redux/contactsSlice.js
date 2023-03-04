import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    onFilterChange: (state, action) => {
      state.filter = action.payload;
    },

    addContact: (state, action) => {
      console.log(action);
      const { name, number } = action.payload;
      const isExist = state.contactsList.some(contact => {
        return contact.name === name;
      });
      if (isExist) {
        alert(`${name} is already in contacts.`);
        return;
      }
      state.contactsList = [
        ...state.contactsList,
        { id: nanoid(), name, number },
      ];
    },

    deleteContact: (state, action) => {
      state.contactsList = state.contactsList.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { onFilterChange, addContact, deleteContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
