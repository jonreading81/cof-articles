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
  margin: ${stack(theme.spacing.xl)};
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

export const header = (color = theme.colors.primary) => css`
  background-color: ${color};
  padding: ${inset(theme.spacing.sm)};
  margin: ${stack(theme.spacing.md)};
`;

export const mastheadImageImage = css`
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  display: block;
`;

export const heading = css`
  margin: 0;
`;

export const breadcrumbs = css`
  margin: ${stack(theme.spacing.lg)};
`;

export const details = css`
  ${responsiveFontSize(theme.text.xs)};
`;

export const avatar = css`
  vertical-align: middle;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
