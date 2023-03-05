import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactAPI, deleteContactAPI, getContactsAPI } from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await getContactsAPI();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const response = await deleteContactAPI(id);
      return response.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkApi) => {
    try {
      const response = await addContactAPI(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
