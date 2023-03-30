import React from "react";
import { Link } from "gatsby";
import logo from "../../images/kdiko-logo.png";

const NavigationLogo = () => (
  <Link to="/" className="-m-1.5 p-1.5">
    <span className="sr-only">Kdiko</span>
    <img className="h-8" src={logo} alt="" />
  </Link>
);

export { NavigationLogo };
