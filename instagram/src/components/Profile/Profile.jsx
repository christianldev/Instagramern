import React from 'react';

import './Profile.css';

export default function Profile({ getUser, auth }) {
  return (
    <aside className="relative bg-no-repeat bg-fixed bg-center bg-cover dark:bg-darktheme-body w-1/3 py-10 pl-4  min-w-min   border-r border-indigo-900/20 hidden md:block ">
      <div className="shadow rounded-lg p-2">
        <div className="flex flex-col gap-1 text-center items-center">
          <span className=" rounded-full bg-gradient-to-r from-purple-800  to-blue-800">
            <img
              className="h-32 w-32 p-2 rounded-full shadow"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"
              alt=""
            />
          </span>
          <p className="text-gray-200 font-semibold">
            {getUser.name ? getUser.name : auth.name}
          </p>
        </div>
        <div className="flex flex-nowrap __profile justify-center items-center gap-2 my-3">
          <div className="font-semibold text-center mx-4">
            <p className="text-gray-200">102</p>
            <span className="text-gray-400">Posts</span>
          </div>
          <div className="font-semibold text-center mx-4">
            <p className="text-gray-200">102</p>
            <span className="text-gray-400">Followers</span>
          </div>
          <div className="font-semibold text-center mx-4">
            <p className="text-gray-200">102</p>
            <span className="text-gray-400">Folowing</span>
          </div>
        </div>
        <div className="font-semibold text-center mx-4">
          <button className="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">
            Follow
          </button>
        </div>
      </div>

      <article className="flex flex-col p-4 text-gray-500 justify-center items-center rounded-lg shadow-lg ">
        {getUser.description && (
          <>
            <h4 className="font-bold">Biografia</h4>
            <p className=" text-center text-sm">{getUser.description}</p>
          </>
        )}
      </article>

      <div className=" flex flex-col   text-sm leading-normal text-gray-400  justify-center items-center">
        {getUser.siteWeb && (
          <>
            <h4 className="font-bold">Informacion</h4>
            <a href={getUser.siteWeb} target="_blank">
              {getUser.siteWeb}
            </a>
          </>
        )}
      </div>

      <div className="mt-0 flex flex-col space-y-7 text-gray-500 font-medium">
        <div className=" flex items-center p-4 lg:p-6" href="#">
          <div className=" shadow  rounded-lg p-2">
            <h3 className="text-gray-600 text-sm font-semibold mb-4">
              Following
            </h3>
            <ul className="flex items-center justify-center space-x-2">
              <li className="flex flex-col items-center space-y-2">
                <a className="block bg-white p-1 rounded-full" href="#">
                  <img
                    className="w-20 lg:w-16 md:w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
                  />
                </a>

                <span className="text-xs text-gray-500">Sage</span>
              </li>

              <li className="flex flex-col items-center space-y-2">
                <a className="block bg-white p-1 rounded-full" href="#">
                  <img
                    className="w-20 lg:w-16 md:w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
                  />
                </a>

                <span className="text-xs text-gray-500">Jett</span>
              </li>

              <li className="flex flex-col items-center space-y-2">
                <a className="block bg-white p-1 rounded-full" href="#">
                  <img
                    className="w-20 lg:w-16 md:w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
                  />
                </a>

                <span className="text-xs text-gray-500">Sky</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
