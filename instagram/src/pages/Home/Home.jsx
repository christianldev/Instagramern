import React from 'react';

import useAuth from '../../hooks/useAuth';
import InstagramStories from '../../components/InstagramStories';
import Suggested from '../../components/Suggested';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/user';

import './Home.css';
import LikeButton from '../../components/LikeButton';
import LoadingData from '../../components/LoadingData';
import useGetPublications from '../../hooks/useGetPublications';
import HomePagePost from '../../components/Posts/HomePagePost';

export default function Home() {
  const { auth } = useAuth();

  const { data, loading } = useQuery(GET_USER, {
    variables: { username: auth.username },
  });

  if (loading) return <LoadingData />;

  const { getUser } = data;

  return (
    <main className="mx-auto bg-white dark:bg-darktheme-body lg:m-auto flex flex-1 flex-col items-center w-full ">
      <InstagramStories getUser={getUser} />

      <div id="wrapper" className="lg:flex px-2">
        <HomePagePost />
        <Suggested getUser={getUser} auth={auth} />
      </div>
    </main>
  );
}
