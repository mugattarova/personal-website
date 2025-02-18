import React from 'react';
import '../styles/global.css';

const linkslist = [
  {
    label: 'linkedin',
    link: 'https://www.linkedin.com/in/nelli-mugattarova/',
  },
  {
    label: 'github',
    link: 'https://github.com/mugattarova',
  },
  {
    label: 'website',
    link: '/',
  },
];

export default function Footer() {
  const items = linkslist.map((link) => (
    <a
      href={link.link}
      className='text-blue-munsell-900 decoration-lilac-700 decoration-solid decoration-2 underline-offset-8 hover:text-lilac-800 hover:underline'
    >
      {link.label}
    </a>
  ));

  return (
    <div className='relative bottom-0 min-w-full'>
      <hr className='max-w-home m-auto justify-start border-blue-munsell-900' />
      <div className='z-50 mx-auto mt-4 flex bg-gradient-to-t from-lilac-500/60 px-8 pb-14 pt-28'>
        <div className='flex w-9/12 justify-end'>
          <div className='flex space-x-10'>{items}</div>
        </div>
      </div>
    </div>
  );
}
