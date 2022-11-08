import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './App.styled';
import { Filter } from 'components/StatusFilter/StatusFilter';
import { fetchTodos } from 'redux/operations';
import { getError, getIsLoading, getTodos } from 'redux/selectors';
import { TodoEditor } from 'components/TodoEditor/TodoEditor';
import { TodoList } from 'components/TodoList/TodoList';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <main>
        <TodoEditor />
        <Filter />
        <Loader isLoading={isLoading} />
        {error && <p>{error}</p>}
        {todos.length > 0 && <TodoList />}
      </main>
    </Container>
  );
};
