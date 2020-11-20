import { css } from '@emotion/react';
import { stack, inset, theme, mediaQuery, minBreakpoints } from '../../styles';

export const mastheadImageImage = css`
  max-height: 320px;
  object-fit: cover;
  display: block;
`;

export const header = (color = theme.colors.primary) => css`
  background-color: ${color};
  padding: ${inset(theme.spacing.lg)};
  margin: ${stack(32)};
`;
