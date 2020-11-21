import React from 'react';
import { ArticleGrid } from '../../ArticleGrid';
import { Header } from '../../Header';
import * as styles from './styles';
import { grid } from '../../../styles';

export const Home = ({ posts }) => (
  <div>
    <Header style={styles.header} />
    <ArticleGrid articles={posts} />
  </div>
);
