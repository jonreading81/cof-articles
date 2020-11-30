import React from 'react';
import { RichText } from 'prismic-reactjs';
import Head from 'next/head';
import Link from 'next/link';
import { Gallery } from '../../Gallery';

import * as styles from './styles';
import { grid, avatar } from '../../../styles';

export const Article = ({
  htmlString,
  title,
  description,
  mastheadImage,
  url,
  color,
  published,
  author,
  content,
  gallery,
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
          <span>{new Date(published).toDateString()}</span>
        </div>
      </header>
      <div css={grid}>
        <div css={styles.articleContent}>{RichText.render(content)}</div>
      </div>
      {!!gallery && <Gallery images={gallery.images} />}
    </section>
  </>
);
