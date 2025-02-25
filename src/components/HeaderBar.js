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
    <nav className='relative z-50 mx-auto flex w-full min-w-fit justify-center bg-offwhite/20 px-8 py-6 backdrop-blur-md md:sticky md:top-0'>
      <div className='flex w-9/12 justify-around md:justify-between'>
        <div
          className='font-logo hidden cursor-pointer text-2xl tracking-wide text-blue-munsell-900 md:inline'
          onClick={goToMain}
          onKeyDown={goToMain}
        >
          Nelli Mugattarova
        </div>

        <div className='contents md:flex md:space-x-10'>{items}</div>
      </div>
    </nav>
  );
}
