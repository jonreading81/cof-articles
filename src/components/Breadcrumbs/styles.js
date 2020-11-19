import { css } from '@emotion/react';
import { minBreakpoints } from '../../styles/breakpoints';
import { mediaQuery } from '../../styles/mediaQuery';
import { theme, pxToRem, stack } from '../../styles';

export const list = css`
  margin: ${stack(16)};
  list-style-type: none;
  padding: 0;
`;

export const listItem = css`
  display: inline;

  & + li::before {
    border-right: ${pxToRem(1)} solid ${theme.colors.black};
    content: '';
    display: inline-block;
    height: ${pxToRem(15)};
    margin: 0 ${pxToRem(theme.spacing.sm)};
    position: relative;
    top: 2px;
    transform: rotate(15deg);
  }
`;
