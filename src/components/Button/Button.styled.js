import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  min-width: ${p => p.theme.space[6]}px;
  min-height: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeight.semiBold};
  text-transform: uppercase;
  cursor: pointer;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondaryColor};
  /* background-color: ${p =>
    p.name === 'primary' ? p.theme.colors.secondaryColor : 'transparent'};
  color: ${p =>
    p.name === 'primary'
      ? p.theme.colors.secondaryTextColor
      : p.theme.colors.secondaryColor}; */
  background-color: ${p =>
    p.selected ? p.theme.colors.secondaryColor : 'transparent'};
  color: ${p =>
    p.selected
      ? p.theme.colors.secondaryTextColor
      : p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radii.normal};

  transition: background-color ${p => p.theme.transitionTiming},
    color 250ms ${p => p.theme.transitionTiming},
    box-shadow ${p => p.theme.transitionTiming},
    border-color ${p => p.theme.transitionTiming};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentBackgroundColor};
    border-color: ${p => p.theme.colors.accentBackgroundColor};
    color: ${p => p.theme.colors.accent};
    box-shadow: 0px 4px 4px ${p => p.theme.colors.btnShadowColor};
  }

  :not(:last-of-type) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
