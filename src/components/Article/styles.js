import { css } from '@emotion/react';
import { stack, inset, theme, mediaQuery, minBreakpoints } from '../../styles';

export const article = css`
  margin: ${stack(48)};
`;

export const mastheadImage = css`
  max-height: 240px;
  object-fit: cover;
  display: block;
`;

export const header = (color = theme.colors.primary) => css`
  background-color: ${color};
  padding: ${inset(theme.spacing.lg)};
  margin: ${stack(32)};
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
