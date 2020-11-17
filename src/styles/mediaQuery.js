import { css } from '@emotion/react';

export const mediaQuery = ({ min, max }, styles) => {
  const fromQuery = (size) => (size ? `and (min-width: ${size}px)` : '');
  const toQuery = (size) => (size ? `and (max-width: ${size}px)` : '');

  return css`
    @media only screen ${fromQuery(min)} ${toQuery(max)} {
      ${styles}
    }
  `;
};
