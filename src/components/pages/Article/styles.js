import { css } from '@emotion/react';
import {
  stack,
  inset,
  theme,
  mediaQuery,
  minBreakpoints,
  responsiveFontSize,
} from '../../../styles';

export const article = css`
  margin: ${stack(theme.spacing.xl)};
`;

export const articleContent = css`
  padding: ${inset(0, theme.spacing.sm)};
  grid-column: auto / span 12;

  ${mediaQuery(
    minBreakpoints.LARGE,
    `
      grid-column: 3 / span 10;
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

export const heading = css``;

export const details = css`
  font-weight: bold;
  ${responsiveFontSize(theme.text.xs)};
  a {
    color: ${theme.colors.black};
  }
`;

export const avatar = css`
  vertical-align: middle;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
