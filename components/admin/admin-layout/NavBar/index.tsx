'use client'

import React,{ useState } from 'react';
import styles from './NavBar.module.css';
import Menu from './Menu';
import Share from '../Share';


const NavBar = () => {
  const [isCloseNav, setIsCloseNav] = useState(false);
  return (
    <>
    <nav className={styles.nav_border+" bg-white"}>
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={()=>setIsCloseNav(!isCloseNav)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="/images/logo.png"
                alt="Your Company"
              />
            </div>
          </div>
          <div className="max-sm:hidden sm:max-md:hidden absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex space-x-4 text-gray-700">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Menu type='main'/>

            </div>
            {/* Profile dropdown */}
            <div className="relative ml-3">
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={ styles.pos_absolute+" bg-white md:hidden w-full"} id="mobile-menu">
        <div className="bg-white border pb-3 pt-2 px-2 shadow space-y-1 menu-style">
        {isCloseNav && <Menu type='hamburger'/>}
          
        </div>
      </div>
    </nav>
    <Share/>
  </>
  );
};

export default NavBar;
