import { ToDo } from 'components/TodoList/Todo/Todo';
import { useSelector } from 'react-redux';
import { selectVisibleTodos } from 'redux/selectors';
import { Title, TodoListStyled } from './TodoList.styled';

export const TodoList = () => {
  const visibleTodos = useSelector(selectVisibleTodos);

  return (
    <>
      <Title> TODO list </Title>
      <TodoListStyled>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            <ToDo todo={todo} />
          </li>
        ))}
      </TodoListStyled>
    </>
  );
};
