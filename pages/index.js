import Link from 'next/link';
import { getPosts } from '../services/posts';

const Home = ({ posts }) => (
  <div>
    <h1>Amys Articles</h1>
    <ul>
      {posts.map(({ title, slug }) => (
        <li key={slug}>
          <Link href={`/articles/${slug}`}>
            <a>{title}</a>
          </Link>
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
