import React from "react";
import { getArticles } from "../services/prismic/articles";
import { getAuthorSlugs, getAuthor } from "../services/prismic/authors";
import { Author } from "../components/pages/Author";

export const getServerSideProps = async ({ params: { author: slug } }) => {
  const author = await getAuthor(slug);
  const posts = await getArticles(author.id);

  return {
    props: {
      author,
      posts,
    },
  };
};

export default Author;
