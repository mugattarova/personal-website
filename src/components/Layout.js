import React from 'react';
import HeaderBar from './HeaderBar';
import '../styles/global.css';
import Footer from './Footer';

export default function Layout({ children, pagetitle }) {
  return (
    <div className=''>
      <HeaderBar />
      <div className='flex justify-center'>
        <div className='mx-4 flex w-5/6 max-w-3xl flex-1 flex-col px-5 md:m-auto md:px-4 lg:w-8/12'>
          {pagetitle ? (
            <div className='font-ptmono py-20 text-4xl font-bold text-lilac-800'>
              {pagetitle}
            </div>
          ) : null}
          <main className=''>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
