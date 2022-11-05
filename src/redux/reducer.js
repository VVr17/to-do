// import { actions, statusFilter } from './constants';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTodo,
  deleteTodos,
  setStatusFilter,
  toggleCompleted,
} from './actions';
import { statusFilter } from './constants';

// Redux Toolkit
// combined Reducer
const todoInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const todoReducer = createReducer(todoInitialState, {
  // [addTodo.type] === [addTodo.toString()] === [addTodo] =>
  // as property automatically cast types to string
  [addTodo]: (state, action) => [...state, action.payload],
  [deleteTodos]: (state, action) =>
    state.filter(todo => todo.id !== action.payload),
  [toggleCompleted]: (state, action) =>
    state.map(todo =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo
    ),
});

const filterInitialState = {
  status: statusFilter.all,
};

export const filterReducer = createReducer(filterInitialState, {
  [setStatusFilter]: (state, action) => ({
    ...state.filters,
    status: action.payload,
  }),
});

// Redux
// const initialState = {
//   todos: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: statusFilter.all,
//   },
// };

// export const rootReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case actions.addTodo:
//       return {
//         ...state,
//         todos: [...state.todos, payload],
//       };
//     case actions.deleteTodo:
//       return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== payload),
//       };
//     case actions.toggleCompleted:
//       return {
//         ...state,
//         todos: state.todos.map(todo =>
//           todo.id === payload ? { ...todo, completed: !todo.completed } : todo
//         ),
//       };
//     case actions.setStatusFilter:
//       return {
//         ...state,
//         filters: { ...state.filters, status: payload },
//       };
//     default:
//       return state;
//   }
// };
