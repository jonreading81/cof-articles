import React from 'react';
import { Global } from '@emotion/react';
import { global } from '../styles';

const App = ({ Component, pageProps }) => (
  <>
    <Global styles={global} />
    <Component {...pageProps} />
  </>
);

export default App;
