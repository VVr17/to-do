import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #333333;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Text = styled.textarea`
  $line-height: 16px;

  height: $line-height * 3 + 24px;
  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  font: inherit;
  line-height: $line-height;
  letter-spacing: 0.01em;

  resize: none;
  margin-bottom: 12px;
`;
