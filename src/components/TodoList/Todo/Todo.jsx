import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteTodos, toggleCompleted } from 'redux/actions';
import { TextWrapper } from './Todo.styled';

export const ToDo = ({ text, completed, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodos(id));
  const handleToggleCompleted = () => dispatch(toggleCompleted(id));

  return (
    <>
      <TextWrapper>
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
