import React from 'react';
import Layout from '../components/Layout';
import '../styles/global.css';
import { StaticImage } from 'gatsby-plugin-image';
import TabTitle from '../components/elements/TabTitle';
import { graphql } from 'gatsby';
import { SOCIALS_LINKS } from '../components/constants';
import { EmbeddedLink } from '../components/elements/Link';

export default function AboutPage() {
  const email = SOCIALS_LINKS.find((link) => link.label === 'email');
  return (
    <Layout pagetitle={'Hello, hello!'}>
      <div className=''>
        <div className='container'>
          <StaticImage
            src='../../static/img/pfp_winter_kazan.jpg'
            alt='Photo of Nelli Mugattarova'
            className='float-left mb-14 mr-14 aspect-square w-full rounded-lg align-middle shadow-2xl shadow-jordy-blue/90 md:w-80'
          />
          <div className=''>
            Software engineer, based in Paphos, Cyprus.
            <br />
            <br />
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

      <div className='text-center text-xl'>
        <br />
        <br />
        <br />
        <br />
        <br />
        get in touch at{' '}
        <EmbeddedLink to={email.link}>{email.address}</EmbeddedLink>
      </div>
      <div className='pt-14 md:pt-28'></div>
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
