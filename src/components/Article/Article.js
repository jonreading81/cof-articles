import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Breadcrumbs } from '../Breadcrumbs';

import * as styles from './styles';
import { grid, avatar } from '../../styles';

export const Article = ({
  htmlString,
  title,
  description,
  mastheadImage,
  url,
  color,
  published,
  author,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta title="description" content={description} />
    </Head>
    <section css={styles.article}>
      <img css={styles.mastheadImageImage} src={mastheadImage} />
      <header css={styles.header(color)}>
        <h1 css={styles.heading}>{title}</h1>
        <Breadcrumbs
          links={[{ title: 'Call of the Forest', url: '/' }]}
          style={styles.breadcrumbs}
        />
        <div css={styles.details}>
          {author && (
            <>
              <Link href={author.url}>
                <a>
                  <img src={author.image} css={avatar(32)} />
                  <span>{author.name}</span>
                </a>
              </Link>
              ,&nbsp;
            </>
          )}
          <span>{published}</span>
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
