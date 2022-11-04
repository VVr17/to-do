import styled from '@emotion/styled';

export const Header = styled.header`
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;

  h2 {
    margin-bottom: ${p => p.theme.space[3]}px;
  }

  div {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeight.semiBold};
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;

    :not(:last-of-type) {
      margin-right: ${p => p.theme.space[4]}px;
    }
  }
`;
