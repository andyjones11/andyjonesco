import Head from "next/head";
import Social from "./Social";
import React from "react";
import SiteHead from "./SiteHead";
import Link from "next/link";

const Wrapper = ({ children, theme }) => (
  <div
    className={`
      antialiased 
      min-h-screen 
      flex flex-col
      ${theme === "white" ? "bg-white text-black" : "bg-black text-white"}
    `}
  >
    {children}
  </div>
)

const Header = ({ theme, showHeader }) => (
  <header className="pt-6 px-6 flex justify-end font-semibold">
    {showHeader && (
      <Link href="/">
        <a
          className={`
          ${theme === "white" ?
            "text-black hover:bg-black hover:text-white" :
            "text-white hover:bg-white hover:text-black"}
          p-2 transition-colors duration-200 ease-in-out
        `}
        >
          Home
        </a>
      </Link>
    )}
  </header>
)

const Main = ({ children }) => (
  <main className="flex-grow flex">
    <div className="px-6 flex flex-col">
      {children}
    </div>
  </main>
)

const Footer = () => (
  <div className="mb-10 flex justify-center">
    <Social/>
  </div>
)

const Layout = ({ children, theme, showHeader = true }) => {
  return (
    <Wrapper theme={theme}>
      <SiteHead/>
      <Header showHeader={showHeader} theme={theme}/>
      <Main>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  )
}

export default Layout