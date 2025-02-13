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
      <div className='mx-4 mb-48 flex w-auto'>
        <GatsbyImage
          image={getImage(project.picture)}
          alt='Project Image'
          className='z-0 rounded-3xl'
        />

        <div className='my-6 ml-8'>
          <h3 className='mb-6 text-xl font-bold'>{project.title}</h3>
          <p className='mb-12 text-sm'>{project.shortDescription}</p>

          <div className='flex'>
            {project.links.map((link) => (
              <a
                href={link.url}
                className='hover:bg-jordy-blue-400 mr-5 rounded-xl bg-jordy-blue px-4 py-1 hover:transition hover:duration-300'
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
        <div className='pb-36 pt-28'>
          <div className='pb-1 text-5xl font-bold'>
            hi, I'm{' '}
            <span className='font-logo bg-main-img bg-clip-text text-8xl text-transparent'>
              Nelli
            </span>
            .
          </div>
          <div className='text-md w-2/3'>
            quality-focused and creative software developer with a
            love for building user-friendly applications.
          </div>
        </div>
        <div className='flex flex-col py-5'>{projects}</div>
        <br />
        <br />
        <br />
        gamejam
        <br />
        <br />
        <br />
        school projects?
        <br />
        <br />
        <br />
        java rmi
        <br />
        <br />
        <br />
        in socials, include 'website' for funsies
        <br />
        <br />
        <br />
        machine learning grind and display
        <br />
        <br />
        <br />
        dissertation
        <br />
        <br />
        <br />
        data science thing?
        <br />
        <br />
        <br />
        pathfinding visualizers
        <br />
        <br />
        <br />
        advent of code
        <br />
        <br />
        <br />
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
                gatsbyImageData(width: 200, height: 200)
              }
            }
          }
          id
        }
      }
    }
  }
`;

export default HomePage;
export const Head = () => <title>Home Page</title>;
