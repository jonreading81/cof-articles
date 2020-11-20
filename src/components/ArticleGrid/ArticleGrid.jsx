import React from 'react';
import Link from 'next/link';
import { grid } from '../../styles';
import * as styles from './styles';

export const ArticleGrid = ({ articles }) => (
  <div css={[grid, styles.articleGrid]}>
    {articles.map(({ title, url, slug, thumbnail, description, color }) => (
      <div css={styles.gridItem(color)} key={slug}>
        <Link href={url}>
          <a>
            <img src={thumbnail} width="100%" />
            <h2>{title}</h2>
          </a>
        </Link>
        <p>{description}</p>
      </div>
    ))}
  </div>
);
