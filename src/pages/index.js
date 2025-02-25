import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import '../styles/global.css';
import TabTitle from '../components/elements/TabTitle';

export default function HomePage({ data }) {
  const projects = data.allFile.nodes.map((projectmdx) => {
    const project = projectmdx.childMdx.frontmatter;

    return (
      <div className='mx-auto flex w-auto max-w-2xl flex-col items-center gap-8 p-4 md:flex-row'>
        <div className='md:shrink-0'>
          <GatsbyImage
            image={getImage(project.picture)}
            alt='Project Image'
            className='z-0 aspect-square max-w-xs flex-none rounded-3xl object-cover invert-[0.18] saturate-[1.10] md:w-48 md:max-w-none'
          />
        </div>

        <div className='w-full text-center md:ml-4 md:max-w-96 md:text-left'>
          <h3 className='mb-6 text-wrap text-xl font-bold tracking-wider'>
            {project.title}
          </h3>
          <p className='mb-8 text-wrap text-sm'>
            {project.shortDescription}
          </p>

          <div className='flex flex-wrap justify-center gap-3 md:justify-start'>
            {project.links.map((link) => (
              <a
                href={link.url}
                className='flex-1 rounded-xl bg-jordy-blue px-4 py-1 hover:bg-jordy-blue-400 hover:transition hover:duration-300 sm:flex-none'
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
      <div className=''>
        <div className='mx-3 mb-40 mt-28 items-center text-center md:mx-auto md:max-w-xl md:text-left'>
          <div className='pb-1 text-4xl font-bold md:text-5xl'>
            hi, I'm{' '}
            <span className='font-logo break-words bg-main-img bg-clip-text text-7xl tracking-wide text-transparent md:text-8xl'>
              Nelli
            </span>
            <span className='hidden md:inline'>.</span>
          </div>
          <div className='text-md md:w-2/3'>
            software engineer. crafter. dreamer.
          </div>
        </div>
        <hr className='md:mx-auto md:max-w-xl' />

        <div className='mx-auto mt-14 grid grid-cols-1 gap-20 md:mt-24 md:gap-32'>
          {projects}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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

export const Head = ({ data }) => (
  <TabTitle data={data}>Home Page</TabTitle>
);
