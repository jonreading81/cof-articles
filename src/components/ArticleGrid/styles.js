import { css } from '@emotion/react';
import {
  minBreakpoints,
  mediaQuery,
  theme,
  stack,
  pxToRem,
} from '../../styles';

const { colors } = theme;

export const articleGrid = css`
  margin: ${stack(theme.spacing.xl)};
`;

export const gridItem = (color = theme.colors.primary) => css`
  background-color: ${color};
  grid-column: auto / span 12;

  ${mediaQuery(
    minBreakpoints.LARGE,
    `
      grid-column: auto / span 6;
   `
  )};

  ${mediaQuery(
    minBreakpoints.XLARGE,
    `
      grid-column: auto / span 4;
    `
  )};

  a {
    text-decoration: none;
    color: ${colors.black};
  }

  img {
    width: 100%;
    margin: ${stack(theme.spacing.sm)};
  }

  h2,
  p {
    padding: 0 ${pxToRem(theme.spacing.sm)};
  }
`;
