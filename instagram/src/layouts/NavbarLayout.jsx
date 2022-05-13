import React, { useState } from 'react';
import { FaRegHeart, FaRegBell, FaSearch, FaRegCompass } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { InstagramLogo } from '../components/InstagramLogo/InstagramLogo';
import useAuth from '../hooks/useAuth';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET__USER } from '../gql/user';

import avatarNotFound from '../assets/avatarnotfound.jpg';
import Toggle from '../components/Toggle/Toggle';
import Search from '../components/Search';

export default function NavbarLayout() {
  const [dropDown, setDropDown] = React.useState(false);
  const [inputSearch, setInputSearch] = useState(false);
  const { auth, logout } = useAuth();

  const navigate = useNavigate();
  const client = useApolloClient();
  const { data, loading, error } = useQuery(GET__USER, {
    variables: { username: auth.username },
  });

  if (loading || error) return null;

  const { getUser } = data;

  const onDropDown = () => {
    setDropDown(!dropDown);
  };

  const onLogout = () => {
    client.clearStore();
    logout();
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputSearch) {
      setInputSearch(false);
    } else {
      setInputSearch(true);
    }
  };

  return (
    <>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-darktheme-navbar">
        <div className="max-w-7xl  mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <InstagramLogo />
              <span className="logo__font self-center text-3xl ml-3 font-light whitespace-nowrap text-gray-700 dark:text-white">
                Instagram
              </span>
            </Link>
            <div className="flex items-center md:order-2">
              <div className="flex items-center relative">
                <div className="hidden lg:flex sm:flex relative">
                  <button
                    onClick={onDropDown}
                    className="dropdown-toggle flex items-center hidden-arrow mr-4"
                  >
                    <img
                      src={getUser.avatar ? getUser.avatar : avatarNotFound}
                      className="w-8 h-8 rounded-full"
                      alt=""
                      loading="lazy"
                    />
                  </button>
                </div>

                {/* <!-- Dropdown menu --> */}
                {dropDown && (
                  <div className="bg-white dark:bg-darktheme-navbar rounded shadow-md mt-24 lg:mt-12 md:mt-12 sm:mt-12 fixed lg:absolute md:absolute sm:absolute top-0 right-14 lg:right-0 md:right-0 sm:right-0 w-3/4  lg:min-w-full md:min-w-full sm:min-w-full  overflow-auto z-30">
                    <ul>
                      <li>
                        <Link
                          onClick={() => setDropDown(false)}
                          to={
                            auth.username === undefined
                              ? `/${auth.name}`
                              : `/${auth.username}`
                          }
                          className="px-4 py-2 block text-gray-400 hover:bg-gray-700 no-underline hover:no-underline"
                        >
                          Mi perfil
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setDropDown(false)}
                          to="/account/edit"
                          className="px-4 py-2 block text-gray-400 hover:bg-gray-700 no-underline hover:no-underline"
                        >
                          Configuracion
                        </Link>
                      </li>
                      <li>
                        <hr className="border-t mx-2 border-gray-400" />
                      </li>
                      <li>
                        <a
                          onClick={onLogout}
                          className="px-4 py-2 block text-gray-400 hover:bg-gray-700 no-underline cursor-pointer hover:no-underline"
                        >
                          Cerrar sesion
                        </a>
                      </li>
                      <Toggle />
                    </ul>
                  </div>
                )}

                {/* <!-- dropdown --> */}

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
                onClick={onDropDown}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
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
                <Search handleSearch={handleSearch} inputSearch={inputSearch} />
                {!inputSearch ? (
                  <>
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
                  </>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section onClick={() => setDropDown(false) || setInputSearch(false)}>
        <Outlet />
      </section>
    </>
  );
}
