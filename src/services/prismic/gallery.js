import { getDocument } from './prismic';

const parseGalleryData = ({ uid, id, data }) => {
  if (data) {
    const { title, images } = data;
    return {
      id,
      uid,
      title,
      images,
    };
  }
};

export const getGallery = async (uid) =>
  parseGalleryData(await getDocument('gallery', uid));
