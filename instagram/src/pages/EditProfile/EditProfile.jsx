import React, { useEffect, useState } from 'react';
import EditProfileSidebar from '../../components/EditProfileSidebar';
import useAuth from '../../hooks/useAuth';
import { useApolloClient, useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { GET__USER } from '../../gql/user';
import Error404 from '../Error404';
import EditProfileForm from '../../components/EditProfileForm';
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm';

export default function EditProfile() {
  const [editProfile, setEditProfile] = useState(false);
  const { auth, logout } = useAuth();

  const navigate = useNavigate();
  const client = useApolloClient();

  const onLogout = () => {
    client.clearStore();
    logout();
    navigate('/');
  };
  const handlerChangeProfile = (type) => {
    switch (type) {
      case 'editProfile':
        setEditProfile(true);

        break;
      case 'changePassword':
        setEditProfile(false);
        break;

      default:
        break;
    }
  };

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
        <ChangePasswordForm getUser={getUser} auth={auth} logout={onLogout} />
      )}
    </div>
  );
}
