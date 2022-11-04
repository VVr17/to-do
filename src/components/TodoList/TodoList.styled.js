import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const TodoListStyled = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: ${p => p.theme.space[3]}px;

  li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.mainText};
    border-radius: ${p => p.theme.radii.normal};
  }
`;
