import { actions, statusFilter } from './constants';

const initialState = {
  todos: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
  filters: {
    status: statusFilter.all,
  },
};

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.addTodo:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case actions.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
      };
    case actions.toggleCompleted:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case actions.setStatusFilter:
      return {
        ...state,
        filters: { ...state.filters, status: payload },
      };
    default:
      return state;
  }
};
