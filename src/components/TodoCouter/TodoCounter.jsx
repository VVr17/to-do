import React from 'react';
import { useSelector } from 'react-redux';
import { selectCompletedTodosCount, selectTodos } from 'redux/selectors';

export const TodoCounter = () => {
  const todos = useSelector(selectTodos);
  const completed = useSelector(selectCompletedTodosCount);
  const active = todos.length - completed;

  return (
    <div>
      <p>Total: {todos.length}</p>
      <p>Active:{active} </p>
      <p>Completed: {completed} </p>
    </div>
  );
};
