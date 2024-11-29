import { css } from "@emotion/react";
import { theme, inset, responsiveFontSize } from "../../styles";
const { colors } = theme;

export const heading = css`
  display: block;
  font-weight: bold;
  ${responsiveFontSize(theme.text.md)};
  margin: ${inset(theme.spacing.sm, 0)};
`;

export const link = css`
  text-decoration: none;
  color: ${colors.black};
`;

export const header = css`
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 100%;
`;
