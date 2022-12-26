import React, { useState } from 'react';

function Navbar() {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const showNavbar = () => {
    setToggleHamburger(!toggleHamburger);
  };
  const showToggleHamburger = toggleHamburger ? 'block' : 'hidden';
  return (
    <nav className="relative bg-black">
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-white transition-colors duration-300 transform lg:text-3xl"
              href="/"
            >
              URBANSTYLE
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={showNavbar}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              {toggleHamburger ? (
                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`${showToggleHamburger} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between`}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
            <a
              href="/src/home.html"
              className="py-2 border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
            >
              SHOP
            </a>
            <a
              href="/src/catalog.html"
              className="py-2 border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
            >
              SIGNUP
            </a>
            <a
              href="/src/catalog.html"
              className="py-2 border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
            >
              SIGNIN
            </a>
            <a
              href="/src/home.html"
              className="py-2 border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
            >
              ADMIN DASHBOARD
            </a>
          </div>

          <div className="relative mt-4 md:mt-0 flex">
            <div className="relative px-5 py-1 cursor-pointer">
              <span className="text-white absolute top-2.5 right-8">0</span>
              <svg
                style={{ color: 'white' }}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
