import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

import {
  FaRegLaughBeam,
  FaShareAlt,
  FaRegComment,
  FaHeart,
  FaRegBookmark,
  FaEllipsisH,
} from 'react-icons/fa';
import './Home.css';

import Navbar from '../../components/Navbar';

export default function Home() {
  const { auth } = useAuth();

  const [like, setlike] = useState(100);
  const [dislike, setdislike] = useState(4);

  const [likeactive, setlikeactive] = useState(false);
  const [dislikeactive, setdislikeactive] = useState(false);

  function likef() {
    if (likeactive) {
      setlikeactive(false);
      setlike(like - 1);
    } else {
      setlikeactive(true);
      setlike(like + 1);
      if (dislikeactive) {
        setdislikeactive(false);
        setlike(like + 1);
        setdislike(dislike - 1);
      }
    }
  }

  function dislikef() {
    if (dislikeactive) {
      setdislikeactive(false);
      setdislike(dislike - 1);
    } else {
      setdislikeactive(true);
      setdislike(dislike + 1);
      if (likeactive) {
        setlikeactive(false);
        setdislike(dislike + 1);
        setlike(like - 1);
      }
    }
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto bg-darktheme-body lg:m-auto flex flex-1 flex-col items-center w-full">
        <section
          id="stories"
          className="flex items-end justify-end mt-10  phone__stories"
        >
          <div id="profile" className="flex flex-col m-4 relative">
            <div className="block bg-gray-500 rounded-full p-1">
              <div className="h-16 w-16 bg-green-400 rounded-full"></div>
            </div>
            <p className="text-center text-sm font-thin">You</p>
            <div
              id="plus"
              className="absolute m-auto text-white font-mono top-12 right-0 bg-blue-600 h-5 w-5 rounded-full flex items-center justify-center transition transform hover:bg-blue-500 cursor-pointer"
            >
              <p>+</p>
            </div>
          </div>

          <div id="profile" className="flex flex-col  cursor-pointer">
            <div className="circle">
              <img
                src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
                alt=""
              />
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ enableBackground: 'new -580 439 577.9 194' }}
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>
            <p className="text-center text-sm font-thin">Mason</p>
          </div>
          <div id="profile" className="flex flex-col  cursor-pointer">
            <div className="circle">
              <img
                src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
                alt=""
              />
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ enableBackground: 'new -580 439 577.9 194' }}
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>
            <p className="text-center text-sm font-thin">Selene</p>
          </div>
          <div id="profile" className="flex flex-col  cursor-pointer">
            <div className="circle">
              <img
                src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
                alt=""
              />
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ enableBackground: 'new -580 439 577.9 194' }}
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>
            <p className="text-center text-sm font-thin">Jimmy</p>
          </div>

          <div id="profile" className="flex flex-col  cursor-pointer">
            <div className="circle">
              <img
                src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
                alt=""
              />
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ enableBackground: 'new -580 439 577.9 194' }}
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>
            <p className="text-center text-sm font-thin">Abílio</p>
          </div>

          <div id="profile" className="flex flex-col cursor-pointer">
            <div className="circle">
              <img
                src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
                alt=""
              />
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ enableBackground: 'new -580 439 577.9 194' }}
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>
            <p className="text-center text-sm font-thin">Ethel</p>
          </div>
          <div id="profile" className="flex flex-col  cursor-pointer">
            <div className="circle">
              <img
                src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
                alt=""
              />
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ enableBackground: 'new -580 439 577.9 194' }}
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>
            <p className="text-center text-sm font-thin">Shady</p>
          </div>
        </section>

        <div id="wrapper" className="lg:flex px-2">
          <section className="px-5 self-start xl:w-4/6 ">
            <div className="lg:m-4 mb-10 lg:mb-20">
              <div className="flex items-center mb-2 justify-between">
                <div className="flex items-center">
                  <img
                    src="https://source.unsplash.com/user/goodfacesclub/107x107"
                    alt=""
                    className="h-14 w-14 rounded-full  p-[1.5px] border-blue-600 bg-gradient-to-t bg-purple-500 border-2 cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
                  />
                  <div className="ml-2 text-gray-600 dark:text-gray-200 leading-loose">
                    Abílio Barros
                    <span className="text-xs flex justify-start font-extralight   dark:text-gray-400">
                      23 Hours Ago
                    </span>
                  </div>
                </div>
              </div>
              <img
                src="https://source.unsplash.com/random/607x607"
                className="w-full post__img object-cover"
                alt=""
              />
              <div className="flex justify-between mx-1 mt-2">
                <div className="flex">
                  {/* <button
                    onClick={likef}
                    className={[
                      likeactive ? 'active-like' : null,
                      'button',
                    ].join(' ')}
                  >
                    <FaHeart
                      className={
                        'm-1 cursor-pointer transform hover:scale-105 dark:text-white'
                      }
                    />
                  </button> */}

                  <div className="button">
                    <input
                      onClick={likef}
                      className="input__like"
                      defaultChecked={likeactive ? 'checked' : ''}
                      type="checkbox"
                      id="liked"
                    />
                    <label className="label__like" htmlFor="liked">
                      <FaHeart
                        name="heart"
                        className={'m-1 cursor-pointer dark:text-white'}
                      />
                    </label>
                  </div>

                  <p className="mt-0.5 ml-1 mr-2 font-light text-sm dark:text-white">
                    700k
                  </p>
                  <FaRegComment className="m-1 cursor-pointer transform hover:scale-105 dark:text-white" />

                  <p className="mt-0.5 ml-1 mr-2 font-light text-sm dark:text-white">
                    485
                  </p>
                  <FaShareAlt className="m-1 cursor-pointer transform hover:scale-105 dark:text-white" />
                </div>
                <FaRegBookmark className="m-1 mr-2 cursor-pointer transform hover:scale-105 dark:text-white" />
              </div>

              <p className="text-sm ml-2 mt-2 font-extralight dark:text-white">
                <span className=" text-sm mt-4 dark:text-white">
                  Abílio Barros:
                </span>{' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                quis.
              </p>

              <form className="mt-3 ">
                <div className="flex justify-between border-t border-gray-600 items-center w-full">
                  <div className="w-full ">
                    <input
                      type="text"
                      name="comment"
                      id="comment"
                      placeholder="Add A Comment..."
                      className="w-full text-sm py-4 px-3 rounded-none dark:bg-darktheme-body dark:text-white focus:outline-none"
                    />
                  </div>
                  <div className="w-30">
                    <button className="border-none flex text-lg px-2  py-2 dark:text-gray-200 focus:outline-none">
                      <FaRegLaughBeam />
                      <div className="pl-3">
                        <FaEllipsisH className="transform hover:scale-105 cursor-pointer " />
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <div className="justify-end items-start">
            <div className="flex justify-center align-center items-center w-full">
              <div className="flex items-center">
                <div className="m-2">
                  <p className="dark:text-white text-lg ">Sugerencias</p>
                </div>
              </div>
            </div>
            <div className="flex"></div>

            <div className="flex items-center justify-between w-full">
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
            <div className="flex items-center justify-between w-full">
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
        </div>
      </main>
    </>
  );
}
