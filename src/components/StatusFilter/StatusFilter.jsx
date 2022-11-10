import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilter } from 'redux/constants';
import { setStatusFilter } from 'redux/filterSlice';
import { selectStatusFilter } from 'redux/selectors';
import { FilterStyled } from './StatusFilter.styled';

export const Filter = () => {
  const filter = useSelector(selectStatusFilter); // to get filter status form state
  const dispatch = useDispatch(); // to dispatch action
  const handleStatusFilterChange = value => dispatch(setStatusFilter(value));

  return (
    <FilterStyled>
      <Button
        selected={filter === statusFilter.all}
        onClick={() => handleStatusFilterChange(statusFilter.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilter.active}
        onClick={() => handleStatusFilterChange(statusFilter.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilter.completed}
        onClick={() => handleStatusFilterChange(statusFilter.completed)}
      >
        Completed
      </Button>
    </FilterStyled>
  );
};
