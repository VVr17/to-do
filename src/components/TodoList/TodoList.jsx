import { ToDo } from 'components/TodoList/Todo/Todo';
import { useSelector } from 'react-redux';
import { statusFilter } from 'redux/constants';
import { getStatusFilter, getTodos } from 'redux/selectors';
import { Title, TodoListStyled } from './TodoList.styled';

export const TodoList = () => {
  const todos = useSelector(getTodos);
  const filter = useSelector(getStatusFilter);
  const visibleTodos = getVisibleTodos(todos, filter);

  return (
    <>
      <Title> TODO list </Title>
      <TodoListStyled>
        {visibleTodos.map(({ id, text, completed }) => (
          <li key={id}>
            <ToDo id={id} text={text} completed={completed} />
          </li>
        ))}
      </TodoListStyled>
    </>
  );
};

function getVisibleTodos(todos, filterStatus) {
  switch (filterStatus) {
    case statusFilter.active:
      return todos.filter(task => !task.completed);
    case statusFilter.completed:
      return todos.filter(task => task.completed);
    default:
      return todos;
  }
}
