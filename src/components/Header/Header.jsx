import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import * as styles from './styles';

export const Header = ({ mastheadImage, color, links, title }) => (
  <>
    <img css={styles.mastheadImageImage} src={mastheadImage} width="100%" />
    <header css={styles.header(color)}>
      <h1>{title}</h1>
      {links && <Breadcrumbs links={links} />}
    </header>
  </>
);
