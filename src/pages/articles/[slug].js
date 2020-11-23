import React from 'react';
import { Article } from '../../components/pages/Article';
import { getPost, getPostSlugs } from '../../services/articles';

export const getStaticPaths = async () => {
  const slugs = await getPostSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const props = await getPost(slug);

  return { props };
};

export default Article;
