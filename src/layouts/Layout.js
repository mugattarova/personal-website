import React from "react";
import HeaderBar from "../components/HeaderBar";

function Layout({ children }) {
  return (
    <>
      <HeaderBar/>
      <main>
        { children }
      </main>
    </>
  )
}

export default Layout;