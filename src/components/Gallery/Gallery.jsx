import React from 'react';
//import * as styles from './styles';

export const Gallery = ({ title, images }) => {
  console.log(images);
  return (
    <>
      {images.map(({ image: { thumbnail: { url } }, caption }) => (
        <>
          <img src={url} />
          <p>{caption}</p>
        </>
      ))}
    </>
  );
};
