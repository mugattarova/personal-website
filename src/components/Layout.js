import React from "react";
import HeaderBar from "./HeaderBar";
import "../styles/global.css";

const Layout = ({ children, pagetitle }) => {
  return (
    <div className="overscroll-contain min-h-screen">
      <HeaderBar/>
      <div className="flex w-full justify-center">
        <div className="flex flex-col min-w-[700px]">
          {pagetitle ? 
            <div className="font-inputserif text-lilac-800 py-6 text-2xl">
              { pagetitle }
            </div>
          : null }
          <main className="max-w-[750px]">
            { children }
          </main> 
        </div>
      </div>
    </div>
  )
}

export default Layout;