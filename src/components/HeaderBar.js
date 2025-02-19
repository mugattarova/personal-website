import React from 'react';
import '../styles/global.css';
import { navigate } from 'gatsby';
import Link from './elements/Link';

const linkslist = [
  { link: '/', label: 'work' },
  { link: '/about', label: 'about' },
];

export default function HeaderBar() {
  const items = linkslist.map((link) => (
    <Link to={link.link}>{link.label}</Link>
  ));

  const goToMain = () => {
    navigate('/');
  };

  return (
    <nav className='sticky top-0 z-50 mx-auto flex min-w-fit justify-center bg-offwhite/20 px-8 py-6 backdrop-blur-md'>
      <div className='flex w-9/12 justify-between'>
        <div
          className='font-logo cursor-pointer text-2xl tracking-wide text-blue-munsell-900'
          onClick={goToMain}
          onKeyDown={goToMain}
        >
          Nelli Mugattarova
        </div>

        <div className='flex space-x-10'>{items}</div>
      </div>
    </nav>
  );
}
