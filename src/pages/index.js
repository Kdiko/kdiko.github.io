import React from "react"
import Layout from "../components/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import profilePicture from "../images/profile-picture.jpg";

const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
    </Layout>
  )
}

export default IndexPage

const Hero = () => (
  <div className='flex flex-col-reverse lg:flex-row h-full justify-evenly items-center'>
    <div className="lg:w-2/5 mt-6 lg:mt-0">
      <h1 className="text-6xl font-bold tracking-tight">Hi, I'm Daniel</h1>
      <h3 className="mt-6 text-xl font-bold tracking-tight">Full Stack Developer at Kdiko</h3>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Over four years of experience in React.js, JavaScript and Java, among other technologies. Focused on delivering clean and efficient code.
      </p>
      <div className="mt-8 flex gap-x-4">
        <a href="mailto:daniel.johansson@kdiko.se" className="inline-block rounded-lg bg-charcoal-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-charcoal-600 hover:bg-charcoal-700 hover:ring-charcoal-700">
          Contact
        </a>
      </div>
    </div>
    <div className="w-4/6 md:w-1/2 lg:w-2/6 mt-6 lg:mt-0">
      <span className="sr-only">Kdiko</span>
      <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
        <mask id="mask0" mask-type="alpha">
            <path fill="#333333" d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
        </mask>
        <g mask="url(#mask0)">
            <path fill="#333333" d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
            <image width="250" x="-20" y="-25"  href={profilePicture}/>
        </g>
      </svg>
    </div>
  </div>
);

export const Head = () => {
  const { title, image } = useSiteMetadata()

  return (
    <>
      <title>{title}</title>
      <meta name="image" content={image} />
    </>
  )
}
