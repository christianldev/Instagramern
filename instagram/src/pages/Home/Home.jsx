import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

import InstagramStories from '../../components/InstagramStories';
import Suggested from '../../components/Suggested';

import {
  FaRegLaughBeam,
  FaShareAlt,
  FaRegComment,
  FaHeart,
  FaRegBookmark,
  FaEllipsisH,
} from 'react-icons/fa';
import './Home.css';

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
    <main className="mx-auto bg-darktheme-body lg:m-auto flex flex-1 flex-col items-center w-full">
      <InstagramStories />

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
        <Suggested />
      </div>
    </main>
  );
}
