import React from 'react';
import HeaderBar from './HeaderBar';
import '../styles/global.css';

const Layout = ({ children, pagetitle }) => {
  return (
    <div className='overscroll-contain min-h-screen'>
      <HeaderBar/>
      <div className='flex w-full justify-center'>
        <div className='flex flex-col min-w-home'>
          {pagetitle ? 
            <div className='font-ptmono font-bold text-lilac-800 py-20 text-4xl'>
              { pagetitle }
            </div>
          : null }
          <main className='max-w-[750px]'>
            { children }
          </main> 
        </div>
      </div>
    </div>
  )
}

export default Layout;