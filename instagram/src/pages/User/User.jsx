import React from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../../components/Profile';
import UserGallery from '../../components/UserGallery';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@apollo/client';
import { GET__USER } from '../../gql/user';
import Error404 from '../Error404';

export default function User() {
  const { username } = useParams();
  const { auth } = useAuth();
  const { data, loading, error } = useQuery(GET__USER, {
    variables: { username },
  });

  if (loading) return null;
  if (error) return <Error404 />;
  const { getUser } = data;

  return (
    <div className=" flex min-h-screen 2xl:max-w-7xl 2xl:mx-auto 2xl:border-x-2 2xl:border-indigo-50 ">
      <Profile getUser={getUser} auth={auth} username={username} />
      <UserGallery getUser={getUser} auth={auth} />
    </div>
  );
}

{
}
