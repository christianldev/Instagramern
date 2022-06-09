import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  IS_FOLLOW,
  FOLLOW_USER,
  UNFOLLOW_USER,
  GET_NOT_FOLLOWING,
} from '../../gql/follow';
import toast from 'react-hot-toast';
import { FaHeartBroken, FaUserPlus } from 'react-icons/fa';

import './FollowButton.css';
import { GET_FOLLOWING_PUBLICATIONS } from '../../gql/post';

export default function FollowButton({ getUser, getNotFollowing, auth }) {
  const [follow] = useMutation(FOLLOW_USER, {
    refetchQueries: [
      {
        query: GET_NOT_FOLLOWING,
      },
      {
        query: GET_FOLLOWING_PUBLICATIONS,
      },
    ],
  });
  const [unfollow] = useMutation(UNFOLLOW_USER, {
    refetchQueries: [
      {
        query: GET_NOT_FOLLOWING,
      },
      {
        query: GET_FOLLOWING_PUBLICATIONS,
      },
    ],
  });

  const { data, loading } = useQuery(IS_FOLLOW, {
    variables: {
      username: getUser?.username || getNotFollowing?.username,
    },
  });

  const onFollow = async () => {
    try {
      await follow({
        variables: {
          username: getUser?.username || getNotFollowing?.username,
        },

        update(cache, { data: { follow } }) {
          const { isFollow } = cache.readQuery({
            query: IS_FOLLOW,
            variables: {
              username: getUser?.username || getNotFollowing?.username,
            },
          });
          cache.writeQuery({
            query: IS_FOLLOW,
            variables: {
              username: getUser?.username || getNotFollowing?.username,
            },
            data: {
              isFollow: !isFollow,
            },
          });
        },
      });
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
      });
    }
  };

  const onUnfollow = async () => {
    try {
      await unfollow({
        variables: {
          username: getUser?.username || getNotFollowing?.username,
        },
        update(cache, { data: { unfollow } }) {
          const { isFollow } = cache.readQuery({
            query: IS_FOLLOW,
            variables: {
              username: getUser?.username || getNotFollowing?.username,
            },
          });
          cache.writeQuery({
            query: IS_FOLLOW,
            variables: {
              username: getUser?.username || getNotFollowing?.username,
            },
            data: {
              isFollow: !isFollow,
            },
          });
        },
      });
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
      });
    }
  };

  const buttonFollow = () => {
    if (data.isFollow) {
      return (
        <button
          onClick={() => onUnfollow()}
          className={!loading ? 'heart-button active ' : 'heart-button'}
        >
          <FaHeartBroken className="inline-flex relative bottom-0.5" />
          <span className="pl-2">Dejar de seguir</span>
        </button>
      );
    } else {
      return (
        <button
          onClick={() => onFollow()}
          className={loading ? 'heart-button active ' : 'heart-button'}
        >
          <FaUserPlus className=" inline-flex relative bottom-0.5" />
          <span>Seguir</span>
        </button>
      );
    }
  };

  return (
    <div className="font-semibold text-center mx-4">
      {!loading && getUser?.username !== auth?.username && buttonFollow()}
    </div>
  );
}
