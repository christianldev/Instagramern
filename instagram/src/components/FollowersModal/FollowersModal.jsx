import { useQuery } from '@apollo/client';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { GET_FOLLOWERS } from '../../gql/follow';
import FollowButton from '../FollowButton';

export default function FollowersModal({ auth }) {
  const { username } = useParams();
  const { data, loading, error } = useQuery(GET_FOLLOWERS, {
    variables: { username },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { getFollowers } = data;

  return (
    <div className="relative p-2 w-full max-w-md h-full md:h-auto">
      <div className="relative bg-white  dark:bg-darktheme-body">
        {getFollowers.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-center text-gray-400">No tiene seguidores</p>
          </div>
        ) : (
          getFollowers.map((follower) => (
            <div
              key={follower.id}
              className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-2 sm:px-2 hover:bg-[#f6f8f9]"
            >
              <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                  <img
                    className="avatar w-10 h-10 rounded-full"
                    src={follower.avatar}
                  />
                </div>
                <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                  <a
                    href="#"
                    className="title font-medium no-underline text-gray-400"
                  >
                    @{follower.username}
                  </a>
                  <div className="skills flex flex-col">
                    <span className="subtitle text-slate-500">
                      {follower.name}
                    </span>
                    {/* <span className="subtitle text-slate-500">Coordinator 💪</span> */}
                  </div>
                </div>
              </div>

              <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                <FollowButton auth={auth} getUser={follower} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
