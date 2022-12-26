import React from 'react';
import Navbar from './Navbar';
import TopNavbar from './TopNavbar';

function Header() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="h-8 bg-slate-300">
        <h5 className="font-poppins text-sm font-light text-center py-1">
          Explore our shop. It's totally free!!!
        </h5>
      </div>
    </>
  );
}

export default Header;
