import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { getPost, getSlugs } from '../../services/posts';

const Post = ({ htmlString, title, description, image, slug }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta title="description" content={description} />
      </Head>
      <section>
        <img src={image} width="100%" />
        <h1>{title}</h1>
        <ol>
          <li>
            <Link href="/">Articles</Link>
          </li>
          <li>
            <Link href={`/articles/${slug}`}>{title}</Link>
          </li>
        </ol>
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
