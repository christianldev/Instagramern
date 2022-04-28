import React from 'react';

export default function Suggested() {
  return (
    <div className="justify-end items-start">
      <div className="flex justify-center align-center items-center w-full">
        <div className="flex items-center">
          <div className="m-2">
            <p className="dark:text-white text-lg ">Sugerencias</p>
          </div>
        </div>
      </div>
      <div className="flex"></div>

      <div className="flex items-center justify-between w-full lg:w-5/6">
        <div className=" flex items-center">
          <div className="w-8 h-8 m-3 bg-pink-700 rounded-full">
            <img
              src="https://source.unsplash.com/user/goodfacesclub/123x123"
              alt=""
              className="rounded-full w-8 h-8"
            />
          </div>
          <div className="">
            <p className="text-xs dark:text-gray-200 font-bold">Carlos</p>
            <p className="text-xs text-gray-500">New To Instagram</p>
          </div>
        </div>
        <button
          type="button"
          className="flex items-center text-white bg-darktheme-button hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-8 py-2 text-center mr-3 md:mr-0  dark:hover:bg-blue-600 dark:focus:ring-blue-700 rounded-full"
        >
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between w-full lg:w-5/6">
        <div className=" flex items-center">
          <div className="w-8 h-8 m-3 bg-pink-700 rounded-full">
            <img
              src="https://source.unsplash.com/user/goodfacesclub/124x124"
              alt=""
              className="rounded-full w-8 h-8"
            />
          </div>
          <div className="">
            <p className="text-xs dark:text-gray-200 font-bold">Lonnie</p>
            <p className="text-xs text-gray-500">Follows You</p>
          </div>
        </div>
        <button
          type="button"
          className="flex items-center text-white bg-darktheme-button hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-8 py-2 text-center mr-3 md:mr-0  dark:hover:bg-blue-600 dark:focus:ring-blue-700 rounded-full"
        >
          Follow
        </button>
      </div>
      <footer className="sm:m-5">
        <div className="mt-5">
          <ul className="flex text-xs text-gray-400 flex-wrap sm:m-2">
            <li className="m-1">About</li>
            <li className="m-1">Help</li>
            <li className="m-1">Press</li>
            <li className="m-1">API</li>
            <li className="m-1">Privacy</li>
            <li className="m-1">Jobs</li>
            <li className="m-1">Terms</li>
            <li className="m-1">Locations</li>
            <li className="m-1">Top Accounts</li>
            <li className="m-1">Hashtags</li>
            <li className="m-1">Language</li>
          </ul>
        </div>
        <p className="mt-5 text-gray-400 text-xs sm:m-2">
          © 2021 Instagram from Facebook
        </p>
      </footer>
    </div>
  );
}
