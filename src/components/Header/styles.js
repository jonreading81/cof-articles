import { css } from '@emotion/react';
import { theme, inset, responsiveFontSize } from '../../styles';

export const heading = css`
  display: block;
  font-weight: bold;
  ${responsiveFontSize(theme.text.md)};
  margin: ${inset(theme.spacing.sm, 0)};
`;
