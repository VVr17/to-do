import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist'; // to connect Redux State with LocalStorage
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { LOCAL_STORAGE_KEY } from './constants';

// { id: 0, text: 'Learn HTML and CSS', completed: true },
// { id: 1, text: 'Get good at JavaScript', completed: true },
// { id: 2, text: 'Master React', completed: false },
// { id: 3, text: 'Discover Redux', completed: false },
// { id: 4, text: 'Build amazing apps', completed: false },
const todoInitialState = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState: { items: todoInitialState },
  reducers: {
    addTodo: {
      reducer({ items }, { payload }) {
        items.push(payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid().slice(0, 10),
            completed: false,
          },
        };
      },
    },
    deleteTodo(state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    toggleCompleted(state, { payload }) {
      state.items = state.items.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

const persistConfig = {
  key: LOCAL_STORAGE_KEY.todoList,
  storage,
};
const todoReducer = todoSlice.reducer;

export const { addTodo, deleteTodo, toggleCompleted } = todoSlice.actions;
export const persistedTodoReducer = persistReducer(persistConfig, todoReducer);
