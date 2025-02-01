import React from "react";
import Layout from "../layouts/Layout";
import "../styles/global.css";

const HomePage = () => {
 return (
  <Layout>
    <h1 className="text-lg">
      Home Page
    </h1>
    <div>
      pretty empty here 
    </div>
  </Layout>
 )
}

export default HomePage

export const Head = () => <title>Home Page</title>
