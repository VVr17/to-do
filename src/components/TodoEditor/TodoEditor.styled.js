import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.mainText};
  border-radius: ${p => p.theme.radii.normal};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Text = styled.textarea`
  height: ${p => p.theme.space[4]}px * 3 + 24px;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.borderColor};
  border-radius: ${p => p.theme.radii.normal};

  font: inherit;
  line-height: ${p => p.theme.space[4]}px;
  letter-spacing: 0.01em;

  resize: none;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
