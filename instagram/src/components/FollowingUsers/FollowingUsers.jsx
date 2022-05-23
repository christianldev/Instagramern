import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FOLLOW_ADDED, GET_FOLLOWING, UNFOLLOW_ADDED } from '../../gql/follow';

export default function FollowingUsers({ username }) {
  const [following, setFollowing] = useState([]);
  const {
    data: dataFollowing,
    loading: loadingFollowing,
    subscribeToMore: subscribeToMoreFollowing,
  } = useQuery(GET_FOLLOWING, {
    variables: { username },
  });

  useEffect(() => {
    subscribeToMoreFollowing({
      document: FOLLOW_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        try {
          if (!subscriptionData.data) return prev;
          const newFollow = subscriptionData.data.followAdded;

          setFollowing((prevFollowing) => [...prevFollowing, newFollow]);

          return prev;
        } catch (error) {
          toast.error(error);
        }
      },
    });

    subscribeToMoreFollowing({
      document: UNFOLLOW_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        try {
          if (!subscriptionData.data) return prev;
          const unfollow = subscriptionData.data.unFollowAdded;

          setFollowing(
            {
              ...prev,
            }.getFollowing.filter(
              (follower) => follower.username !== unfollow.username,
            ),
          );
        } catch (error) {
          toast.error(error);
        }
      },
    });
  }, [subscribeToMoreFollowing]);

  if (loadingFollowing) return null;

  return (
    <div className="font-semibold text-center mx-4">
      <p className="text-gray-400">
        {following.length}{' '}
        {(following.length >= 10000 && 'k') ||
          (following.length >= 1000000 && 'm')}
      </p>
      <span className="text-gray-400">Siguiendo</span>
    </div>
  );
}
