import React from 'react';

function TopNavbar() {
  return (
    <div className="h-8 bg-slate-300">
      <div className="container min-h-screen">
        <div className="flex px-2 -mx-4 md:mx-10 md:py-0 justify-end font-poppins">
          <a
            href="#"
            className="p-2 text-black text-xs font-light hidden md:block"
          >
            Contact & FAQ
          </a>
          <a
            href="#"
            className="p-2 text-black text-xs font-light hidden md:block"
          >
            Return Policy
          </a>
          <a href="#" className="p-2 text-black text-xs font-medium">
            Helpline: 01738880000
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
