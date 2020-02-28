import React from "react";
import { Link } from "react-router-dom";
import Brands from "./Brands";

const Navbar = () => (
  <div>
    <div class="pa3 pa4-ns">
      <a
        class="link dim black b f2 f-headline-ns tc db mb3 mb4-ns"
        href="!#"
        title="Home"
      >
        World Blist
      </a>
    </div>
    <div class="tc pb3">
      <Link class="link dim gray f6 f5-ns dib mr3" to="/">
        Home
      </Link>
      <Link class="link dim gray f6 f5-ns dib mr3" to="/about">
        About
      </Link>
      <Link class="link dim gray f6 f5-ns dib mr3" to="/store">
        Store
      </Link>
      <Link class="link dim gray f6 f5-ns dib mr3" to="/contact">
        Contact
      </Link>
    </div>
    <div class="brandname">
      <Brands />
    </div>
  </div>
);

export default Navbar;
