import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { todoReducer } from './todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterReducer,
  },
});
