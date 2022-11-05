import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import { actions } from './constants';

// Redux Toolkit
// createAction(type, fn that return object with new payload)
export const addTodo = createAction('todos/addTodo', text => {
  return {
    payload: {
      text,
      id: nanoid().slice(0, 10),
      completed: false,
    },
  };
});
export const deleteTodos = createAction('todos/deleteTodo');
export const toggleCompleted = createAction('todos/toggleCompleted');
export const setStatusFilter = createAction('filter/setStatusFilter');

// Redux
// create new ItemList
// export const addTodo = text => {
//   return {
//     type: actions.addTodo,
//     payload: {
//       text,
//       id: nanoid().slice(0, 10),
//       completed: false,
//     },
//   };
// };

// // delete TodoItem from list
// export const deleteTodos = todoId => {
//   return {
//     type: actions.deleteTodo,
//     payload: todoId,
//   };
// };

// // toggle "Completed" property
// export const toggleCompleted = todoId => {
//   return {
//     type: actions.toggleCompleted,
//     payload: todoId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: actions.setStatusFilter,
//     payload: value,
//   };
// };
