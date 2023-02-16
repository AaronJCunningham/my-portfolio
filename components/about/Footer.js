import React from "react";

import { FaGithub, FaTwitter, FaInstagramSquare } from "react-icons/fa";

export function Footer({}) {
  return (
    <footer id="contact">
      <div id="footer_icons">
        <a
          className="footer_icon"
          href="https://twitter.com/xelevendottech"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          className="footer_icon"
          href="https://www.instagram.com/aaron.j.cunningham"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare />
        </a>
        <a
          className="footer_icon"
          href="https://github.com/AaronJCunningham"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <p>
        contact me:
        <a className="email" href="mailto:aaron@xeleven.tech">
          aaron@xeleven.tech
        </a>
      </p>
      <p id="copyright">
        All Rights Reserved{" "}
        <a
          className="reverse-link"
          href="https://xeleven.tech"
          target="_blank"
          rel="noreferrer"
        >
          XELEVEN Metaverse & Web3 Studio
        </a>{" "}
        - 2022
      </p>
    </footer>
  );
}
