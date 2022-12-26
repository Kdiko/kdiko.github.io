import React from "react"
import Navigation from "./navigation";

const Layout = ({ children }) => {
  return (
    <section className="flex flex-col lg:h-screen px-6 py-6 lg:container mx-auto">
      <Navigation />
      <main className="grow">
        {children}
      </main>
    </section>
  )
}

export default Layout;