import { css } from '@emotion/react';
import { minBreakpoints, mediaQuery, theme, stack } from '../../styles';

const { colors } = theme;

export const articleGrid = css`
  margin: ${stack(48)};
`;

export const gridItem = (color = theme.colors.primary) => css`
  background-color: ${color};
  grid-column: auto / span 12;

  ${mediaQuery(
    { min: minBreakpoints.MEDIUM },
    css`
      grid-column: auto / span 6;
    `
  )};

  ${mediaQuery(
    { min: minBreakpoints.LARGE },
    css`
      grid-column: auto / span 4;
    `
  )};
  a {
    text-decoration: none;
    color: ${colors.black};
  }

  h2,
  p {
    padding: 0 1rem;
  }
`;
