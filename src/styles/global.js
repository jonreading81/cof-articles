import { css } from '@emotion/react';
import { fontFace, responsiveFontSize } from './fonts';
import { theme } from './theme';
import { stack, inset } from './spacing';

const { fonts, colors, text } = theme;

export const global = css`
  ${fontFace(fonts.PRIMARY_REGULAR)}
  ${fontFace(fonts.PRIMARY_BOLD)}

html, body, #__next {
    -webkit-font-smoothing: antialiased;
    font-family: ${fonts.PRIMARY_REGULAR.family}, Helvetica, Arial, sans-serif;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    color: ${colors.black};
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  blockquote {
    background: ${colors.grey};
    border-left: 8px solid #ccc;
    margin: ${stack(24)};
    font-weight: bold;
    font-style: italic;

    p {
      padding: ${inset(24)};

      ${responsiveFontSize(text.md)}
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.PRIMARY_BOLD.family};
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0.67em;
  }

  h1,
  .text-xxl {
    ${responsiveFontSize(text.xxl)}
  }

  h2,
  .text-xl {
    ${responsiveFontSize(text.xl)}
  }

  h3,
  .text-lg {
    ${responsiveFontSize(text.lg)}
  }

  h4,
  .text-md {
    ${responsiveFontSize(text.md)}
  }

  h5,
  h6,
  .text-sm {
    ${responsiveFontSize(text.sm)}
  }

  .text-xs {
    ${responsiveFontSize(text.xs)}
  }

  .text-xss {
    ${responsiveFontSize(text.xxs)}
  }

  p {
    ${responsiveFontSize(text.sm)}
    margin-top: 0;
    margin-bottom: 1.5em;
  }
`;
