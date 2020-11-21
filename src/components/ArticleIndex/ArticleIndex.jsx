import React from 'react';
import { ArticleGrid } from '../ArticleGrid';

export const ArticleIndex = ({ posts, children }) => (
  <div>
    {children}
    <ArticleGrid articles={posts} />
  </div>
);
