import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import * as styles from './styles';

export const Header = ({ style }) => (
  <Link href="/">
    <a css={[styles.heading, style]}>Call of the Forest</a>
  </Link>
);
