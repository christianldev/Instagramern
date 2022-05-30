import React, { useEffect } from 'react';

import FollowersModal from '../components/User/FollowersModal';
import SettingsModal from '../components/SettingsModal';
import AvatarForm from '../components/User/AvatarForm';
import useAuth from './useAuth';
import FollowingModal from '../components/User/FollowingModal';
import UploadPostModal from '../components/Posts/UploadPostModal/UploadPostModal';
import ModalPost from '../components/Posts/ModalPost';

export default function useModalForm() {
  const [showModal, setShowModal] = React.useState(false);
  const [titleModal, setTitleModal] = React.useState('');
  const [childreModal, setChildreModal] = React.useState(null);
  const [publication, setPublication] = React.useState([{}]);

  const { auth } = useAuth();

  const handlerModal = (type) => {
    switch (type) {
      case 'avatar':
        setTitleModal('Editar foto de perfil');
        setChildreModal(<AvatarForm setShowModal={setShowModal} auth={auth} />);
        setShowModal(true);
        break;
      case 'editProfile':
        setTitleModal('Editar perfil');
        setChildreModal(
          <SettingsModal setShowModal={setShowModal} auth={auth} />,
        );
        setShowModal(true);
        break;

      case 'getFollowers':
        setTitleModal('Seguidores');
        setChildreModal(
          <FollowersModal setShowModal={setShowModal} auth={auth} />,
        );
        setShowModal(true);
        break;

      case 'getFollowing':
        setTitleModal('Seguidos');
        setChildreModal(
          <FollowingModal setShowModal={setShowModal} auth={auth} />,
        );
        setShowModal(true);
        break;

      case 'uploadPost':
        setTitleModal('Publicar');
        setChildreModal(
          <UploadPostModal setShowModal={setShowModal} auth={auth} />,
        );
        setShowModal(true);
        break;

      case 'viewPost':
        setTitleModal('Publicacion');
        setChildreModal(
          <ModalPost
            setShowModal={setShowModal}
            auth={auth}
            publication={publication}
          />,
        );
        setShowModal(true);

      default:
        break;
    }
  };

  return {
    showModal,
    titleModal,
    childreModal,
    handlerModal,
    setShowModal,
    auth,
    setPublication,
  };
}
