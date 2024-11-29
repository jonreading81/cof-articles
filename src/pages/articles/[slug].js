import React from "react";
import { Article } from "../../components/pages/Article";
import { getArticle, getArticleSlugs } from "../../services/prismic/articles";

export const getServerSideProps = async ({ params: { slug } }) => {
  const props = await getArticle(slug);

  return { props };
};

export default Article;
