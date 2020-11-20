import React from 'react';
import Head from 'next/head';
import { Breadcrumbs } from '../Breadcrumbs';

import * as styles from './styles';
import { grid } from '../../styles';

export const Article = ({
  htmlString,
  title,
  description,
  mastheadImage,
  url,
  color,
  published,
  author,
}) => {
  const links = [{ title: 'Call of the Forest', url: '/' }];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta title="description" content={description} />
      </Head>
      <section css={styles.article}>
        <img css={styles.mastheadImageImage} src={mastheadImage} width="100%" />
        <header css={styles.header(color)}>
          <h1 css={styles.heading}>{title}</h1>
          {links && <Breadcrumbs links={links} />}
          <div css={styles.details}>
            By {author}, {published}
          </div>
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
