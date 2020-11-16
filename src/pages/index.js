import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '../services/posts';
import { hotpink } from '../styles';

const Home = ({ posts }) => (
  <div>
    <h1 css={hotpink}>Amys Articles</h1>
    <ul>
      {posts.map(({ title, slug, image }) => (
        <li key={slug}>
          <Link href={`/articles/${slug}`}>
            <a>
              <Image src={image} width={60} height={40} />
              <h2 css={hotpink}>{title}</h2>
            </a>
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
