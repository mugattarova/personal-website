import React from "react";
import Layout from "../components/Layout";
import "../styles/global.css";

const HomePage = () => {
 return (
  <Layout pagetitle={'home page, allegedly'}>
    <div>
      hello I'm Nelli
      <br/><br/><br/>
      content goes here
    </div>
  </Layout>
 )
}

export default HomePage

export const Head = () => <title>Home Page</title>
