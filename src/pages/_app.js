import React from 'react';
import { Global } from '@emotion/react';
import { global } from '../styles/global';
import { contentWrapper } from '../styles/contentWrapper';
import { theme } from '../styles/theme';
import { maxWidthContainer } from '../styles/containers';
import { PreloadFonts } from '../components/PreloadFonts';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

import SimpleReactLightbox from 'simple-react-lightbox';
import { NavigationContextProvider } from '../context/navigation';

const App = ({ Component, pageProps }) => (
  <>
    <PreloadFonts fonts={Object.values(theme.fonts)} />
    <Global styles={global} />
    <div css={maxWidthContainer}>
      <SimpleReactLightbox>
        <NavigationContextProvider>
          <Header />
          <div css={contentWrapper}>
            <Sidebar />
            <Component {...pageProps} />
          </div>
        </NavigationContextProvider>
      </SimpleReactLightbox>
      <Footer />
    </div>
  </>
);

export default App;
