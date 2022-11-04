import styled from '@emotion/styled';

export const TextWrapper = styled.div`
  display: flex;

  input {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: ${p => p.theme.space[3]}px;
    margin-left: ${p => p.theme.space[3]}px;
    text-decoration: ${p => (p.completed ? 'line-through' : 'none')};
  }
`;
