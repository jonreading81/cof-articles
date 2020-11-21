import { css } from '@emotion/react';
import { pxToRem } from './pxToRem';

export const avatar = (size) => css`
  vertical-align: middle;
  width: ${pxToRem(size)};
  height: ${pxToRem(size)};
  border-radius: 50%;
  margin-right: ${pxToRem(size / 4)};
`;
