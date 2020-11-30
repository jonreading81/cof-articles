import React, { useContext } from 'react';
import Link from 'next/link';
import * as styles from './styles';
import { NavigationContext } from '../../context/navigation';

const links = [
  { title: 'Articles', href: '/' },
  { title: 'Jon Reading', href: '/jon-reading' },
  { title: ' Amy Varga', href: '/amy-varga' },
];

export const Sidebar = () => {
  const [isOpen, setOpen] = useContext(NavigationContext);

  return (
    <ul onClick={() => setOpen(false)} css={styles.sidebar(isOpen)}>
      {links.map(({ title, href }) => (
        <li css={styles.listItem} key={href}>
          <Link href={href}>
            <a css={styles.link}>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
