import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { GET_FOLLOWING } from '../../../gql/follow';

export default function FollowingUsers({ handlerModal, username }) {
  const { data: dataFollowing, loading: loadingFollowing } = useQuery(
    GET_FOLLOWING,
    {
      variables: { username },
    },
  );

  if (loadingFollowing) return null;

  const { getFollowing } = dataFollowing;

  return (
    <div className="font-semibold text-center mx-4 cursor-pointer">
      <p className="text-gray-400">{getFollowing.length}</p>
      <span
        onClick={() => handlerModal('getFollowing')}
        className="text-gray-400"
      >
        Siguiendo
      </span>
    </div>
  );
}
