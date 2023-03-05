import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          el => el.id !== action.payload
        );
        state.contacts.isLoading = false;
        state.contacts.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
        console.log(action.payload);
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.contacts.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items = [...state.contacts.items, action.payload];
        state.contacts.isLoading = false;
        state.contacts.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.pending, (state, action) => {
        state.contacts.isLoading = true;
      }),
});

export default contactsSlice.reducer;
