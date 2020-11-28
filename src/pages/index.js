import React from 'react';
import { getArticles } from '../services/prismic/articles';
import { Home } from '../components/pages/Home';

export const getStaticProps = async () => {
  const posts = await getArticles();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
