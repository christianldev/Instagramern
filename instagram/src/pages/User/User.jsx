import React from 'react';
import { useParams } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { useQuery } from '@apollo/client';
import { GET__USER } from '../../gql/user';
import Error404 from '../Error404';
import Profile from '../../components/User/Profile/Profile';
import UserGallery from '../../components/User/UserGallery/UserGallery';
import { GET_PUBLICATIONS } from '../../gql/post';

export default function User() {
  const { username } = useParams();
  const { auth } = useAuth();

  const { data, loading, error } = useQuery(GET__USER, {
    variables: { username },
  });

  const {
    data: dataPublications,
    loading: loadingPublications,
    error: errorPublications,
  } = useQuery(GET_PUBLICATIONS, {
    variables: {
      username: username,
    },

    update(cache, { data: { getPublications } }) {
      const { publications } = cache.readQuery({
        query: GET_PUBLICATIONS,
        variables: {
          username: username,
        },
      });

      cache.writeQuery({
        query: GET_PUBLICATIONS,
        variables: {
          username: username,
        },
        data: {
          getPublications: getPublications.publications,
        },
      });
    },
  });

  if (loading) return null;
  if (error) return <Error404 />;
  const { getUser } = data;

  return (
    <div className=" flex min-h-screen 2xl:max-w-7xl 2xl:mx-auto 2xl:border-x-2 2xl:border-indigo-50 ">
      <Profile
        getUser={getUser}
        auth={auth}
        username={username}
        dataPublications={dataPublications}
        loadingPublications={loadingPublications}
      />
      <UserGallery
        dataPublications={dataPublications}
        loadingPublications={loadingPublications}
        errorPublications={errorPublications}
      />
    </div>
  );
}
