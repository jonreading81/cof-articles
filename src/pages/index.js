import React from 'react';
import Link from 'next/link';
import { getPosts } from '../services/posts';
import { grid, gridItem } from '../styles/grid';

const Home = ({ posts }) => (
  <div>
    <h1>Amys Articles</h1>
    <div css={grid}>
      {posts.map(({ title, slug, image, description }) => (
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
  </div>
);

export const getStaticProps = async () => ({
  props: {
    posts: getPosts(),
  },
});

export default Home;
