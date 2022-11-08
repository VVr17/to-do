import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchTodos, toggleCompleted } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const todoInitialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: todoInitialState,
    isLoading: false,
    error: null,
  },

  // handle extra actions
  extraReducers: {
    // fetch all Todos from API
    [fetchTodos.pending]: handlePending,
    [fetchTodos.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchTodos.rejected]: handleRejected,

    // add Todo
    [addTodo.pending]: handlePending,
    [addTodo.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addTodo.rejected]: handleRejected,

    // delete Todo
    [deleteTodo.pending]: handlePending,
    [deleteTodo.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(({ id }) => id === payload.id);
      state.items.splice(index, 1);
    },
    [deleteTodo.rejected]: handleRejected,

    // toggle completed status
    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(({ id }) => id === payload.id);
      state.items.splice(index, 1, payload);
    },
    [toggleCompleted.rejected]: handleRejected,
  },
});

export const todoReducer = todoSlice.reducer;

// { id: 0, text: 'Learn HTML and CSS', completed: true },
// { id: 1, text: 'Get good at JavaScript', completed: true },
// { id: 2, text: 'Master React', completed: false },
// { id: 3, text: 'Discover Redux', completed: false },
// { id: 4, text: 'Build amazing apps', completed: false },
