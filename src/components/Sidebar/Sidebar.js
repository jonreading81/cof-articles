import React, { useContext } from "react";
import Link from "next/link";
import * as styles from "./styles";
import { NavigationContext } from "../../context/navigation";

const links = [
  { title: "Articles", href: "/" },
  { title: " Amy Varga", href: "/amy-varga" },
];

export const Sidebar = () => {
  const [isOpen, setOpen] = useContext(NavigationContext);

  return (
    <ul onClick={() => setOpen(false)} css={styles.sidebar(isOpen)}>
      {links.map(({ title, href }) => (
        <li css={styles.listItem} key={href}>
          <Link href={href} css={styles.link}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
