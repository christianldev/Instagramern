import React from 'react';
import { Link } from 'react-router-dom';

export default function EditProfileSidebar({ handlerChangeProfile }) {
  return (
    <aside className="relative bg-no-repeat bg-fixed bg-center bg-cover dark:bg-darktheme-navbar w-1/4 border-r border-indigo-900/20 hidden md:block">
      <div className="flex-1 px-3 bg-white dark:bg-darktheme-navbar divide-y space-y-1">
        <ul className="space-y-2 pb-2">
          <li>
            <form action="#" method="GET" className="lg:hidden">
              <label htmlFor="mobile-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="mobile-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600  block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
              </div>
            </form>
          </li>
          <li>
            <Link
              to="/account/edit"
              onClick={() => handlerChangeProfile('editProfile')}
              className="text-base text-gray-500 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
            >
              <svg
                className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3 text-sm">Editar Perfil</span>
            </Link>
          </li>
          <li>
            <Link
              to="/account/password"
              onClick={() => handlerChangeProfile('changePassword')}
              className="text-base text-gray-500 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
            >
              <svg
                className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="ml-3 flex-1 text-sm whitespace-nowrap">
                Cambiar Contraseña
              </span>
              <span className="bg-gray-200 text-gray-800 ml-3 text-sm hidden font-medium lg:inline-flex items-center justify-center px-2 rounded-full">
                Pro
              </span>
            </Link>
          </li>
          <li>
            <a
              href="https://demo.themesberg.com/windster-pro/mailing/inbox/"
              target="_blank"
              className="text-base text-gray-500 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
            >
              <svg
                className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
              <span className="ml-3 flex-1 text-sm whitespace-nowrap">
                Inbox
              </span>
              <span className="bg-gray-200 text-gray-800 ml-3 text-sm hidden font-medium lg:inline-flex items-center justify-center px-2 rounded-full">
                Pro
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://demo.themesberg.com/windster/users/list/"
              className="text-base text-gray-500 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
            >
              <svg
                className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-3 flex-1 text-sm whitespace-nowrap">
                Users
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
