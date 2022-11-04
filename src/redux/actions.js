import { nanoid } from 'nanoid';

// create new ItemList
export const addTodo = text => {
  return {
    type: 'todos/addTodo',
    payload: {
      text,
      id: nanoid().slice(0, 10),
      completed: false,
    },
  };

  // setTodos(todos => (todos = [...todos, todo]));
};

// delete TodoItem from list
export const deleteTodos = todoId => {
  return {
    type: 'todos/deleteTodo',
    payload: todoId,
  };

  // setTodos(todos => todos.filter(todo => todo.id !== todoId));
};

// toggle "Completed" property
export const toggleCompleted = todoId => {
  return {
    type: 'todos/toggleCompleted',
    payload: todoId,
  };

  // setTodos(todos =>
  //   todos.map(todo =>
  //     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  //   )
  // );
};

export const setStatusFilter = value => {
  return {
    type: 'todos/setStatusFilter',
    payload: value,
  };
};
