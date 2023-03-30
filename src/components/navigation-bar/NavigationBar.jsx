import React from "react";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavigationLogo } from "./NavigationLogo";
import { NavigationItems } from "./NavigationItems";
import { NavigationMenu } from "./NavigationMenu";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav
        className="flex h-9 items-center justify-between"
        aria-label="Global"
      >
        <div className="lg:flex-0 flex lg:min-w-0" aria-label="Global">
          <NavigationLogo />
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:gap-x-12">
          <NavigationItems className="hover:text-brilliant-sea-700" />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <NavigationMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export { NavigationBar };
