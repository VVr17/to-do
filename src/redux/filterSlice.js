import { createSlice } from '@reduxjs/toolkit';
import { statusFilter } from './constants';

const filterInitialState = {
  status: statusFilter.all,
};

const filterSlice = createSlice({
  name: 'todo',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
