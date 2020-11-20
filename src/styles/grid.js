import { css } from '@emotion/react';
import { minBreakpoints } from './breakpoints';
import { mediaQuery } from './mediaQuery';
import { theme } from './theme';

const { colors } = theme;

const GRID_COLUMN_GAP_SMALL = '12px';
const GRID_COLUMN_GAP_MEDIUM = '20px';
const GRID_COLUMN_GAP_LARGE = '20px';
const GRID_COLUMN_GAP_XLARGE = '24px';
const GRID_ROW_GAP_SMALL = '36px';
const GRID_ROW_GAP_LARGE = '48px';
const GRID_NUMBER_OF_COLUMNS = '12';

export const grid = css`
  display: grid;
  grid-column-gap: ${GRID_COLUMN_GAP_SMALL};
  grid-row-gap: ${GRID_ROW_GAP_SMALL};
  grid-template-columns: repeat(${GRID_NUMBER_OF_COLUMNS}, 1fr);

  ${mediaQuery(
    { min: minBreakpoints.MEDIUM },
    css`
      grid-column-gap: ${GRID_COLUMN_GAP_MEDIUM};
    `
  )};

  ${mediaQuery(
    { min: minBreakpoints.LARGE },
    css`
      grid-column-gap: ${GRID_COLUMN_GAP_LARGE};
      grid-row-gap: ${GRID_ROW_GAP_LARGE};
    `
  )};

  ${mediaQuery(
    { min: minBreakpoints.XLARGE },
    css`
      grid-column-gap: ${GRID_COLUMN_GAP_XLARGE};
    `
  )};
`;
