import React from 'react';
import { getAuthorSlugs, getAuthor, getPosts } from '../services/posts';
import { Author } from '../components/pages/Author';

export const getStaticPaths = async () => ({
  paths: getAuthorSlugs().map((author) => ({
    params: {
      author,
    },
  })),
  fallback: false,
});

export const getStaticProps = async ({ params: { author } }) => ({
  props: {
    author: getAuthor(author),
    posts: getPosts(author),
  },
});

export default Author;
