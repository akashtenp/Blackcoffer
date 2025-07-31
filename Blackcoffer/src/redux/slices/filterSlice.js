import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  end_year: '',
  topic: '',
  sector: '',
  region: '',
  pestle: '',
  source: '',
  swot: '',
  country: '',
  city: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetFilters: () => initialState,
  },
});

export const { setFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
