import React from 'react';
import Layout from '../components/Layout';
import '../styles/global.css';

const HomePage = () => {
 return (
  <Layout pagetitle={''}>
    <div>
      <div className='text-5xl font-bold pt-24'>
        hello, I'm <span className='font-logo text-8xl bg-main-img bg-clip-text text-transparent'>Nelli</span>.
      </div>
      <div className='text-md pt-1'>
        quality-focused and creative Software Developer with a love for building user-friendly applications.
      </div>

      <h3 className='text-bold '>Work</h3>

 
    </div>
  </Layout>
 )
};

export default HomePage;

export const Head = () => <title>Home Page</title>;
