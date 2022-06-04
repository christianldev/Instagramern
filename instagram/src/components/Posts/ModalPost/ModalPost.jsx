import React from 'react';
import LikeButton from '../../../components/LikeButton';
import LoadingData from '../../../components/LoadingData';

import { FaRegComment } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';
import useAuth from '../../../hooks/useAuth';

import avatarNotFound from '../../../assets/avatarnotfound.jpg';
import './ModalPost.css';
import CommentPost from '../CommentPost';
import { GET_COMMENTS } from '../../../gql/comment';

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

  const { data: dataComment, loading: loadingComment } = useQuery(
    GET_COMMENTS,
    {
      variables: { idPublication: publication.id },
    },
  );

  if (loading || loadingComment) return <LoadingData />;

  const { getUser } = data;
  const { getComments } = dataComment;

  return (
    <main className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
      <div className="flex h-full bg-white rounded overflow-hidden ">
        <div className="flex flex-wrap no-underline hover:no-underline">
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
              {getComments.map((comment) => (
                <div
                  key={comment._id}
                  className="hidden lg:flex md:flex  items-center space-x-2 p-2"
                >
                  <div className="flex flex-shrink-0 self-start cursor-pointer overflow-y-auto">
                    <img
                      src={comment.idUser.avatar || avatarNotFound}
                      alt=""
                      className="h-8 w-8 object-fill rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-center space-x-2 ">
                    <div className="block">
                      <div className="bg-gray-100 w-auto rounded-xl px-2 pb-2">
                        <div className="font-medium">
                          <a href="#" className="hover:underline text-sm">
                            <small>{comment.idUser.name}</small>
                          </a>
                        </div>
                        <div className="text-xs">{comment.comment}</div>
                      </div>
                      <div className="flex justify-start items-center text-xs w-full">
                        <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
                          <a href="#" className="hover:underline">
                            <small>Like</small>
                          </a>
                          <small className="self-center">.</small>
                          <a href="#" className="hover:underline">
                            <small>Reply</small>
                          </a>
                          <small className="self-center">.</small>
                          <a href="#" className="hover:underline">
                            <small>15 hour</small>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
        </div>
      </div>
    </main>
  );
}