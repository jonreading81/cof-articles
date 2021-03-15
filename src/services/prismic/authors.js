import { Client, Prismic, getDocuments, getDocument } from './prismic';

const parseAuthorData = ({
  uid,
  id,

  tags,
  data: { name, image, intro, meta },
  ...author
}) => ({
  id,
  uid,
  meta,
  tags,
  name,
  image: image.url,
  intro,
  slug: uid,
  url: `/${uid}`,
});

export const getAuthor = async (uid) =>
  parseAuthorData(await getDocument('author', uid));

export const getAuthors = async () =>
  await getAuthorList().map(parseAuthorData);

const getAuthorList = async () => getDocuments('author');

export const getAuthorSlugs = async () =>
  (await getAuthorList()).map((author) => author.uid);
