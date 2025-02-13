import React from 'react';

function Layout({children}) {
  return (
    <div className='flex flex-col text-white'>
      {children}
    </div>
  );
}

export default Layout;
