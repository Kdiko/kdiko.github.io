import React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../images/kdiko-logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav
        className="flex h-9 items-center justify-between"
        aria-label="Global"
      >
        <div className="lg:flex-0 flex lg:min-w-0" aria-label="Global">
          <Logo />
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:gap-x-12">
          <NavigationItems className="hover:text-brilliant-sea-700" />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
        >
          <div className="flex h-9 items-center justify-between">
            <div className="flex">
              <Logo />
            </div>
            <div className="flex">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavigationItems className="-mx-3 block rounded-lg py-2 px-3 text-base leading-7 hover:bg-gray-400/10" />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Navigation;

const Logo = () => (
  <Link to="/" className="-m-1.5 p-1.5">
    <span className="sr-only">Kdiko</span>
    <img className="h-8" src={logo} alt="" />
  </Link>
);

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
