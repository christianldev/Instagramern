import React, { useEffect } from 'react';
import { useQuery, useMutation, useSubscription } from '@apollo/client';
import { IS_FOLLOW, FOLLOW_USER, UNFOLLOW_USER } from '../../gql/follow';
import toast from 'react-hot-toast';

import './FollowButton.css';

export default function FollowButton({ handlerModal, getUser, auth }) {
  const [follow] = useMutation(FOLLOW_USER);
  const [unfollow] = useMutation(UNFOLLOW_USER);
  const { data, loading } = useQuery(IS_FOLLOW, {
    variables: {
      username: getUser.username,
    },
  });

  if (loading) {
    return <div className="flex justify-center items-center">Cargando...</div>;
  }

  const onFollow = async () => {
    try {
      await follow({
        variables: {
          username: getUser.username,
        },
        update(cache, { data: { follow } }) {
          const { isFollow } = cache.readQuery({
            query: IS_FOLLOW,
            variables: {
              username: getUser.username,
            },
          });
          cache.writeQuery({
            query: IS_FOLLOW,
            variables: {
              username: getUser.username,
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
          username: getUser.username,
        },
        update(cache, { data: { unfollow } }) {
          const { isFollow } = cache.readQuery({
            query: IS_FOLLOW,
            variables: {
              username: getUser.username,
            },
          });
          cache.writeQuery({
            query: IS_FOLLOW,
            variables: {
              username: getUser.username,
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
          <div className="heart-flip"></div>
          <span>Dejar de seguir</span>
        </button>
      );
    } else {
      return (
        <button
          onClick={() => onFollow()}
          className={loading ? 'heart-button active ' : 'heart-button'}
        >
          <div className="heart-flip"></div>
          <span>Seguir</span>
        </button>
      );
    }
  };

  return (
    <div className="font-semibold text-center mx-4">
      {getUser.username === auth.username ? (
        <button
          onClick={() =>
            getUser.username === auth.username && handlerModal('editProfile')
          }
          className="px-8 py-1 border-2 border-blue-500 bg-blue-500 rounded-full text-gray-50 font-semibold"
        >
          Ajustes
        </button>
      ) : (
        !loading && buttonFollow()
      )}
    </div>
  );
}
