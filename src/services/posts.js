import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

const POSTS_PATH = 'data/posts';
const AUTHORS_PATH = 'data/authors';

const getFileData = (filename) => {
  try {
    const markdownWithMetadata = fs.readFileSync(filename).toString();
    const parsedMarkdown = matter(markdownWithMetadata);
    const htmlString = marked(parsedMarkdown.content);

    return {
      ...parsedMarkdown.data,
      htmlString,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPost = (slug) => {
  const filename = path.join(POSTS_PATH, slug + '.md');
  const post = getFileData(filename);

  if (post) {
    return {
      ...post,
      slug,
      url: `/articles/${slug}`,
      author: getAuthor(post.author),
    };
  }
  return null;
};

export const getAuthor = (slug) => {
  const filename = path.join(AUTHORS_PATH, slug + '.md');
  const author = getFileData(filename);

  if (author) {
    return {
      ...author,
      slug,
      url: `/${slug}`,
    };
  }
  return null;
};

export const getSlug = (filename) => filename.replace('.md', '');

const getSlugs = (path) => {
  const files = fs.readdirSync(path);
  return files.map(getSlug);
};

export const getPostSlugs = () => getSlugs(POSTS_PATH);
export const getAuthorSlugs = () => getSlugs(AUTHORS_PATH);

export const getPosts = (author = 'all') =>
  getPostSlugs(author)
    .map(getPost)
    .filter((post) => author === 'all' || author === post.author.slug)
    .sort((a, b) => new Date(b.published) - new Date(a.published));

export const getAuthors = () => getAthorSlugs().map(getAuthor);
