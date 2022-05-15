import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { IS_FOLLOW, FOLLOW_USER, UNFOLLOW_USER } from '../../gql/follow';
import toast from 'react-hot-toast';

export default function FollowButton({
  handlerModal,
  getUser,
  auth,
  username,
}) {
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
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => onUnfollow()}
        >
          Dejar de seguir
        </button>
      );
    } else {
      return (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => onFollow()}
        >
          Seguir
        </button>
      );
    }
  };

  return (
    <div className="font-semibold text-center mx-4">
      {getUser.username === auth.username ? (
        <button
          onClick={() =>
            username === auth.username && handlerModal('editProfile')
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
