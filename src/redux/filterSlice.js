import { createSlice } from '@reduxjs/toolkit';
import { statusFilter } from './constants';

const filterInitialState = {
  status: statusFilter.all,
};

// export const filterReducer = createReducer(filterInitialState, {
//   [setStatusFilter]: (state, action) => ({
//     ...state.filters,
//     status: action.payload,
//   }),
// });

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
