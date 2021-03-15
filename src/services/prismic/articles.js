import { Client, Prismic, getDocuments, getDocument } from './prismic';
import { getAuthor } from './authors';
import { getGallery } from './gallery';

const parseArticleData = ({
  id,
  uid,
  tags,
  first_publication_date,
  data: { title, image, author, content, color, summary, gallery },
  ...article
}) => {
  return {
    id,
    uid,
    tags,
    slug: uid,
    author,
    gallery,
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

const getArticleList = async (author) =>
  (
    await Client().query([
      Prismic.Predicates.at('document.type', 'article'),
      author && Prismic.Predicates.at('my.article.author', author),
    ])
  ).results;

export const getArticle = async (uid) => {
  const article = await getDocument('article', uid);
  const author = await getAuthor(article.data.author.uid);
  const gallery = article.data.gallery.uid
    ? await getGallery(article.data.gallery.uid)
    : null;

  return parseArticleData({
    ...article,
    data: {
      ...article.data,
      author,
      gallery,
    },
  });
};

export const getArticles = async (author) =>
  (await getArticleList(author)).map(parseArticleData);

export const getArticleSlugs = async () =>
  (await getArticleList()).map((article) => article.uid);
