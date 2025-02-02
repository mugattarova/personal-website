import React from 'react';
import '../styles/global.css';
import { navigate } from 'gatsby';
import Link from './elements/Link';

const linkslist = [
  { link: '/', label: 'home' },
  { link: '/about', label: 'about' },
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
    <nav className='sticky top-0 flex justify-center backdrop-blur-md bg-offwhite/20 min-w-fit mx-auto px-8 py-7'>
      <div className='w-9/12 flex justify-between'>
        
        <div className='font-logo text-blue-munsell-900 text-2xl tracking-wide cursor-pointer'
            onClick={goToMain} onKeyDown={goToMain}>
          Nelli Mugattarova
        </div>

        <div className='flex space-x-10'>
          {items}
        </div>

      </div>
    </nav>
  );
}

export default HeaderBar;
