import { css } from '@emotion/react';
import { minBreakpoints } from './breakpoints';
import { mediaQuery } from './mediaQuery';
import { pxToRem } from './pxToRem';

export const fontFormats = (url) => ({
  ttf: `${url}.ttf`,
});

export const fontFace = ({ family, formats: { ttf }, weight }) => css`
  @font-face {
    font-family: '${family}';
    font-display: swap;
    font-style: normal;
    font-weight: ${weight};
    src: url('${ttf}') format('truetype');
  }
`;

export const fontSize = ({ fontSize, lineHeight }) => css`
  font-size: ${pxToRem(fontSize)};
  line-height: ${pxToRem(lineHeight)};
`;

export const responsiveFontSize = ({ SMALL, ...sizes }) => css`
  ${fontSize(SMALL)}

  ${Object.keys(sizes).map((breakpoint) =>
    mediaQuery(
      { min: minBreakpoints[breakpoint] },
      css`
        ${fontSize(sizes[breakpoint])}
      `
    )
  )}
`;
