import React from 'react';
import { grid, avatar } from '../../styles';
import * as styles from './styles';
import { SRLWrapper } from 'simple-react-lightbox';

export const Gallery = ({ title, images }) => (
  <SRLWrapper>
    <div css={grid}>
      {images.map(({ image: { url: main, thumbnail: { url } }, caption }) => (
        <div key={url} css={styles.imageWrapper}>
          <a href={main} data-attribute="SRL">
            <img css={styles.image} src={url} alt={caption} />
            <p css={styles.caption}>{caption}</p>
          </a>
        </div>
      ))}
    </div>
  </SRLWrapper>
);
