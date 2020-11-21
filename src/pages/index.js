import React from 'react';
import Link from 'next/link';
import { getPosts } from '../services/posts';
import { Homepage } from '../components/Homepage';

export const getStaticProps = async () => ({
  props: {
    posts: getPosts(),
  },
});

export default Homepage;
