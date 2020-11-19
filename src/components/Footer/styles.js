import { css } from '@emotion/react';
import { minBreakpoints } from '../../styles/breakpoints';
import { mediaQuery } from '../../styles/mediaQuery';
import { theme, pxToRem, stack, inset } from '../../styles';

export const footer = css`
  p {
    margin: ${inset(32, 0)};
    text-align: center;
  }
`;
