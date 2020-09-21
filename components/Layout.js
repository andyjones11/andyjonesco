import React from "react";
import SiteHead from "./SiteHead";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Footer from "./Footer";

const Main = ({ children }) => (
  <main className="flex-grow flex">
    <div className="px-6 flex flex-col overflow-x-hidden md:container md:mx-auto">
      {children}
    </div>
  </main>
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