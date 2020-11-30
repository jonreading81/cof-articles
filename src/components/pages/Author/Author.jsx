import React from 'react';
import { ArticleGrid } from '../../ArticleGrid';
import { RichText } from 'prismic-reactjs';
import { Header } from '../../Header';
import * as styles from './styles';
import { avatar, grid } from '../../../styles';

export const Author = ({ posts, author }) => (
  <div>
    <div css={grid}>
      <header css={[styles.header]}>
        <h1 css={styles.heading}>
          <img src={author.image} css={avatar(72)} />
          {author.name}
        </h1>
        <div css={styles.copy}>{RichText.render(author.intro)}</div>
      </header>
    </div>

    <ArticleGrid articles={posts} />
  </div>
);
