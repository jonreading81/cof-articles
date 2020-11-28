import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://call-of-the-forest.prismic.io/api/v2';
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

const getDocuments = async (type) =>
  (await Client().query([Prismic.Predicates.at('document.type', type)]))
    .results;

const getDocument = async (type, uid) => await Client().getByUID(type, uid);

export { Prismic, Client, getDocuments, getDocument };
