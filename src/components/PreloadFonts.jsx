import React from 'react';

export const PreloadFonts = ({ fonts }) => (
  <>
    {fonts.map(({ family, formats: { ttf } }) => (
      <link
        key={family}
        rel="preload"
        href={ttf}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    ))}
  </>
);
