import React from 'react';
import LikeButton from '../../../components/LikeButton';
import { FaRegComment, FaShareAlt, FaRegBookmark } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';
import useAuth from '../../../hooks/useAuth';

import avatarNotFound from '../../../assets/avatarnotfound.jpg';
import './ModalPost.css';
import CommentPost from '../CommentPost';

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
  const { data, loading } = useQuery(GET_USER, {
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

            <CommentPost publication={publication} />
          </div>
        </a>
      </div>
    </div>
  );
}
