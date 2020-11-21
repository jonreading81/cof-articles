import { css } from '@emotion/react';
import {
  theme,
  pxToRem,
  stack,
  responsiveFontSize,
  mediaQuery,
  minBreakpoints,
} from '../../styles';

export const list = css`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const listItem = css`
  display: inline;
  ${responsiveFontSize(theme.text.sm)}
  font-weight: bold;

  & + li::before {
    border-right: ${pxToRem(1)} solid ${theme.colors.black};
    content: '';
    display: inline-block;
    height: ${pxToRem(16)};
    margin: 0 ${pxToRem(theme.spacing.sm)};
    position: relative;
    top: 2px;
    transform: rotate(15deg);
  }

  a {
    text-decoration: none;
    color: ${theme.colors.black};
  }
`;
