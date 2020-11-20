import React from 'react';
import Head from 'next/head';
import { Breadcrumbs } from '../Breadcrumbs';
import { Header } from '../Header';
import * as styles from './styles';
import { grid } from '../../styles';

export const Article = ({
  htmlString,
  title,
  description,
  mastheadImage,
  url,
  color,
}) => {
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
        <Header title={title} mastheadImage={mastheadImage} color={color} links={links} />
        <div css={grid}>
          <div
            css={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: htmlString }}
          />
        </div>
      </section>
    </>
  );
};
