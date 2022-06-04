import React from 'react';
import LikeButton from '../../../components/LikeButton';
import { FaRegComment, FaShareAlt, FaRegBookmark } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET__USER } from '../../../gql/user';
import useAuth from '../../../hooks/useAuth';

import avatarNotFound from '../../../assets/avatarnotfound.jpg';
import './ModalPost.css';

export default function ModalPost({ publication }) {
  // convert string to int
  const date = parseInt(publication.createAt);
  const dateFormat = new Date(date);
  // get hours and minutes from date
  const hours = dateFormat.getHours();
  const minutes = dateFormat.getMinutes();
  // get day and month from date
  const day = dateFormat.getDate();
  const month = dateFormat.getMonth() + 1;

  const time = `${hours}:${minutes}`;
  const datePost = `${day}/${month}`;

  const { auth } = useAuth();
  const { data, loading } = useQuery(GET__USER, {
    variables: { username: auth.username },
  });

  const { getUser } = data;

  return (
    <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
      <div className="flex h-full bg-white rounded overflow-hidden ">
        <a className="flex flex-wrap no-underline hover:no-underline">
          <div className="w-full md:w-2/3 object-cover rounded-t">
            <img src={publication.file} className="image__post" />
          </div>

          <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden">
              <div className="flex items-start px-4 py-6">
                <img
                  className="w-10 h-10 rounded-full object-cover mr-4 shadow"
                  src={getUser.avatar || avatarNotFound}
                  alt="avatar"
                />
                <div className="">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-semibold text-gray-900 -mt-1">
                      {getUser.name}
                    </h2>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Publicado {datePost} {time}{' '}
                  </p>
                </div>
              </div>

              <div className="hidden lg:block md:block sm:block w-full font-bold text-base text-gray-900 px-6">
                {publication.title}
              </div>
              <p className="hidden lg:block md:block sm:block text-gray-800  text-sm px-6 mb-5">
                {publication.description}
                <br />
                <br />
              </p>
              <hr className="w-full hidden lg:flex md:flex sm:flex" />
            </div>
            <div className="flex w-full border-t border-gray-100">
              <div className=" flex flex-row">
                <div className="mt-2 mx-5 w-full flex justify-end">
                  <div className="flex text-gray-700 font-normal text-sm rounded-md mb-0 mr-2 items-center">
                    <LikeButton />
                  </div>
                </div>
                <div className="flex text-gray-700 font-normal text-sm rounded-md mb-0 mt-2 mr-2 items-center">
                  <FaRegComment />
                  <div className="ml-1 text-gray-400 font-thin text-ms">
                    {' '}
                    30
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
              <button className="flex items-center justify-center w-20 h-10 object-cover  shadow mr-2 cursor-pointer text-base font-medium text-gray-200 bg-darktheme-button rounded-md hover:bg-blue-600 focus:outline-none focus:bg-gray-200 focus:shadow-outline">
                Enviar
              </button>

              <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                <div className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
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
                </div>
              </span>
              <input
                type="text"
                name="comment"
                className="w-full py-3 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                style={{ borderRadius: '25px' }}
                placeholder="Escribe un comentario..."
                autoComplete="off"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
