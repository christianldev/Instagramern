import { useEffect } from 'react';

export default function useFollowAdded(
  FOLLOW_ADDED,
  UNFOLLOW_ADDED,
  subscribeToMore,
) {
  useEffect(() => {
    subscribeToMore({
      document: FOLLOW_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData) return prev;
        const follow = subscriptionData.data.followAdded;
        const updatedFollowers = Object.assign({}, prev, {
          getFollowers: [...prev.getFollowers, follow],
        });
        return updatedFollowers;
      },
    });
    subscribeToMore({
      document: UNFOLLOW_ADDED,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData) return prev;
        const unfollow = subscriptionData.data.unFollowAdded;
        const updatedFollowers = Object.assign({}, prev, {
          getFollowers: prev.getFollowers.filter(
            (follower) => follower.username !== unfollow.username,
          ),
        });
        return updatedFollowers;
      },
    });
  }, [subscribeToMore]);

  return null;
}
