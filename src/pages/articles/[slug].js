import React from 'react';
import Head from 'next/head';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { getPost, getSlugs } from '../../services/posts';

const Post = ({ htmlString, title, description, image, url }) => {
  const links = [
    { title: 'Home', url: '/' },
    { title, url },
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta title="description" content={description} />
      </Head>
      <section>
        <img src={image} width="100%" />
        <Breadcrumbs links={links} />
        <h1>{title}</h1>

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
