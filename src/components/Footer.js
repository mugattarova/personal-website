import React from 'react';
import '../styles/global.css';
import { SOCIALS_LINKS } from './constants';

export default function Footer() {
  const items = SOCIALS_LINKS.map((link) => (
    <a
      href={link.link}
      className='text-blue-munsell-900 decoration-lilac-700 decoration-solid decoration-2 underline-offset-8 hover:text-lilac-800 hover:underline'
    >
      {link.label}
    </a>
  ));

  return (
    <div className='relative bottom-0 min-w-full'>
      <div className='mb-20'></div>
      <hr className='w-home m-auto' />
      <div className='z-50 mx-auto mt-4 bg-gradient-to-t from-lilac-500/60 px-8 pb-14 pt-28'>
        <div className='w-home mx-auto flex justify-end'>
          <div className='space-x-10'>{items}</div>
        </div>
      </div>
    </div>
  );
}
