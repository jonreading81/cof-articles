import React from 'react';
import Head from 'next/head';
import { Breadcrumbs } from '../Breadcrumbs';
import * as styles from './styles';
import { grid } from '../../styles';

export const Article = ({
  htmlString,
  title,
  description,
  masthead,
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
        <img css={styles.mastheadImage} src={masthead} width="100%" />
        <header css={styles.header(color)}>
          <h1>{title}</h1>
          <Breadcrumbs links={links} />
        </header>

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
