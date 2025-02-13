import * as React from 'react';
import Layout from '../components/Layout';
import '../styles/global.css';
import Link from '../components/elements/Link';

const NotFoundPage = () => {
  return (
    <Layout pagetitle={'404 Page not found'}>
      <div>
        nothing's here! check out my <Link to='/'> work </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
