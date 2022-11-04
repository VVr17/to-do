import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
`;

export const TodoListStyled = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 24px;

  li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #333333;
    border-radius: 4px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;

      background-color: $green;

      transform: scaleX(0);
      transition: transform 250ms $timing-function;
    }

    /* &--completed::before {
      transform: scaleX(1);
    } */
  }
`;
