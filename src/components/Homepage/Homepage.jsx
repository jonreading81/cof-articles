import React from 'react';
import { ArticleGrid } from '../ArticleGrid';
import * as styles from './styles';

export const Homepage = ({ posts }) => (
  <div>
    <h1 css={styles.heading}>Call of the Forest</h1>
    <ArticleGrid articles={posts} />
  </div>
);
