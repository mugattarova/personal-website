import React from 'react';
import '../styles/global.css';
import { graphql } from 'gatsby';
import Link from './elements/Link';

const linkslist = [
  { link: '/', label: 'Home' },
  { link: '/404', label: '404 Page' },
];

function HeaderBar() {
  const items = linkslist.map((link) => (
    <Link
      to={link.link}
    >
      {link.label}
    </Link>
  ));

  return (
    // <div className='w-full bg-lilac/50 backdrop-blur-md p-3'>
    //   <div className='flex'>
    //     <div className='font-logo text-dark-blue justify-start text-3xl tracking-wide'>
    //       Nelli Mugattarova
    //     </div>
    //     <div>
    //       {items}
    //     </div>
    //   </div>
    // </div>
  <nav className='bg-lilac-500/30 sticky top-0 backdrop-blur-sm min-w-fit mx-auto px-8 py-5'>
    <div className='flex justify-evenly'>
      
      <div className='flex-1 font-logo text-dark-blue justify-start text-3xl tracking-wide'>
        Nelli Mugattarova
      </div>

      <div className='flex-1 ml-6 justify-self-end'>
        <div className='flex space-x-4'>
          {items}
        </div>
      </div>

    </div>
  </nav>

  );
}

export default HeaderBar;
