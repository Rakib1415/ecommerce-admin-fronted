/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div>
                <a
                  href="#"
                  className="text-xl font-bold text-white hover:text-gray-300"
                >
                  URBANSTYLE
                </a>
              </div>

              <p className="max-w-sm mt-2 text-gray-400">
                Urbanstyle is a progressive fashion wear online shop based in
                Bangladesh.
              </p>

              <div className="flex mt-6 -mx-2">
                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="uppercase text-white">About</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  Careers
                </a>
              </div>

              <div>
                <h3 className="uppercase text-white">CATALOG</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  Men
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  Women
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  Kids
                </a>
              </div>

              <div>
                <h3 className="uppercase text-white">PRODUCTS</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  New in
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  Mens tee
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-400 hover:underline"
                >
                  Womens tee
                </a>
              </div>

              <div>
                <h3 className="uppercase text-white">Contact</h3>
                <span className="block mt-2 text-sm text-gray-400 hover:underline">
                  +880 173 888 0000
                </span>
                <span className="block mt-2 text-sm text-gray-400 hover:underline">
                  info@urbanstyle.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">
            © URBANSTYLE 2022 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
