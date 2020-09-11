import Head from "next/head";
import React from "react";
import Social from "./Social";
import SiteHead from "./SiteHead";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="antialiased min-h-screen bg-white text-black font-semibold">
      <SiteHead/>
      <header className="pt-6 px-6 flex justify-end">
        <Link href="/">
          <a className="hover:bg-black hover:text-white p-2 transition-colors duration-200 ease-in-out">
            Home
          </a>
        </Link>
      </header>
      <main className="flex-grow">
        <div className="p-6 flex flex-col">
          <div className="flex-grow">
            <div className="container mx-auto">
              {children}
            </div>
          </div>
          <div className="my-10 flex justify-center">
            <Social/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout