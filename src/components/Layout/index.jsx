import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';

function Layout({children}) {
  return (
    <div className='flex flex-col'>
      {children}
    </div>
  );
}

export default Layout;
