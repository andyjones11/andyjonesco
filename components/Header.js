import Link from "next/link";
import React from "react";

const Header = ({ theme, showHeader }) => (
  <header className="pt-6 px-6 flex justify-end font-semibold md:container md:mx-auto">
    {showHeader && (
      <Link href="/">
        <a
          className={`
          ${theme === "white" ?
            "text-gray-900 hover:bg-black hover:text-white" :
            "text-white hover:bg-white hover:text-gray-900"}
          p-2 transition-colors duration-200 ease-in-out
        `}
        >
          Home
        </a>
      </Link>
    )}
  </header>
)

export default Header