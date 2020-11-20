import React from 'react';
import Link from 'next/link';
import { getPosts } from '../services/posts';
import { ArticleGrid } from '../components/ArticleGrid';
import * as styles from '../styles/pages/articles';

const Home = ({ posts }) => (
  <div>
    <h1 css={styles.heading}>Call of the Forest</h1>
    <ArticleGrid articles={posts} />
  </div>
);

export const getStaticProps = async () => ({
  props: {
    posts: getPosts(),
  },
});

export default Home;
