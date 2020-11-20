import { css } from '@emotion/react';
import {
  stack,
  inset,
  theme,
  mediaQuery,
  minBreakpoints,
  responsiveFontSize,
} from '../../styles';

export const article = css`
  margin: ${stack(48)};
`;

export const articleContent = css`
  padding: ${inset(0, theme.spacing.lg)};
  grid-column: auto / span 12;
  ${mediaQuery(
    { min: minBreakpoints.LARGE },
    css`
      grid-column: 3 / span 12;
    `
  )};
`;

export const mastheadImageImage = css`
  max-height: 320px;
  object-fit: cover;
  display: block;
`;

export const heading = css`
  margin: 0;
`;

export const details = css`
  ${responsiveFontSize(theme.text.xs)};
`;

export const header = (color = theme.colors.primary) => css`
  background-color: ${color};
  padding: ${inset(theme.spacing.lg)};
  margin: ${stack(16)};
`;
