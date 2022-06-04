import React, { useState } from 'react';

import useAuth from '../../hooks/useAuth';
import InstagramStories from '../../components/InstagramStories';
import Suggested from '../../components/Suggested';
import { useQuery } from '@apollo/client';
import { GET__USER } from '../../gql/user';

import {
  FaRegLaughBeam,
  FaShareAlt,
  FaRegComment,
  FaRegBookmark,
  FaEllipsisH,
} from 'react-icons/fa';
import './Home.css';
import LikeButton from '../../components/LikeButton';

export default function Home() {
  const { auth } = useAuth();

  const { data, loading } = useQuery(GET__USER, {
    variables: { username: auth.username },
  });

  const { getUser } = data;

  return (
    <main className="mx-auto bg-white dark:bg-darktheme-body lg:m-auto flex flex-1 flex-col items-center w-full ">
      <InstagramStories getUser={getUser} />

      <div id="wrapper" className="lg:flex px-2">
        <section className="px-5 self-start xl:w-4/6 ">
          <div className="flex max-w-xl my-10 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
            <div className="flex items-center w-full">
              <div className="w-full">
                <div className="flex flex-row mt-2 px-2 py-3 mx-3">
                  <div className="w-auto h-auto rounded-full border-2 border-pink-500">
                    <img
                      className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                      alt="User avatar"
                      src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                    />
                  </div>
                  <div className="flex flex-col mb-2 ml-4 mt-1">
                    <div className="text-gray-600 text-sm font-semibold">
                      Sara Lauren
                    </div>
                    <div className="flex w-full mt-1">
                      <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                        UX Design
                      </div>
                      <div className="text-gray-400 font-thin text-xs">
                        • 30 seconds ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-100"></div>
                <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                  <img
                    className="rounded"
                    src="https://picsum.photos/536/354"
                  />
                </div>
                <div className="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2">
                  Dummy text of the printing and typesetting industry
                </div>
                <div className="text-gray-500 font-thin text-sm mb-6 mx-3 px-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500
                </div>
                <div className="flex justify-start mb-4 border-t border-gray-100">
                  <div className="flex w-full mt-1 pt-2 pl-5">
                    <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                      <FaRegBookmark />
                    </span>
                    <img
                      className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                    <span className="flex justify-center items-center transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                      <FaShareAlt />
                    </span>
                    <span className=" flex justify-center items-center transition ease-out duration-300 hover:bg-blue-500 bg-blue-600 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                      <FaRegComment />
                    </span>
                  </div>
                </div>
                <div className="flex w-full border-t border-gray-100">
                  <div className="mt-3 mx-5 flex flex-row">
                    <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                      Comments:
                      <div className="ml-1 text-gray-400 font-thin text-ms">
                        {' '}
                        30
                      </div>
                    </div>
                    <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                      Views:{' '}
                      <div className="ml-1 text-gray-400 font-thin text-ms">
                        {' '}
                        60k
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 mx-5 w-full flex justify-end">
                    <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-2 items-center">
                      <LikeButton />
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                  <img
                    className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
                    alt="User avatar"
                    src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
                    >
                      <svg
                        className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    className="w-full py-3 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                    style={{ borderRadius: '25px' }}
                    placeholder="Post a comment..."
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Suggested getUser={getUser} auth={auth} />
      </div>
    </main>
  );
}
