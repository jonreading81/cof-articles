import Link from 'next/link';
import fs from 'fs';

const Home = ({ slugs }) => (
  <div>
    <h1>COF Articles</h1>
    <ul>
      {slugs.map((slug) => (
        <li key={slug}>
          <Link href={`/articles/${slug}`}>
            <a>{slug}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
  return {
    props: {
      slugs: files.map((filename) => filename.replace('.md', '')),
    },
  };
};

export default Home;
