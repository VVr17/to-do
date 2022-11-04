import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/actions';
import { Button } from 'components/Button/Button';
import { Text, Form, Title } from './TodoEditor.styled';

export const TodoEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTodo(form.text.value));
    form.reset();
  };

  return (
    <>
      <Title>Add new task</Title>
      <Form onSubmit={handleSubmit}>
        <Text
          type="text"
          name="text"
          placeholder="please, enter text..."
        ></Text>
        <Button type="submit">Add task</Button>
      </Form>
    </>
  );
};
