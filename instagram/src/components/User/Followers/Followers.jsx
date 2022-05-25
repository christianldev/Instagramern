import { useQuery } from '@apollo/client';
import React, { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';
import {
  GET_FOLLOWERS,
  FOLLOW_ADDED,
  UNFOLLOW_ADDED,
} from '../../../gql/follow';
import FollowingUsers from '../FollowingUsers/FollowingUsers';

export default function Followers({ username, handlerModal }) {
  const { data, loading, subscribeToMore } = useQuery(GET_FOLLOWERS, {
    variables: { username },
  });

  useEffect(() => {
    subscribeToMore({
      document: FOLLOW_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        try {
          if (!subscriptionData.data) return prev;
          const newFollow = subscriptionData.data.followAdded;

          return {
            ...prev,
            getFollowers: [...prev.getFollowers, newFollow],
          };
        } catch (error) {
          toast.error(error);
        }
      },
    });
    subscribeToMore({
      document: UNFOLLOW_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        try {
          if (!subscriptionData.data) return prev;
          const newUnFollow = subscriptionData.data.unFollowAdded;

          return {
            ...prev,
            getFollowers: prev.getFollowers.filter(
              (follower) => follower.username !== newUnFollow.username,
            ),
          };
        } catch (error) {
          toast.error(error);
        }
      },
    });
  }, [subscribeToMore]);

  if (loading) return <p>Loading...</p>;

  const { getFollowers } = data;

  return (
    <>
      <div className="flex flex-nowrap __profile justify-center items-center gap-2 my-3">
        <div className="font-semibold text-center mx-4">
          <p className="text-gray-400">102k</p>
          <span className="text-gray-400">Posts</span>
        </div>
        <div className="font-semibold text-center mx-4">
          <p className="text-gray-400">{getFollowers.length} </p>
          <span
            onClick={() => handlerModal('getFollowers')}
            className="text-gray-400 cursor-pointer"
          >
            Seguidores
          </span>
        </div>
        <FollowingUsers handlerModal={handlerModal} username={username} />
      </div>
    </>
  );
}
