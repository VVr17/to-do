import { createSelector } from '@reduxjs/toolkit';
import { statusFilter } from './constants';

export const selectTodos = state => state.todos.items;
export const selectIsLoading = state => state.todos.isLoading;
export const selectError = state => state.todos.error;
export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTodos = createSelector(
  // array of selectors
  [selectTodos, selectStatusFilter],
  // result of selectors
  (tasks, filterStatus) => {
    switch (filterStatus) {
      case statusFilter.active:
        return tasks.filter(task => !task.completed);
      case statusFilter.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectCompletedTodosCount = createSelector([selectTodos], todos =>
  todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0)
);
