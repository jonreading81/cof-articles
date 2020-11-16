import React from 'react';
import Head from 'next/head';
import { getPost, getSlugs } from '../../services/posts';

const Post = ({ htmlString, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta title="description" content={description} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
};

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

export default Post;
