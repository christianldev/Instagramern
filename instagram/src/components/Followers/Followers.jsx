import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_FOLLOWERS, FOLLOW_ADDED, UNFOLLOW_ADDED } from '../../gql/follow';

export default function Followers({ username, handlerModal }) {
  const { data, loading, error, subscribeToMore } = useQuery(GET_FOLLOWERS, {
    variables: { username },
  });

  useEffect(() => {
    subscribeToMore({
      document: FOLLOW_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newFollow = subscriptionData.data.followAdded;

        const newFollowers = Object.assign({}, prev.followers, {
          [newFollow.username]: newFollow,
        });

        return Object.assign({}, prev, {
          getFollowers: newFollowers,
        });
      },
    });
    subscribeToMore({
      document: UNFOLLOW_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const unfollow = subscriptionData.data.unFollowAdded;

        const updatedFollowers = Object.assign({}, prev, {
          getFollowers: prev.getFollowers.filter(
            (follower) => follower.username !== unfollow.username,
          ),
        });

        return updatedFollowers;
      },
    });
  }, [subscribeToMore, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { getFollowers } = data;

  return (
    <>
      <div className="flex flex-nowrap __profile justify-center items-center gap-2 my-3">
        <div className="font-semibold text-center mx-4">
          <p className="text-gray-400">102k</p>
          <span className="text-gray-400">Posts</span>
        </div>
        <div className="font-semibold text-center mx-4">
          <p className="text-gray-400">
            {getFollowers.length}{' '}
            {(getFollowers.length >= 10000 && 'k') ||
              (getFollowers.length >= 1000000 && 'm')}
          </p>
          <span
            onClick={() => handlerModal('getFollowers')}
            className="text-gray-400 cursor-pointer"
          >
            {getFollowers.length > 1 || getFollowers.length == 0
              ? 'Seguidores'
              : 'Seguidor'}
          </span>
        </div>
        <div className="font-semibold text-center mx-4">
          <p className="text-gray-400">102</p>
          <span className="text-gray-400">Siguiendo</span>
        </div>
      </div>
    </>
  );
}
