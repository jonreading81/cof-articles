import { Client, Prismic } from './prismic';

export const getPost = async (uid) => {
  const article = await Client().getByUID('article', uid);
  const author = await getAuthor(article.data.author.uid);

  return parseArticleData({
    ...article,
    data: {
      ...article.data,
      author,
    },
  });
};

export const getAuthor = async (uid) => {
  const author = await Client().getByUID('author', uid);
  return parseAuthorData(author);
};

export const getPostSlugs = async () => {
  const articles = await getArticlesAPI();
  const slugs = articles.map((article) => article.uid);
  return slugs;
};

export const getAuthorSlugs = async () => {
  const authors = await getAuthorsAPI();
  const slugs = authors.map((article) => article.uid);
  return slugs;
};

const parseArticleData = ({
  id,
  uid,
  first_publication_date,
  data: { title, image, author, content, color, summary },
  ...article
}) => {
  return {
    id,
    uid,
    slug: uid,
    author,
    title: title,
    summary,
    mastheadImage: image.url,
    thumbnail: image.thumb.url,
    url: `/articles/${uid}`,
    published: first_publication_date,
    content,
    color,
  };
};

export const getPosts = async (author) => {
  return (await getArticlesAPI(author)).map(parseArticleData);
};

const parseAuthorData = ({
  uid,
  id,
  data: { name, image, intro },
  ...author
}) => {
  return {
    id,
    uid,
    name,
    image: image.url,
    intro,
    slug: uid,
    url: `/${uid}`,
  };
};

export const getAuthors = async () => {
  (await getAuthorsAPI()).map(parseAuthorData);
};

const getArticlesAPI = async (author) => {
  const { results } = await Client().query([
    Prismic.Predicates.at('document.type', 'article'),
    author && Prismic.Predicates.at('my.article.author', author),
  ]);
  return results;
};

export const getAuthorsAPI = async () => {
  const { results } = await Client().query([
    Prismic.Predicates.at('document.type', 'author'),
  ]);
  return results;
};
