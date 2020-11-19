import React from 'react';
import Link from 'next/link';
import * as gridStyles from '../../styles/grid';
import * as styles from './styles';

export const ArticleGrid = ({ articles }) => (
  <div css={[gridStyles.grid, styles.articleGrid]}>
    {articles.map(({ title, url, slug, image, description }) => (
      <div css={styles.gridItem} key={slug}>
        <Link href={url}>
          <a>
            <img src={image} width="100%" />
            <h2>{title}</h2>
          </a>
        </Link>
        <p>{description}</p>
      </div>
    ))}
  </div>
);
