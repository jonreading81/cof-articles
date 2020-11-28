import React from 'react';
import { Global } from '@emotion/react';
import { global } from '../styles/global';
import { theme } from '../styles/theme';
import { maxWidthContainer } from '../styles/containers';
import { PreloadFonts } from '../components/PreloadFonts';
import { Footer } from '../components/Footer';
import SimpleReactLightbox from 'simple-react-lightbox';

const App = ({ Component, pageProps }) => (
  <>
    <PreloadFonts fonts={Object.values(theme.fonts)} />
    <Global styles={global} />
    <div css={maxWidthContainer}>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
      <Footer />
    </div>
  </>
);

export default App;
