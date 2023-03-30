import React from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavigationLogo } from "./NavigationLogo";
import { NavigationItems } from "./NavigationItems";

const NavigationMenu = ({ open, onClose }) => {
  return (
    <Dialog as="div" open={open} onClose={onClose}>
      <Dialog.Panel
        focus="true"
        className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
      >
        <div className="flex h-9 items-center justify-between">
          <div className="flex">
            <NavigationLogo />
          </div>
          <div className="flex">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={onClose}
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
  );
};

export { NavigationMenu };
