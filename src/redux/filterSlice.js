import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    onFilterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { onFilterChange } = filterSlice.actions;

export default filterSlice.reducer;
