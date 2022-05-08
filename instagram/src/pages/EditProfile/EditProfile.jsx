import React, { useState } from 'react';
import EditProfileSidebar from '../../components/EditProfileSidebar';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET__USER } from '../../gql/user';
import Error404 from '../Error404';
import EditProfileForm from '../../components/EditProfileForm';
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm';

export default function EditProfile() {
  const [editProfile, setEditProfile] = useState(false);

  const handlerChangeProfile = (type) => {
    if (type === 'editProfile') {
      setEditProfile(true);
    } else if (type === 'changePassword') {
      setEditProfile(false);
    }
  };
  const { auth } = useAuth();

  const { data, loading, error } = useQuery(GET__USER, {
    variables: auth,
  });

  if (loading) return null;
  if (error) return <Error404 />;
  const { getUser } = data;

  return (
    <div className=" flex min-h-screen 2xl:max-w-7xl 2xl:mx-auto 2xl:border-x-2 2xl:border-indigo-50 ">
      <EditProfileSidebar handlerChangeProfile={handlerChangeProfile} />
      {editProfile ? (
        <EditProfileForm getUser={getUser} auth={auth} />
      ) : (
        <ChangePasswordForm getUser={getUser} auth={auth} />
      )}
    </div>
  );
}
