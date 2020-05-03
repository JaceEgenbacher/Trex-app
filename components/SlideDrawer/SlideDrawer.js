import React from 'react';
import Link from 'next/link';

const slideDrawer = (props) => (
  <ul className="slide-drawer">
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/statistics">
        <a>Statistics</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>About</a>
      </Link>
    </li>
  </ul>
);

export default slideDrawer;
