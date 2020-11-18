import React from 'react';
import Link from 'next/link';
import { getPosts } from '../services/posts';
import { ArticleGrid } from '../components/ArticleGrid';

const Home = ({ posts }) => (
  <div>
    <h1>Amys Articles</h1>
    <ArticleGrid articles={posts} />
  </div>
);

export const getStaticProps = async () => ({
  props: {
    posts: getPosts(),
  },
});

export default Home;
