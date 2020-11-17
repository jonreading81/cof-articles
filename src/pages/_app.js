import React from 'react';
import { Global } from '@emotion/react';
import { global } from '../styles/global';
import { theme } from '../styles/theme';
import { maxWidthContainer } from '../styles/containers';
import { PreloadFonts } from '../components/PreloadFonts';

const App = ({ Component, pageProps }) => (
  <>
    <PreloadFonts fonts={Object.values(theme.fonts)} />
    <Global styles={global} />
    <div css={maxWidthContainer}>
      <Component {...pageProps} />
    </div>
  </>
);

export default App;
