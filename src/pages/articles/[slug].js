import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { getPost, getSlugs } from '../../services/posts';

const Post = ({ htmlString, title, description, image }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta title="description" content={description} />
      </Head>
      <section>
        <h1>{title}</h1>
        <img src={image} width="100%" />

        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </section>
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
