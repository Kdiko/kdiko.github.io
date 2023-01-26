import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;

const Hero = () => (
  <div className="flex h-full flex-col-reverse items-center justify-evenly lg:flex-row">
    <div className="mt-6 lg:mt-0 lg:w-2/5">
      <h1 className="text-5xl font-bold tracking-tight">Hi, I'm Daniel</h1>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brilliant-sea-700">
        Software Developer at Kdiko
      </h3>
      <p className="mt-4 text-lg leading-8 text-gray-600">
        Helping clients of all sizes build high-quality web, mobile or desktop
        applications that meet their specific needs. Focused on delivering
        solutions that are functional, user-friendly and easy to maintain.
      </p>
      <div className="mt-8 flex gap-x-4">
        <a
          href="mailto:daniel.johansson@kdiko.se"
          className="inline-block rounded-lg bg-brilliant-sea-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-brilliant-sea-600 hover:bg-brilliant-sea-700 hover:ring-brilliant-sea-700"
        >
          Hire Me
        </a>
      </div>
    </div>
    <div className="mt-6 w-4/6 md:w-1/2 lg:mt-0 lg:w-2/6">
      <span className="sr-only">Picture of Daniel</span>
      <StaticImage
        src="../images/profile-picture.png"
        alt="Picture of Daniel"
        loading="eager"
        placeholder="blurred"
        quality={90}
        blurredOptions={{
          width: 128,
        }}
        imgStyle={{
          transform: "none",
          willChange: "auto",
        }}
      />
    </div>
  </div>
);

export const Head = () => {
  const { title, image } = useSiteMetadata();

  return (
    <>
      <title>{title}</title>
      <meta name="image" content={image} />
    </>
  );
};
