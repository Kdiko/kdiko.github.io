import React from "react";
import { Link } from "gatsby";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "about", disabled: true },
  { name: "Work", href: "work", disabled: true },
];

const NavigationItems = ({ className }) => (
  <>
    {navigationItems.map((item) => (
      <Link
        key={item.name}
        to={item.href}
        className={`${className} font-semibold text-gray-900 ${
          item.disabled ? "pointer-events-none" : ""
        }`}
        activeClassName="!text-brilliant-sea-700"
      >
        {item.name}
      </Link>
    ))}
    <a
      key="Contact"
      href="mailto:daniel.johansson@kdiko.se"
      className={`${className} font-semibold text-gray-900`}
    >
      Contact
    </a>
  </>
);

export { NavigationItems };
