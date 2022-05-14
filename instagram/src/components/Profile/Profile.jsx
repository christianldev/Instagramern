import React, { useState } from 'react';

import ModalStructure from '../ModalStructure/ModalStructure';

import './Profile.css';
import avatarNotFound from '../../assets/avatarnotfound.jpg';
import FeaturedStories from '../FeaturedStories';
import { FaEllipsisV } from 'react-icons/fa';

import useModalForm from '../../hooks/useModalForm';
import { useMutation } from '@apollo/client';
import { FOLLOW_USER } from '../../gql/follow';

export default function Profile({ getUser, auth, username }) {
  const { showModal, titleModal, childreModal, handlerModal, setShowModal } =
    useModalForm(auth);

  const [followUserState, setFollowUserState] = useState(false);

  const [followUser] = useMutation(FOLLOW_USER, {
    variables: {
      username,
    },
    onCompleted: () => {
      setFollowUserState(true);
    },
  });

  const handleFollowUser = () => {
    followUser();

    setFollowUserState(true);
  };

  return (
    <aside className="relative bg-no-repeat bg-fixed bg-center bg-cover dark:bg-darktheme-body w-1/3    min-w-min   border-r border-indigo-900/20 hidden md:block sm:block ">
      <div>
        <div className="flex items-center justify-end p-2">
          <FaEllipsisV
            className="cursor-pointer  text-gray-500 hover:text-gray-400"
            onClick={() =>
              username === auth.username && handlerModal('editProfile')
            }
          />
        </div>
        <div className="flex flex-col gap-1 text-center items-center">
          <span className=" rounded-full bg-gradient-to-r from-purple-800  to-blue-800">
            <img
              className="h-32 w-32 p-2 rounded-full  cursor-pointer object-cover"
              src={getUser.avatar ? getUser.avatar : avatarNotFound}
              onClick={() =>
                username === auth.username && handlerModal('avatar')
              }
              alt=""
            />
          </span>
          <p className="font-semibold text-gray-500">@{getUser.username}</p>
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
          {getUser.username === auth.username ? (
            <button className="px-8 py-1 border-2 border-blue-500 bg-blue-500 rounded-full text-gray-50 font-semibold">
              Ajustes
            </button>
          ) : (
            <button
              onClick={handleFollowUser}
              className="px-8 py-1 border-2 border-blue-500 bg-blue-500 rounded-full text-gray-50 font-semibold"
            >
              {followUserState ? 'Siguiendo' : 'Seguir'}
            </button>
          )}
        </div>
      </div>

      <article className="flex flex-col p-4 text-gray-500 justify-center items-center ">
        <p className="font-semibold text-center">{getUser.name}</p>
        {getUser.description && (
          <>
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
      <FeaturedStories />
      {showModal ? (
        <ModalStructure
          showModal={showModal}
          setShowModal={setShowModal}
          titleModal={titleModal}
        >
          {childreModal}
        </ModalStructure>
      ) : null}
    </aside>
  );
}
