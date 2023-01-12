import React from "react";
import Navigation from "./navigation";

const Layout = ({ children }) => {
  return (
    <section className="mx-auto flex flex-col px-6 py-6 lg:container lg:h-screen">
      <Navigation />
      <main className="grow">{children}</main>
    </section>
  );
};

export default Layout;
