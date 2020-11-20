import React from 'react';
import { Article } from '../../components/Article';
import { getPost, getSlugs } from '../../services/posts';

export const getStaticPaths = async () => ({
  paths: getSlugs().map((slug) => ({
    params: {
      slug,
    },
  })),
  fallback: false,
});

export const getStaticProps = async ({ params: { slug } }) => ({
  props: getPost(slug),
});

export default Article;
