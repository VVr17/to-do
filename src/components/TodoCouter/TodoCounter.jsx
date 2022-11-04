import React from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from 'redux/selectors';

export const TodoCounter = () => {
  const todos = useSelector(getTodos);
  const completed = getCompletedTodos(todos);
  const active = todos.length - completed;

  return (
    <div>
      <p>Total: {todos.length}</p>
      <p>Active:{active} </p>
      <p>Completed: {completed} </p>
    </div>
  );
};

function getCompletedTodos(todos) {
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
}
