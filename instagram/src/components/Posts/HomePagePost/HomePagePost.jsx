import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../../LikeButton';
import useModalForm from '../../../hooks/useModalForm';
import ModalStructure from '../../ModalStructure';

import avatarNotFound from '../../../assets/avatarnotfound.jpg';
import { FaShareAlt, FaRegComment, FaRegBookmark } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import LoadingData from '../../LoadingData';
import { GET_COMMENTS } from '../../../gql/comment';

export default function HomePagePost({ publication, getUser }) {
  const {
    titleModal,
    childreModal,
    handlerModal,
    setShowModal,
    showModal,
    setPublication,
  } = useModalForm();

  useEffect(() => {
    setPublication({ ...publication });
  }, [publication]);

  const { data, loading } = useQuery(GET_COMMENTS, {
    variables: { idPublication: publication._id },
  });

  if (loading) return <LoadingData />;

  const { getComments } = data;

  return (
    <>
      <div
        key={publication._id}
        className="flex max-w-xl my-10 bg-white dark:bg-darktheme-navbar shadow-md rounded-lg overflow-hidden mx-auto"
      >
        <div className="flex items-center w-full">
          <div className="w-full">
            <div className="flex flex-row mt-2 px-2 py-3 mx-3">
              <Link
                to={`/${publication.idUser.username}`}
                className="w-auto h-auto rounded-full border-2 border-blue-500"
              >
                <img
                  className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                  alt="User avatar"
                  src={publication.idUser.avatar || avatarNotFound}
                />
              </Link>
              <div className="flex flex-col mb-2 ml-4 mt-1">
                <Link
                  to={`${publication.idUser.username}`}
                  className="text-gray-600 text-sm font-semibold"
                >
                  {publication.idUser.username}
                </Link>
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

            <div className="text-gray-500 font-medium text-sm mb-4 mt-4 mx-3 px-2 ">
              <img className="rounded" src={publication.file} />
            </div>
            <div className="text-gray-500 font-semibold text-lg mb-2 mx-3 px-2">
              {publication.title}
            </div>
            <div className="text-gray-500 font-thin text-sm mb-3 mx-3 px-2">
              {publication.description}
            </div>
            <div className="flex justify-start mb-2">
              <div className="flex w-full mt-1 pt-2 pl-5">
                <div className="flex text-gray-500 font-normal text-sm rounded-md mb-2 mr-2 items-center">
                  <LikeButton publication={publication} />
                </div>
                <div
                  onClick={() => handlerModal('viewPost')}
                  className="flex text-gray-500 font-normal text-md rounded-md mb-2 mr-4 items-center cursor-pointer"
                >
                  <FaRegComment />
                  <div className="ml-1 text-gray-500 font-thin text-ms">
                    {getComments.length}
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                <span className="flex justify-center items-center transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                  <FaShareAlt />
                </span>
                <span className=" flex justify-center items-center transition ease-out duration-300 hover:bg-blue-500 bg-blue-600 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                  <FaRegBookmark />
                </span>
              </div>
            </div>

            <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
              <img
                className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
                alt="User avatar"
                src={getUser.avatar || avatarNotFound}
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
                className="w-full py-3 pl-4 pr-10 text-sm bg-gray-100 dark:bg-darktheme-body text-gray-400 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 "
                style={{ borderRadius: '25px' }}
                placeholder="Escribe un comentario..."
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <ModalStructure
          showModal={showModal}
          setShowModal={setShowModal}
          titleModal={titleModal}
        >
          {childreModal}
        </ModalStructure>
      ) : null}
    </>
  );
}
