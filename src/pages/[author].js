import React from 'react';
import { getAuthorSlugs, getAuthor, getPosts } from '../services/posts';
import { ArticleIndex } from '../components/ArticleIndex';
import { avatar, pageHeading } from '../styles';

export const AuthorPage = ({ author, posts }) => (
  <ArticleIndex title={author.name} posts={posts}>
    <header>
      <h1 css={pageHeading}>
        {' '}
        <img src={author.image} css={avatar(64)} />
        {author.name}
      </h1>
    </header>
    <div dangerouslySetInnerHTML={{ __html: author.htmlString }} />
  </ArticleIndex>
);

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

export default AuthorPage;
