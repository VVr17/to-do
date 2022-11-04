import styled from '@emotion/styled';

export const Header = styled.header`
  margin-bottom: 30px;
  text-align: center;

  h2 {
    margin-bottom: 16px;
  }

  div {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 18px;
    font-size: 500;
    padding-top: 8px;
    padding-bottom: 8px;

    :not(:last-of-type) {
      margin-right: 20px;
    }
  }
`;
