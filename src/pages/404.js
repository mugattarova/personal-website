import * as React from 'react';
import Layout from '../components/Layout';
import '../styles/global.css';
import { EmbeddedLink } from '../components/elements/Link';

const NotFoundPage = () => {
  return (
    <Layout pagetitle={'404 Page not found'}>
      <div className='h-screen'>
        nothing's here! check out my{' '}
        <EmbeddedLink to='/'> work </EmbeddedLink>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
