import React from 'react';
import Layout from '../components/Layout';
import '../styles/global.css';
import { StaticImage } from 'gatsby-plugin-image';
import TabTitle from '../components/elements/TabTitle';
import { graphql } from 'gatsby';

export default function AboutPage() {
  return (
    <Layout pagetitle={'Hello, hello!'}>
      <div className=''>
        <div className='container'>
          <StaticImage
            src='../../static/img/pfp_winter_kazan.jpg'
            alt='Photo of Nelli Mugattarova'
            className='float-left mb-14 mr-14 h-52 w-52 rounded-lg align-middle shadow-2xl shadow-jordy-blue/90'
          />
          <div className='text-sm'>
            I'm a life-long learner that likes to help people and
            share knowledge. I love to make things, whether it be a
            website or a Baby Yoda plushie.
            <br />
            <br />
            I pride myself in having a vision, and dreaming beyond
            what is possible.
            <br />
            <br />
            Outside of my programming, I knit and crochet, go on
            hikes, and visit capybaras at the local zoo.
          </div>
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
  }
`;

export const Head = ({ data }) => (
  <TabTitle data={data}>About</TabTitle>
);
