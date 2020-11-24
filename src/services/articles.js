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

export const getAuthor = async (uid) =>
  parseAuthorData(await Client().getByUID('author', uid));

export const getPostSlugs = async () =>
  (await getArticlesAPI()).map((article) => article.uid);

export const getAuthorSlugs = async () =>
  (await getAuthorsAPI()).map((article) => article.uid);

const parseArticleData = ({
  id,
  uid,
  first_publication_date,
  data: { title, image, author, content, color, summary },
  ...article
}) => ({
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
});

export const getPosts = async (author) =>
  (await getArticlesAPI(author)).map(parseArticleData);

const parseAuthorData = ({
  uid,
  id,
  data: { name, image, intro },
  ...author
}) => ({
  id,
  uid,
  name,
  image: image.url,
  intro,
  slug: uid,
  url: `/${uid}`,
});

export const getAuthors = async () =>
  await getAuthorsAPI().map(parseAuthorData);

const getArticlesAPI = async (author) =>
  (
    await Client().query([
      Prismic.Predicates.at('document.type', 'article'),
      author && Prismic.Predicates.at('my.article.author', author),
    ])
  ).results;

export const getAuthorsAPI = async () =>
  (await Client().query([Prismic.Predicates.at('document.type', 'author')]))
    .results;
