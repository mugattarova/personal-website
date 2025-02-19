import React from 'react';
import HeaderBar from './HeaderBar';
import '../styles/global.css';
import Footer from './Footer';

export default function Layout({ children, pagetitle }) {
  return (
    <div className='min-h-dvh overscroll-contain'>
      <HeaderBar />
      <div className='flex w-full justify-center'>
        <div className='w-home m-auto flex flex-col'>
          {pagetitle ? (
            <div className='font-ptmono py-20 text-4xl font-bold text-lilac-800'>
              {pagetitle}
            </div>
          ) : null}
          <main className='p-4'>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
