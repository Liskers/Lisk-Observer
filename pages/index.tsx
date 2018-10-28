import React from "react";
import Link from "next/link";
import { Button } from "reakit";

export default () => (
  <ul>
    <li>
      <Link href="/a" as="/a">
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href="/b" as="/b">
        <a>b</a>
      </Link>
    </li>
    <Button>Button</Button>
  </ul>
);
