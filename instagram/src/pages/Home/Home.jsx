import React from 'react';

import useAuth from '../../hooks/useAuth';
import InstagramStories from '../../components/InstagramStories';
import Suggested from '../../components/Suggested';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/user';
import { GET_FOLLOWING_PUBLICATIONS } from '../../gql/post';

import LoadingData from '../../components/LoadingData';
import HomePagePost from '../../components/Posts/HomePagePost';

import './Home.css';

export default function Home() {
  const { auth } = useAuth();

  const { data, loading } = useQuery(GET_USER, {
    variables: { username: auth.username },
  });

  const { data: dataFollowingPosts, loading: loadingFollowingPost } = useQuery(
    GET_FOLLOWING_PUBLICATIONS,
  );

  if (loading || loadingFollowingPost) return <LoadingData />;

  const { getUser } = data;

  const { getFollowingPublications } = dataFollowingPosts;

  return (
    <main className="mx-auto bg-white dark:bg-darktheme-body lg:m-auto flex flex-1 flex-col items-center w-full ">
      <InstagramStories getUser={getUser} />

      <div id="wrapper" className="lg:flex px-2">
        <section className="px-5 self-start xl:w-4/6 ">
          {getFollowingPublications.map((publication) => (
            <HomePagePost
              key={publication._id}
              publication={publication}
              getUser={getUser}
            />
          ))}
        </section>
        <Suggested getUser={getUser} auth={auth} />
      </div>
    </main>
  );
}
