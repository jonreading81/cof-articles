import React from 'react';
import { ArticleGrid } from '../../ArticleGrid';
import * as styles from './styles';
import { grid } from '../../../styles';

export const Home = ({ posts }) => (
  <div>
    <ArticleGrid articles={posts} />
  </div>
);
