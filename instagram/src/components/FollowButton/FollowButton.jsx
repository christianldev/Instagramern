import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { IS_FOLLOW, FOLLOW_USER, UNFOLLOW_USER } from '../../gql/follow';
import toast from 'react-hot-toast';

import { FaSpinner } from 'react-icons/fa';

import './FollowButton.css';

export default function FollowButton({ handlerModal, getUser, auth }) {
  const [follow] = useMutation(FOLLOW_USER);
  const [unfollow] = useMutation(UNFOLLOW_USER);
  const { data, loading } = useQuery(IS_FOLLOW, {
    variables: {
      username: getUser.username,
    },
  });

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
          class={!loading ? 'heart-button active ' : 'heart-button'}
        >
          <div class="heart-flip"></div>
          <span>Dejar de seguir</span>
        </button>
      );
    } else {
      return (
        // <button
        //   onClick={() => onFollow()}
        //   className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-500 border-blue-600 text-white"
        // >
        //   {loading ? (
        //     <FaSpinner className="w-6 h-6 flex justify-center items-center" />
        //   ) : (
        //     'Seguir'
        //   )}
        // </button>
        <button
          onClick={() => onFollow()}
          class={loading ? 'heart-button active ' : 'heart-button'}
        >
          <div class="heart-flip"></div>
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
