import { css } from '@emotion/react';
import { minBreakpoints } from '../../styles/breakpoints';
import { mediaQuery } from '../../styles/mediaQuery';
import { theme } from '../../styles/theme';

const { colors } = theme;

export const gridItem = css`
  background-color: lightblue;
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
