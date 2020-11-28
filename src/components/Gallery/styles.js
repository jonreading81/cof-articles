import { css } from '@emotion/react';
import {
  mediaQuery,
  minBreakpoints,
  theme,
  inset,
  responsiveFontSize,
} from '../../styles';

const { colors } = theme;

export const imageWrapper = css`
display:
  grid-column: auto / span 12;

  ${mediaQuery(
    { min: minBreakpoints.LARGE },
    css`
      grid-column: auto / span 4;
    `
  )};

  a{
    text-decoration: none;
  }
`;

export const image = css`
  display: block;
  width: 100%;
`;

export const caption = css`
  background: ${colors.grey};
  padding: ${inset(theme.spacing.md)};
  ${responsiveFontSize(theme.text.xs)};
  color: ${colors.black};
`;
