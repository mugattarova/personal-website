import React from 'react';
import '../styles/global.css';
import { navigate } from 'gatsby';
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

  const goToMain = () => {
    navigate('/');
  }

  return (
    <nav className='sticky top-0 backdrop-blur-sm min-w-fit mx-auto px-8 py-5'>
      <div className='w-full flex justify-between'>
        
        <div className='font-logo text-blue-munsell-900 text-3xl tracking-wide cursor-pointer pl-2'
            onClick={goToMain}>
          Nelli Mugattarova
        </div>

        <div className='pr-2'>
          <div className='flex space-x-10'>
            {items}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default HeaderBar;
