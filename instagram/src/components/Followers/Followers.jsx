import { useQuery } from '@apollo/client';
import React, { useState, useCallback, useEffect } from 'react';
import { GET_FOLLOWERS, FOLLOW_ADDED, UNFOLLOW_ADDED } from '../../gql/follow';
import FollowingUsers from '../FollowingUsers/FollowingUsers';

export default function Followers({ username, handlerModal }) {
  const [followers, setFollowers] = useState([]);
  const { data, loading, error, subscribeToMore } = useQuery(GET_FOLLOWERS, {
    variables: { username },
  });

  useEffect(() => {
    subscribeToMore({
      document: FOLLOW_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newFollow = subscriptionData.data.followAdded;
        setFollowers((prevFollowers) => [...prevFollowers, newFollow]);

        return prev;
      },
    });
    subscribeToMore({
      document: UNFOLLOW_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const unfollow = subscriptionData.data.unFollowAdded;

        setFollowers(
          {
            ...prev,
          }.getFollowers.filter(
            (follower) => follower.username !== unfollow.username,
          ),
        );

        return prev;
      },
    });
  }, [subscribeToMore]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div className="flex flex-nowrap __profile justify-center items-center gap-2 my-3">
        <div className="font-semibold text-center mx-4">
          <p className="text-gray-400">102k</p>
          <span className="text-gray-400">Posts</span>
        </div>
        <div className="font-semibold text-center mx-4">
          <p className="text-gray-400">
            {followers.length}{' '}
            {(followers.length >= 10000 && 'k') ||
              (followers.length >= 1000000 && 'm')}
          </p>
          <span
            onClick={() => handlerModal('getFollowers')}
            className="text-gray-400 cursor-pointer"
          >
            {followers.length > 1 || followers.length == 0
              ? 'Seguidores'
              : 'Seguidor'}
          </span>
        </div>
        <FollowingUsers username={username} />
      </div>
    </>
  );
}
