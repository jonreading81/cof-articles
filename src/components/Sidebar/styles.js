import { css } from "@emotion/react";
import { theme, pxToRem, stack, inset, responsiveFontSize } from "../../styles";

export const sidebar = (isOpen) => css`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  left: 0;
  position: absolute;
  background: #0c383e;
  transform: translateX(${isOpen ? "0" : "-100%"});
  transition: 0.7s transform;
  list-style: none;
`;

export const listItem = css``;

export const link = css`
  display: block;
  padding: 1rem;
  margin: 0;
  background: #0c383e;
  transition: 0.7s background;
  ${responsiveFontSize(theme.text.md)};
  cursor: pointer;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  text-decoration: none;

  &:hover {
    background: #195861;
  }
`;
