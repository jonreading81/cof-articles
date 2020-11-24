import React from 'react';
import { getAuthorSlugs, getAuthor, getPosts } from '../services/articles';
import { Author } from '../components/pages/Author';

export const getStaticPaths = async () => {
  const slugs = await getAuthorSlugs();

  return {
    paths: slugs.map((author) => ({
      params: {
        author,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { author: slug } }) => {
  const author = await getAuthor(slug);
  const posts = await getPosts(author.id);

  return {
    props: {
      author,
      posts,
    },
  };
};

export default Author;
