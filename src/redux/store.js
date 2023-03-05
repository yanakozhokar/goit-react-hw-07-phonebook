import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContacts = persistReducer(persistConfig, contactsSlice.reducer);
const persistedFilter = persistReducer(persistConfig, filterSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContacts,
    filter: persistedFilter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
