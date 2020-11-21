import React from 'react';
import { Article } from '../../components/pages/Article';
import { getPost, getPostSlugs } from '../../services/posts';

export const getStaticPaths = async () => ({
  paths: getPostSlugs().map((slug) => ({
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
