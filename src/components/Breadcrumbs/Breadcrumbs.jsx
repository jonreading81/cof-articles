import React from 'react';
import Link from 'next/link';
import * as styles from './styles';

export const Breadcrumbs = ({ links }) => (
  <ol css={styles.list}>
    {links.map(({ title, url }) => (
      <li key={url} className="text-xs" css={styles.listItem}>
        <Link href={url}>{title}</Link>
      </li>
    ))}
  </ol>
);
