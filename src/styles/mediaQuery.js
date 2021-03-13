import { css } from '@emotion/react';

export const mediaQuery = (breakpoint, styles) => {
  return css`
    @media only screen ${`and (min-width: ${breakpoint}px)`} {
      ${css(styles)}
    }
  `;
};
