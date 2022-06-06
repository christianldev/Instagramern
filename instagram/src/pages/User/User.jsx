import React from 'react';
import { useParams } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/user';
import Error404 from '../Error404';
import Profile from '../../components/User/Profile/Profile';
import UserGallery from '../../components/User/UserGallery/UserGallery';
import LoadingData from '../../components/LoadingData';
import useGetPublications from '../../hooks/useGetPublications';

export default function User() {
  const { username } = useParams();
  const { auth } = useAuth();

  const { data, loading, error } = useQuery(GET_USER, {
    variables: { username },
  });

  const { dataPublications, loadingPublications, errorPublications } =
    useGetPublications(username);

  if (loading) return <LoadingData />;
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
