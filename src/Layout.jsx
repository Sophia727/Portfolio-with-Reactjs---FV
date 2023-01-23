import React from 'react';
import { Outlet } from 'react-router-dom';
import App from './App';

function Layout() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Outlet/> */}
      <App/>
    </div>
  )
}

export default Layout