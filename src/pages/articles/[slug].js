import React from 'react';
import Head from 'next/head';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { getPost, getSlugs } from '../../services/posts';
import * as styles from '../../styles/pages/article';

const Post = ({ htmlString, title, description, image, url }) => {
  const links = [
    { title: 'Articles', url: '/' },
    { title, url },
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta title="description" content={description} />
      </Head>
      <section css={styles.article}>
        <img src={image} width="100%" />
        <Breadcrumbs links={links} />
        <div>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>
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
