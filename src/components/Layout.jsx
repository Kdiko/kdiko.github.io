import React from "react";
import { NavigationBar } from "./navigation-bar";

const Layout = ({ children }) => {
  return (
    <section className="mx-auto flex flex-col px-6 py-6 lg:container lg:h-screen">
      <NavigationBar />
      <main className="grow">{children}</main>
    </section>
  );
};

export { Layout };
