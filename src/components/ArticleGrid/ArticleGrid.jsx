import React from 'react';
import Link from 'next/link';
import { grid } from '../../styles/grid';
import { gridItem } from './styles';

export const ArticleGrid = ({ articles }) => (
  <div css={grid}>
    {articles.map(({ title, slug, image, description }) => (
      <div css={gridItem} key={slug}>
        <Link href={`/articles/${slug}`}>
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
