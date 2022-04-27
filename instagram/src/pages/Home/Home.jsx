import React from 'react';
import useAuth from '../../hooks/useAuth';

import { FaRegLaughBeam } from 'react-icons/fa';
import './Home.css';

import Navbar from '../../components/Navbar';

export default function Home() {
  const { auth } = useAuth();

  return (
    <>
      <Navbar />
      <main className="mx-auto bg-darktheme-body lg:m-auto flex flex-1 flex-col items-center w-full">
        <section
          id="stories"
          className="flex items-end justify-end mt-10 lg:w-1/12 md:w-2/3 phone__stories"
        >
          <div id="profile" className="flex flex-col m-4 relative">
            <div className="block bg-white rounded-full p-1">
              <div className="h-14 w-14 bg-green-400 rounded-full"></div>
            </div>
            <p className="text-center text-sm font-thin">You</p>
            <div
              id="plus"
              className="absolute m-auto text-white font-mono top-10 right-0 bg-blue-600 h-5 w-5 rounded-full flex items-center justify-center transition transform hover:scale-110 cursor-pointer"
            >
              <p>+</p>
            </div>
          </div>

          <div id="profile" className="flex flex-col m-4 cursor-pointer">
            <div className="transform transition hover:scale-90">
              <div className="bg-gradient-to-tr from-yellow-400 to-pink-600 rounded-full p-0.5">
                <div className="block bg-white rounded-full p-0.5">
                  <div className="h-14 w-14 rounded-full">
                    <img
                      src="https://source.unsplash.com/user/goodfacesclub/102x102"
                      alt=""
                      className="h-14 w-14 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm font-thin">Mason</p>
          </div>
          <div id="profile" className="flex flex-col m-4 cursor-pointer">
            <div className="transform transition hover:scale-90">
              <div className="bg-gradient-to-tr from-yellow-400 to-pink-600 rounded-full p-0.5">
                <div className="block bg-white rounded-full p-0.5">
                  <div className="h-14 w-14 rounded-full">
                    <img
                      src="https://source.unsplash.com/user/goodfacesclub/103x103"
                      alt=""
                      className="h-14 w-14 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm font-thin">Selene</p>
          </div>
          <div id="profile" className="flex flex-col m-4 cursor-pointer">
            <div className="transform transition hover:scale-90">
              <div className="bg-gradient-to-tr from-yellow-400 to-pink-600 rounded-full p-0.5">
                <div className="block bg-white rounded-full p-0.5">
                  <div className="h-14 w-14 rounded-full">
                    <img
                      src="https://source.unsplash.com/user/goodfacesclub/104x104"
                      alt=""
                      className="h-14 w-14 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm font-thin">Jimmy</p>
          </div>

          <div id="profile" className="flex flex-col m-4 cursor-pointer">
            <div className="transform transition hover:scale-90">
              <div className="bg-gradient-to-tr from-yellow-400 to-pink-600 rounded-full p-0.5">
                <div className="block bg-white rounded-full p-0.5">
                  <div className="h-14 w-14 rounded-full">
                    <img
                      src="https://source.unsplash.com/user/goodfacesclub/107x107"
                      alt=""
                      className="h-14 w-14 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm font-thin">Abílio</p>
          </div>

          <div id="profile" className="flex flex-col m-4 cursor-pointer">
            <div className="transform transition hover:scale-90">
              <div className="bg-gradient-to-tr from-yellow-400 to-pink-600 rounded-full p-0.5">
                <div className="block bg-white rounded-full p-0.5">
                  <div className="h-14 w-14 rounded-full">
                    <img
                      src="https://source.unsplash.com/user/goodfacesclub/109x109"
                      alt=""
                      className="h-14 w-14 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm font-thin">Ethel</p>
          </div>
          <div id="profile" className="flex flex-col m-4 cursor-pointer">
            <div className="transform transition hover:scale-90">
              <div className="bg-gradient-to-tr from-yellow-400 to-pink-600 rounded-full p-0.5">
                <div className="block bg-white rounded-full p-0.5">
                  <div className="h-14 w-14 rounded-full">
                    <img
                      src="https://source.unsplash.com/user/goodfacesclub/110x110"
                      alt=""
                      className="h-14 w-14 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm font-thin">Shady</p>
          </div>
        </section>
        <div id="wrapper" className="lg:flex px-2">
          <section className="mt-5 px-5 self-start xl:w-4/6 ">
            <div className="lg:m-4 mb-10 lg:mb-20">
              <div className="flex items-center mb-2 justify-between">
                <div className="flex items-center">
                  <img
                    src="https://source.unsplash.com/user/goodfacesclub/107x107"
                    alt=""
                    className="h-6 w-6 rounded-full"
                  />
                  <div className="ml-2 text-gray-600 dark:text-gray-200 leading-loose">
                    Abílio Barros
                  </div>
                </div>
                <div className="mr-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="transform hover:scale-105 cursor-pointer dark:text-white"
                    height="1.5rem"
                    width="1.5rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </div>
              </div>
              <img
                src="https://source.unsplash.com/random/607x607"
                className="w-full post__img object-cover"
                alt=""
              />
              <div className="flex justify-between mx-1 mt-2">
                <div className="flex">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="m-1 cursor-pointer transform hover:scale-105 dark:text-white"
                    height="1.5rem"
                    width="1.5rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="m-1 cursor-pointer transform hover:scale-105 dark:text-white"
                    height="1.5rem"
                    width="1.5rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="m-1 cursor-pointer transform hover:scale-105 dark:text-white"
                    height="1.5rem"
                    width="1.5rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="m-1 mr-2 cursor-pointer transform hover:scale-105 dark:text-white"
                  height="1.5rem"
                  width="1.5rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <p className="ml-2 mt-2 font-semibold text-sm dark:text-white">
                700 Likes
              </p>
              <p className="text-sm ml-2 mt-2 dark:text-white">
                <span className="font-bold text-sm mt-4 dark:text-white">
                  Abílio Barros
                </span>{' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                quis.
              </p>
              <p className="text-xs font-extralight uppercase ml-2 mt-3 dark:text-white">
                23 Hours Ago
              </p>
              <form className="mt-3 ">
                <div class="flex justify-between border-t items-center w-full">
                  <div class="w-full ">
                    <input
                      type="text"
                      name="comment"
                      id="comment"
                      placeholder="Add A Comment..."
                      class="w-full text-sm py-4 px-3 rounded-none dark:bg-darktheme-body dark:text-white focus:outline-none"
                    />
                  </div>
                  <div class="w-30">
                    <button class="border-none text-lg px-2  py-2 text-gray-600 focus:outline-none">
                      <FaRegLaughBeam />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <div className=" w-3/12 mt-5 justify-end items-start ml-20">
            <div className="flex justify-center align-center items-center w-full">
              <div className="flex items-center">
                <div className="m-2">
                  <p className="dark:text-white text-lg ">Sugerencias</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <p className="text-gray-500 mt-5 font-semibold flex-grow">
                Suggestions For You
              </p>
              <p className="mt-5 text-sm dark:text-white">See All</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className=" flex items-center">
                <div className="w-8 h-8 m-3 bg-pink-700 rounded-full">
                  <img
                    src="https://source.unsplash.com/user/goodfacesclub/120x120"
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="">
                  <p className="text-xs font-bold">Nora</p>
                  <p className="text-xs text-gray-500">New To Instagram</p>
                </div>
              </div>
              <p className=" text-blue-600 text-xs mt-2 cursor-pointer">
                Follow
              </p>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className=" flex items-center">
                <div className="w-8 h-8 m-3 bg-pink-700 rounded-full">
                  <img
                    src="https://source.unsplash.com/user/goodfacesclub/121x121"
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="">
                  <p className="text-xs font-bold">Eldirene</p>
                  <p className="text-xs text-gray-500">Follows You</p>
                </div>
              </div>
              <p className=" text-blue-600 text-xs mt-2 cursor-pointer">
                Follow
              </p>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className=" flex items-center">
                <div className="w-8 h-8 m-3 bg-pink-700 rounded-full">
                  <img
                    src="https://source.unsplash.com/user/goodfacesclub/122x122"
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="">
                  <p className="text-xs font-bold">Levina</p>
                  <p className="text-xs text-gray-500">Follows You</p>
                </div>
              </div>
              <p className=" text-blue-600 text-xs mt-2 cursor-pointer">
                Follow
              </p>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className=" flex items-center">
                <div className="w-8 h-8 m-3 bg-pink-700 rounded-full">
                  <img
                    src="https://source.unsplash.com/user/goodfacesclub/123x123"
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="">
                  <p className="text-xs font-bold">Carlos</p>
                  <p className="text-xs text-gray-500">New To Instagram</p>
                </div>
              </div>
              <p className=" text-blue-600 text-xs mt-2 cursor-pointer">
                Follow
              </p>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className=" flex items-center">
                <div className="w-8 h-8 m-3 bg-pink-700 rounded-full">
                  <img
                    src="https://source.unsplash.com/user/goodfacesclub/124x124"
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="">
                  <p className="text-xs font-bold">Lonnie</p>
                  <p className="text-xs text-gray-500">Follows You</p>
                </div>
              </div>
              <p className=" text-blue-600 text-xs mt-2 cursor-pointer">
                Follow
              </p>
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
        </div>
      </main>
    </>
  );
}
