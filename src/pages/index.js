import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import '../styles/global.css';

function HomePage({ data }) {
  const projects = data.allFile.nodes.map((projectmdx) => {
    const id = projectmdx.childMdx.id;
    const project = projectmdx.childMdx.frontmatter;

    return (
      <div className='mx-4 mb-48 flex w-auto last:mb-0'>
        <GatsbyImage
          image={getImage(project.picture)}
          alt='Project Image'
          className='z-0 my-auto h-48 w-48 flex-none rounded-3xl object-contain invert-[0.18] saturate-[1.10]'
        />

        <div className='my-6 ml-8 flex-1'>
          <h3 className='mb-6 text-xl font-bold'>{project.title}</h3>
          <p className='mb-8 text-sm'>{project.shortDescription}</p>

          <div className='flex'>
            {project.links.map((link) => (
              <a
                href={link.url}
                className='mr-5 rounded-xl bg-jordy-blue px-4 py-1 hover:bg-jordy-blue-400 hover:transition hover:duration-300'
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  });

  return (
    <Layout pagetitle={''}>
      <div>
        <div className='pb-40 pt-28'>
          <div className='pb-1 text-5xl font-bold'>
            hi, I'm{' '}
            <span className='font-logo bg-main-img bg-clip-text text-8xl text-transparent'>
              Nelli
            </span>
            .
          </div>
          <div className='text-md w-2/3'>
            software engineer. crafter. dreamer.
          </div>
        </div>
        <hr />
        <div className='flex flex-col py-24'>{projects}</div>

        {/* 
        school projects?
        machine learning grind and display
        data science thing?
        pathfinding visualizers */}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "projects" }
        childMdx: {
          body: { ne: null }
          frontmatter: { title: { ne: null } }
        }
      }
      sort: { childMdx: { frontmatter: { order: ASC } } }
    ) {
      nodes {
        childMdx {
          frontmatter {
            links {
              title
              url
            }
            logos
            longDescription
            shortDescription
            title
            picture {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
export const Head = () => <title>Home Page</title>;
