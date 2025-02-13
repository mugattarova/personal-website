import React from 'react';
import Layout from '../components/Layout';
import '../styles/global.css';

const AboutPage = () => {
  return (
    <Layout pagetitle={'About'}>
      <div>
        <div className='text-4xl font-bold'>
          hello I'm <span className='text-jordy-blue'>Nelli</span>.
        </div>
        <br />
        <br />
        <br />
        content goes here
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About</title>;
