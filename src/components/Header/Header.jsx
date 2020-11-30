import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import * as styles from './styles';
import { HamburgerButton } from 'react-hamburger-button';
import { NavigationContext } from '../../context/navigation';

export const Header = () => {
  const [isOpen, setOpen] = useContext(NavigationContext);
  return (
    <header css={styles.header}>
      <Link href="/">
        <a css={[styles.heading]}>Call of the Forest</a>
      </Link>
      <HamburgerButton
        open={isOpen}
        onClick={() => setOpen(!isOpen)}
        width={18}
        height={15}
        strokeWidth={1}
        color="black"
        animationDuration={0.5}
      />
    </header>
  );
};
