import { pxToRem } from './pxToRem';

export const inset = (x, y = x) =>
  `${pxToRem(y)} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(x)}`;

export const stack = (value) => `0 0 ${pxToRem(value)} 0`;
