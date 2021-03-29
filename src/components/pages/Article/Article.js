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
  summary,
  mastheadImage,
  thumbnail,
  url,
  color,
  published,
  author,
  content,
  gallery,
  tags,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={summary} />
      <meta name="keywords" content={tags.join(', ')} />
      {author && <meta name="author" content={author.name} />}
    </Head>
    <section css={styles.article}>
      <img
        css={styles.mastheadImage}
        srcSet={`${thumbnail} 480w,
             ${mastheadImage} 1280w`}
        sizes="(max-width: 600px) 480px,
       1280px"
        src={thumbnail}
        width="480px"
        height="270px"
        alt=""
      />
      <header style={{ '--color': color }} css={styles.header}>
        <h1 css={styles.heading}>{title}</h1>

        <div css={styles.details}>
          {author && (
            <>
              <Link href={author.url}>
                <a>
                  <img
                    src={author.image}
                    css={avatar(32)}
                    width="32px"
                    height="32px"
                    alt={`Image of ${author.name}`}
                  />
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
