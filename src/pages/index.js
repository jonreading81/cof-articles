import React from 'react';
import { getPosts } from '../services/posts';
import { Home } from '../components/pages/Home';

export const getStaticProps = async () => ({
  props: {
    posts: getPosts(),
  },
});

export default Home;
