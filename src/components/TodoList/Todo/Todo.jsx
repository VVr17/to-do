import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleted } from 'redux/operations';
import { TextWrapper } from './Todo.styled';

export const ToDo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodo(todo.id));
  const handleToggleCompleted = () => dispatch(toggleCompleted(todo));
  const { text, completed } = todo;

  return (
    <>
      <TextWrapper completed={completed}>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleCompleted}
        />
        <p>{text}</p>
      </TextWrapper>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
};
