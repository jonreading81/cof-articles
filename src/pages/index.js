import React from 'react';
import { getPosts } from '../services/articles';
import { Home } from '../components/pages/Home';

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
