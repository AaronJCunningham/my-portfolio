import { FaDiscord, FaTwitter, FaInstagramSquare } from "react-icons/fa";

import React from "react";
export function Icons({}) {
  return (
    <div id="icons">
      <a
        className="icon"
        href="https://twitter.com/x11_tech"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        className="icon"
        href="https://instagram.com/x11_tech"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagramSquare />
      </a>
    </div>
  );
}
