import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/client';
import { UPDATE_AVATAR, DELETE_AVATAR, GET__USER } from '../../../gql/user';

import './AvatarForm.css';
import toast from 'react-hot-toast';

export default function AvatarForm({ setShowModal, auth }) {
  const [loading, setLoading] = useState(false);

  const [updateAvatar] = useMutation(UPDATE_AVATAR, {
    update(cache, { data: { updateAvatar } }) {
      const { getUser } = cache.readQuery({
        query: GET__USER,
        variables: { username: auth.username },
      });

      cache.writeQuery({
        query: GET__USER,
        variables: { username: auth.username },
        data: {
          getUser: { ...getUser, avatar: updateAvatar.urlAvatar },
        },
      });
    },
  });

  const [deleteAvatar] = useMutation(DELETE_AVATAR, {
    update(cache, { data: { deleteAvatar } }) {
      const { getUser } = cache.readQuery({
        query: GET__USER,
        variables: { username: auth.username },
      });

      cache.writeQuery({
        query: GET__USER,
        variables: { username: auth.username },
        data: {
          getUser: { ...getUser, avatar: '' },
        },
      });
    },
  });

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];

    try {
      setLoading(true);
      const result = await updateAvatar({ variables: { file } });

      const { data } = result;

      if (!data.updateAvatar.status) {
        toast.warning('Error al actualizar el avatar');
        setLoading(false);
      } else {
        setLoading(false);
        setShowModal(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    noKeyboard: false,
    multiple: false,
    onDrop,
  });

  const onDelete = async () => {
    try {
      const result = await deleteAvatar();
      const { data } = result;
      if (!data.deleteAvatar) {
        toast.error('Error a eliminar la foto de perfil', {
          position: 'top-right',
        });
      } else {
        setShowModal(false);
      }
    } catch (error) {
      toast.error('Error a eliminar la foto de perfil', {
        position: 'top-right',
      });
    }
  };

  return (
    <div className="p-3 mt-2 text-center space-x-4 md:block">
      <button
        onClick={() => setShowModal(false)}
        className="mb-2 md:mb-0 bg-white  px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
      >
        Salir
      </button>
      <button
        {...getRootProps()}
        loading={loading ? 1 : 0}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      >
        {loading ? (
          <svg
            role="status"
            className="inline w-4 h-4 mr-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          ''
        )}

        {loading ? 'Subiendo...' : 'Subir Foto'}
      </button>

      <button
        onClick={onDelete}
        className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
      >
        Eliminar foto
      </button>

      <input {...getInputProps()} />
    </div>
  );
}
