import React from "react";

const Wrapper = ({ children, theme }) => (
  <div
    className={`
      antialiased 
      min-h-screen 
      flex flex-col
      ${theme === "white" ? "bg-white text-gray-900" : "bg-black text-white"}
    `}
  >
    {children}
  </div>
)

export default Wrapper