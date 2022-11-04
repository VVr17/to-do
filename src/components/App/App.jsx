import { Container } from './App.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Filter } from 'components/StatusFilter/StatusFilter';
import { TodoEditor } from 'components/TodoEditor/TodoEditor';
import { TodoList } from 'components/TodoList/TodoList';

export const App = () => {
  // useEffect(() => {
  //   const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
  //   if (todosFromLocalStorage) setTodos(todosFromLocalStorage);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  return (
    <Container>
      <AppBar />
      <main>
        <TodoEditor />
        <Filter />
        <TodoList />
      </main>
    </Container>
  );
};
