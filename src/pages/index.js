import React from 'react';
import Link from 'next/link';
import { getPosts } from '../services/posts';

const Home = ({ posts }) => (
  <div>
    <h1>Amys Articles</h1>
    <ul>
      {posts.map(({ title, slug, image, description }) => (
        <li key={slug}>
          <Link href={`/articles/${slug}`}>
            <a>
              <img src={image} width={60} height={40} />
              <h2>{title}</h2>
            </a>
          </Link>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export const getStaticProps = async () => ({
  props: {
    posts: getPosts(),
  },
});

export default Home;
