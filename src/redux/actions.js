import { nanoid } from 'nanoid';
import { actions } from './constants';

// create new ItemList
export const addTodo = text => {
  return {
    type: actions.addTodo,
    payload: {
      text,
      id: nanoid().slice(0, 10),
      completed: false,
    },
  };
};

// delete TodoItem from list
export const deleteTodos = todoId => {
  return {
    type: actions.deleteTodo,
    payload: todoId,
  };
};

// toggle "Completed" property
export const toggleCompleted = todoId => {
  return {
    type: actions.toggleCompleted,
    payload: todoId,
  };
};

export const setStatusFilter = value => {
  return {
    type: actions.setStatusFilter,
    payload: value,
  };
};
