import { css } from '@emotion/react';
import {
  theme,
  inset,
  stack,
  minBreakpoints,
  mediaQuery,
  responsiveFontSize,
} from '../../../styles';

export const heading = css`
  ${responsiveFontSize(theme.text.lg)};
  margin: ${inset(theme.spacing.md, 0)};
`;

export const header = css`
  grid-column: auto / span 12;
  width: 100%;
  margin: ${stack(theme.spacing.md)};
  padding: ${inset(0, theme.spacing.sm)};

  ${mediaQuery(
    { min: minBreakpoints.LARGE },
    css`
      grid-column: auto / span 10;
    `
  )};

  ${mediaQuery(
    { min: minBreakpoints.XLARGE },
    css`
      grid-column: auto / span 8;
    `
  )};
`;

export const copy = css`
  p {
    ${responsiveFontSize(theme.text.sm)};
  }
`;
