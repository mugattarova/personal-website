import React from 'react';
import { graphql, Link } from 'gatsby';
import '../styles/global.css';

const linkslist = [
  { link: '/', label: 'Home' },
  { link: '/404', label: '404 Page' },
];

function HeaderBar() {
  const items = linkslist.map((link) => (
    <Link
      to={link.link}
      className=''
    >
      {link.label}{' '}
    </Link>
  ));

  return (
    <header className='w-full text-center border-b border-grey p-4'>
      <div>
        <h2 className='font-logo text-sky-800 text-3xl'>
          Nelli Mugattarova
        </h2>
      </div>
    </header>
  );
}

export default HeaderBar;
