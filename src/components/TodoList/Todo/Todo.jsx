import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleted } from 'redux/todoSlice';
import { TextWrapper } from './Todo.styled';

export const ToDo = ({ text, completed, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodo(id));
  const handleToggleCompleted = () => dispatch(toggleCompleted(id));

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
