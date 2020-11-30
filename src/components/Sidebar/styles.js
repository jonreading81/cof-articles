import { css } from '@emotion/react';
import { theme, pxToRem, stack, inset, responsiveFontSize } from '../../styles';

export const sidebar = (isOpen) => css`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  left: 0;
  position: absolute;
  background: #6cadb5;
  transform: translateX(${isOpen ? '0' : '-100%'});
  transition: 0.7s transform;
  list-style: none;
`;

export const listItem = css``;

export const link = css`
  display: block;
  padding: 1rem;
  margin: 0;
  background: #6cadb5;
  transition: 0.7s background;
  ${responsiveFontSize(theme.text.md)};
  cursor: pointer;
  color: white;

  &:hover {
    background: #4e969e;
  }
`;
