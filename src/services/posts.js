import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

const POSTS_PATH = 'posts';

export const getPost = (slug) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join(POSTS_PATH, slug + '.md'))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content);

  return {
    ...parsedMarkdown.data,
    slug,
    url: `/articles/${slug}`,
    htmlString,
  };
};

export const getSlugs = () => {
  const files = fs.readdirSync(POSTS_PATH);
  return files.map(getSlug);
};

export const getSlug = (filename) => filename.replace('.md', '');

export const getPosts = () =>
  getSlugs()
    .map(getPost)
    .sort((a, b) => new Date(b.published) - new Date(a.published));
