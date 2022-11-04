import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ReactComponent as AddIcon } from './icons/add.svg';

import Container from './components/Container';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import TodoFilter from './components/TodoFilter/TodoFilter';
import Modal from './components/Modal';
import IconButton from './components/IconButton/IconButton';
// import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false, // for Modal open-close
  };

  componentDidMount() {
    console.log('component Mount - get value from local storage');
    const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
    if (todosFromLocalStorage) this.setState({ todos: todosFromLocalStorage });
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      console.log('updated state - write updated state to local storage');
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevState.todos.length !== 0) {
      this.toggleModal();
    }
  }

  // for Modal
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  // for Todo Component
  // create new ItemList
  addTodo = text => {
    const todo = {
      text,
      id: nanoid().slice(0, 10),
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));

    // this.toggleModal();
  };

  // delete TodoItem from list
  deleteTodos = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // toggle "Completed" property
  toggleCompleted = todoId => {
    //* OR
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    //* OR

    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  getCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.getCompletedTodos();

    return (
      <Container>
        {/* <Counter initialValue = {10} /> */}
        {/* <Dropdown/> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <Tabs items={tabs} /> */}
        {/* <Clock /> */}
        {/* <Reader items={publications} /> */}

        {/* !create single component */}
        <IconButton onClick={this.toggleModal} aria-label="Add Todo">
          <AddIcon width={40} height={40} fill="white" />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount} </p>
        </div>

        <TodoFilter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={this.getVisibleTodos()}
          onDeleteTodo={this.deleteTodos}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;
