import React from 'react';
import Head from 'next/head';
import { ArticleGrid } from '../../ArticleGrid';
import * as styles from './styles';
import { grid } from '../../../styles';

export const Home = ({ posts }) => (
  <>
    <Head>
      <title>Articles - Call of the forest</title>
      <meta title="description" content="" />
      <meta name="keywords" content="" />
    </Head>
    <ArticleGrid articles={posts} />
  </>
);
