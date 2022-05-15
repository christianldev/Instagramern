import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_FOLLOWERS } from '../../gql/follow';

export default function Followers({ username }) {
  const { data, loading, error } = useQuery(GET_FOLLOWERS, {
    variables: { username },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { getFollowers } = data;

  return (
    <div className="flex flex-nowrap __profile justify-center items-center gap-2 my-3">
      <div className="font-semibold text-center mx-4">
        <p className="text-gray-200">102k</p>
        <span className="text-gray-400">Posts</span>
      </div>
      <div className="font-semibold text-center mx-4">
        <p className="text-gray-200">
          {getFollowers.length}{' '}
          {(getFollowers.length >= 10000 && 'k') ||
            (getFollowers.length >= 1000000 && 'm')}
        </p>
        <span className="text-gray-400">
          {getFollowers.length > 1 ? 'Seguidores' : 'Seguidor'}
        </span>
      </div>
      <div className="font-semibold text-center mx-4">
        <p className="text-gray-200">102</p>
        <span className="text-gray-400">Siguiendo</span>
      </div>
    </div>
  );
}
