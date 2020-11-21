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

export const header = (color) => css`
  grid-column: auto / span 12;
  width: 100%;
  margin: ${stack(theme.spacing.md)};
  padding: ${inset(theme.spacing.sm)};
  background-color: ${color};

  ${mediaQuery(
    { min: minBreakpoints.XLARGE },
    css`
      grid-column: auto / span 8;
    `
  )};
`;

export const copy = css`
  max-width: 720px;
  p {
    ${responsiveFontSize(theme.text.sm)};
  }
`;
