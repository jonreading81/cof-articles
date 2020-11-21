import React from 'react';
import { getPosts } from '../services/posts';
import { ArticleIndex } from '../components/ArticleIndex';
import { pageHeading } from '../styles';

const Index = ({ posts }) => (
  <ArticleIndex posts={posts}>
    <h1 css={pageHeading}>Call of the Forest</h1>
  </ArticleIndex>
);

export const getStaticProps = async () => ({
  props: {
    posts: getPosts(),
  },
});

export default Index;
