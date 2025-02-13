import React from 'react';
import HeaderBar from './HeaderBar';
import '../styles/global.css';

export default function Layout({ children, pagetitle }) {
  return (
    <div className='min-h-screen overscroll-contain'>
      <HeaderBar />
      <div className='flex w-full justify-center'>
        <div className='min-w-home flex flex-col'>
          {pagetitle ? (
            <div className='font-ptmono py-20 text-4xl font-bold text-lilac-800'>
              {pagetitle}
            </div>
          ) : null}
          <main className='max-w-[750px]'>{children}</main>
        </div>
      </div>
    </div>
  );
}
