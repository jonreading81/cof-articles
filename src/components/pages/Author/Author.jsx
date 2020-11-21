import React from 'react';
import { ArticleGrid } from '../../ArticleGrid';
import { Header } from '../../Header';
import * as styles from './styles';
import { avatar, grid } from '../../../styles';

export const Author = ({ posts, author }) => (
  <div>
    <Header />
    <div css={grid}>
      <header css={[styles.header]}>
        <h1 css={styles.heading}>
          <img src={author.image} css={avatar(72)} />
          {author.name}
        </h1>
        <div
          css={styles.copy}
          dangerouslySetInnerHTML={{ __html: author.htmlString }}
        />
      </header>
    </div>

    <ArticleGrid articles={posts} />
  </div>
);
