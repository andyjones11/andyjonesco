import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router'

const getClassName = (theme, active) => {
  const common = "p-2 transition-colors duration-200 ease-in-out"

  const whiteActive = `${common} bg-black text-white`
  const whiteInactive = `${common} hover:bg-black hover:text-white`

  const blackActive = `${common} bg-white text-black`
  const blackInactive = `${common} text-white hover:bg-white hover:text-black`

  switch (theme) {
    case "white":
      return active ? whiteActive : whiteInactive
    default:
      return active ? blackActive : blackInactive
  }
}

const Header = ({ theme, showHeader }) => {
  const router = useRouter();
  return (
    <header className="pt-6 px-6 flex justify-end font-semibold md:container md:mx-auto">
      {showHeader && (
        <div className="space-x-5">
          <Link href="/">
            <a className={getClassName(theme, router.pathname === "/")}>Home</a>
          </Link>
          <Link href="/articles">
            <a className={getClassName(theme, router.pathname === "/articles")}>Articles</a>
          </Link>
          <Link href="/work">
            <a className={getClassName(theme, router.pathname === "/work")}>Work</a>
          </Link>
          <Link href="/contact">
            <a className={getClassName(theme, router.pathname === "/contact")}>Contact</a>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header