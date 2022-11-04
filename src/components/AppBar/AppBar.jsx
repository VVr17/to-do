import { TodoCounter } from 'components/TodoCouter/TodoCounter';
import React from 'react';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <h2>Tasks</h2>
      <TodoCounter />
    </Header>
  );
};
