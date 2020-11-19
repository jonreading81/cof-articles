import { pxToRem } from './pxToRem';

export const inset = (v, h = v) =>
  `${pxToRem(v)} ${pxToRem(h)} ${pxToRem(v)} ${pxToRem(h)}`;

export const stack = (value) => `0 0 ${pxToRem(value)} 0`;
