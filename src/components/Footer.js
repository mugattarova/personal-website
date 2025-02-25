import React from 'react';
import '../styles/global.css';
import { SOCIALS_LINKS } from './constants';
import Link from './elements/Link';

export default function Footer() {
  const items = SOCIALS_LINKS.map((link) => (
    <div className='text-right'>
      <Link to={link.link}>{link.label}</Link>
    </div>
  ));

  return (
    <div className='relative bottom-0'>
      <div className='md:mb-40'></div>
      <div className='m-auto px-12 md:w-2/5 md:p-0'>
        <hr className='invisible m-auto md:visible' />

        <div className='mt-4 pt-20 md:pt-28'>
          <div className='absolute left-0 h-full w-full bg-gradient-to-t from-lilac-500/60'></div>

          <div className='relative mx-auto flex w-full justify-end'>
            <div className='grid grid-cols-1 gap-4 md:flex md:flex-row-reverse md:flex-wrap lg:gap-10'>
              {items}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
