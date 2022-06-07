import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_NOT_FOLLOWING } from '../../gql/follow';
import { Link } from 'react-router-dom';

import FollowButton from '../FollowButton';
import avataNotFound from '../../assets/avatarnotfound.jpg';

export default function Suggested({ getUser, auth }) {
  const { data, loading } = useQuery(GET_NOT_FOLLOWING);

  if (loading) return null;

  const { getNotFollowing } = data;

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
        {getNotFollowing.length < 1 ? (
          <div className="flex justify-center items-center w-full">
            <p className="text-center text-lg text-gray-600">
              No hay sugerencias
            </p>
          </div>
        ) : (
          getNotFollowing.map((user) => (
            <div
              className="flex justify-center items-center w-full"
              key={user.id}
            >
              <div className="flex justify-between items-center">
                <Link
                  to={`/${user.username}`}
                  className="w-8 h-8 m-3 bg-pink-700 rounded-full"
                >
                  <img
                    src={user.avatar || avataNotFound}
                    alt=""
                    className="rounded-full w-8 h-8"
                  />
                </Link>
                <Link to={`/${user.username}`}>
                  <p className="text-xs dark:text-gray-200 font-bold">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.username}</p>
                </Link>
                <FollowButton getNotFollowing={user} />
              </div>
            </div>
          ))
        )}
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
          © 2022 Instagram from Facebook
        </p>
      </footer>
    </div>
  );
}
