import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({
  type = 'button',
  onClick,
  children,
  selected = false,
}) => {
  return (
    <ButtonStyled type={type} onClick={onClick} selected={selected}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
