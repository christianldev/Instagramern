import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
  ADD_LIKE,
  ADD_LIKE_SUBSCRIPTION,
  GET_COUNT_LIKES,
  IS_LIKE,
  REMOVE_LIKE,
  REMOVE_LIKE_SUBSCRIPTION,
} from '../gql/like';

import toast from 'react-hot-toast';

export default function useLikePost(publication) {
  const { data, loading } = useQuery(GET_COUNT_LIKES, {
    variables: { idPublication: publication.id },
  });

  const [addLike] = useMutation(ADD_LIKE, {
    refetchQueries: [
      {
        query: GET_COUNT_LIKES,
        variables: { idPublication: publication.id },
      },
    ],
  });
  const [removeLike] = useMutation(REMOVE_LIKE, {
    refetchQueries: [
      {
        query: GET_COUNT_LIKES,
        variables: { idPublication: publication.id },
      },
    ],
  });

  const { data: dataIsLike, loading: loadingIsLike } = useQuery(IS_LIKE, {
    variables: { idPublication: publication.id },
  });

  const handleAddLike = async () => {
    try {
      await addLike({
        variables: {
          idPublication: publication.id,
        },
        update(cache, { data: { addLike } }) {
          const { isLike } = cache.readQuery({
            query: IS_LIKE,
            variables: {
              idPublication: publication.id,
            },
          });
          cache.writeQuery({
            query: IS_LIKE,
            variables: {
              idPublication: publication.id,
            },
            data: {
              isLike: !isLike,
            },
          });
        },
      });
    } catch (err) {
      toast.error(err.message, {
        position: 'top-right',
      });
    }
  };

  const handleRemoveLike = async () => {
    try {
      await removeLike({
        variables: {
          idPublication: publication.id,
        },
        update(cache, { data: { removeLike } }) {
          const { isLike } = cache.readQuery({
            query: IS_LIKE,
            variables: {
              idPublication: publication.id,
            },
          });
          cache.writeQuery({
            query: IS_LIKE,
            variables: {
              idPublication: publication.id,
            },
            data: {
              isLike: !isLike,
            },
          });
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    data,
    loading,
    dataIsLike,
    loadingIsLike,
    handleAddLike,
    handleRemoveLike,
  };
}
