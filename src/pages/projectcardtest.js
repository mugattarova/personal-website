import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import '../styles/global.css';
import Layout from '../components/Layout';
import Link from '../components/elements/Link';

export default function ProjectCard() {
  const project = {
    title: 'GameJam stuff',
    picture: '/static/img/abstract-bg-dupl-friendly-blur.png',
    logos: [
      'java', 'github'
    ],
    links: {
      github: {title: 'GitHub',
      outlink: 'https://github.com/mugattarova/AdventofCode2024'},
      itch: {title: 'Itch.io',
        outlink: 'https://tomatosaur.itch.io/feed-the-minotaur'}
    },
    shortDescription: 'Short deskkk',
    longDescription: 'Long desk (tasty)'
  }

  return (
    <Layout pagetitle={'Project'}>
      <div className='flex w-96 h-64'>
        
        <GatsbyImage className='flex-none'>

        </GatsbyImage>

        <div className='flex-auto'>
          <h3>{project.title}</h3>

          {/* <div className="project-list__project__logos">
            {project.logos?.map((logoName) => {
              const Icon = icons[logoName]
              return <Icon key={logoName} className="themed--stroke" />
            })}
          </div> */}
          
          <p className=''>{project.shortDescription}</p>
          <Link></Link>

        </div>

      </div>
    </Layout>
  )
};

export const Head = () => <title>Not found</title>;
