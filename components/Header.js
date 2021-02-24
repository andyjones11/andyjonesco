import Link from "next/link";
import React from "react";

const getClassName = (theme) => {
  const common = "p-2 transition-colors duration-200 ease-in-out"
  if(theme === "white") {
    return `${common} text-gray-900 hover:bg-black hover:text-white`
  } else {
    return `${common} text-white hover:bg-white hover:text-gray-900`
  }
}

const Header = ({ theme, showHeader }) => (
  <header className="pt-6 px-6 flex justify-end font-semibold md:container md:mx-auto">
    {showHeader && (
      <>
        <Link href="/" className={getClassName(theme)}>Home</Link>
        <Link href="/articles" className={getClassName(theme)}>Articles</Link>
        <Link href="/work" className={getClassName(theme)}>Work</Link>
        <Link href="/contact" className={getClassName(theme)}>Contact</Link>
      </>
    )}
  </header>
)

export default Header