import React from "react";
import HeaderBar from "./HeaderBar";
import "../styles/global.css";

function Layout({ children }) {
  return (
    <div>
      <HeaderBar/>
      <main>
        { children }
      </main>
    </div>
  )
}

export default Layout;