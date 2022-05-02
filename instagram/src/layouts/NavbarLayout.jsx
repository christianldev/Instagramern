import React from 'react';
import { FaRegHeart, FaRegBell, FaSearch, FaRegCompass } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

import { InstagramLogo } from '../components/InstagramLogo/InstagramLogo';
import useAuth from '../hooks/useAuth';

export default function NavbarLayout() {
  const { auth } = useAuth();

  return (
    <header>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-darktheme-navbar">
        <div className="fixed z-20 container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <InstagramLogo />
            <span className="logo__font self-center text-2xl ml-3 font-light whitespace-nowrap text-white dark:text-white">
              Instagram
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <div className="flex items-center relative">
              <div className="dropdown relative">
                <Link
                  className="dropdown-toggle flex items-center hidden-arrow mr-4"
                  to={
                    auth.username === undefined
                      ? `/${auth.name}`
                      : `/${auth.username}`
                  }
                  id="dropdownMenuButton2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                    className="w-8 h-8 rounded-full"
                    alt=""
                    loading="lazy"
                  />
                </Link>
              </div>

              <div className="dropdown relative">
                <button
                  type="button"
                  className="flex items-center text-white bg-darktheme-button hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-8 py-2 text-center mr-3 md:mr-0  dark:hover:bg-blue-600 dark:focus:ring-blue-700 rounded-full"
                >
                  New post
                </button>
              </div>
            </div>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-center align-center items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block text-lg py-2 pr-2 pl-2 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0"
                  aria-current="page"
                >
                  <FaSearch />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-lg py-2 pr-2 pl-2 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0"
                >
                  <FaRegCompass />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-lg py-2 pr-2 pl-2 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0"
                >
                  <FaRegBell />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-lg py-2 pr-2 pl-2 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0"
                >
                  <FaRegHeart />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
    </header>
  );
}
