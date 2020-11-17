import { css } from '@emotion/react';
import { minBreakpoints } from './breakpoints';
import { mediaQuery } from './mediaQuery';

const GUTTER_SMALL = '16px';
const GUTTER_MEDIUM = '16px';
const GUTTER_LARGE = '24px';
const GUTTER_XLARGE = '24px';
const MAXIMUM_CONTENT_WIDTH = '1024px';

export const maxWidthContainer = css`
  margin: 0 auto;
  padding: 0 ${GUTTER_SMALL};

  ${mediaQuery(
    { min: minBreakpoints.MEDIUM },
    css`
      padding: 0 ${GUTTER_MEDIUM};
    `
  )};

  ${mediaQuery(
    { min: minBreakpoints.LARGE },
    css`
      padding: 0 ${GUTTER_LARGE};
    `
  )};

  ${mediaQuery(
    { min: minBreakpoints.XLARGE },
    css`
      padding: 0 ${GUTTER_XLARGE};
      max-width: ${MAXIMUM_CONTENT_WIDTH};
    `
  )};
`;
