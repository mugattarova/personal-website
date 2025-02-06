import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import '../styles/global.css';

export const query = graphql`
  query {
    allMdx ( filter: { excerpt: { regex: "/projects/" }} ) {
      nodes {
        frontmatter {
          title
          picture
          logos
          links {
            title
            url
          }
          shortDescription
          longDescription
        }
        id
      }
    }
  }
`

function HomePage ({ data }) {

  const projects = data.allMdx.nodes.map((project) =>(
    <div className='bg-gray-500 flex w-96 h-60'>
      <GatsbyImage>
      {/*all fields in the mdx must have at least 1 entry to show up in the data */}
      </GatsbyImage>

      <div className=''>

      </div>
    </div>
  ))

 return (
  <Layout pagetitle={''}>
    <div>
      <div className='pt-32 pb-32'>
        <div className='text-5xl font-bold pb-1'>
          hello, I'm <span className='font-logo text-8xl bg-main-img bg-clip-text text-transparent'>Nelli</span>.
        </div>
        <div className='text-md'>
          quality-focused and creative software developer with a love for building user-friendly applications.
        </div>
      </div>

      <br/><br/><br/>
      gamejam<br/><br/><br/>
      school projects?<br/><br/><br/>
      java rmi <br/><br/><br/>
      in socials, include 'website' for funsies<br/><br/><br/>
      machine learning grind and display<br/><br/><br/>
      dissertation<br/><br/><br/>
      data science thing?<br/><br/><br/>
      pathfinding visualizers<br/><br/><br/>
      advent of code<br/><br/><br/>
    </div>
  </Layout>
 )
};


export default HomePage;
export const Head = () => <title>Home Page</title>;
