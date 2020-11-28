import React from 'react';
import { Article } from '../../components/pages/Article';
import { getArticle, getArticleSlugs } from '../../services/prismic/articles';

export const getStaticPaths = async () => {
  const slugs = await getArticleSlugs();

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
  const props = await getArticle(slug);

  return { props };
};

export default Article;
