import React from "react";
import Layout from "../components/layout";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import profilePicture from "../images/profile-picture.png";

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
          Contact
        </a>
      </div>
    </div>
    <div className="mt-6 w-4/6 md:w-1/2 lg:mt-0 lg:w-2/6">
      <span className="sr-only">Kdiko</span>
      <svg
        viewBox="0 0 200 187"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        <mask id="mask0" mask-type="alpha">
          <path
            fill="#ffffff"
            d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            fill="#ffffff"
            d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
          />
          <image width="250" x="-20" y="-25" href={profilePicture} />
        </g>
      </svg>
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
