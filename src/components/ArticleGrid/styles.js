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
    { min: minBreakpoints.LARGE },
    css`
      grid-column: auto / span 6;
    `
  )};

  ${mediaQuery(
    { min: minBreakpoints.XLARGE },
    css`
      grid-column: auto / span 4;
    `
  )};
  a {
    text-decoration: none;
    color: ${colors.black};
  }
  img {
    margin: ${stack(12)};
  }

  h2,
  p {
    padding: 0 1rem;
  }

  p {
    margin: ${stack(32)};
  }
`;
