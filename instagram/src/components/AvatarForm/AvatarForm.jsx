import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/client';
import { UPDATE_AVATAR, GET__USER } from '../../gql/user';

import { toast } from 'react-toastify';

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
      console.log(error);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  return (
    <div className="p-3  mt-2 text-center space-x-4 md:block">
      <button
        onClick={() => setShowModal(false)}
        className="mb-2 md:mb-0 bg-white  px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
      >
        Salir
      </button>
      <button
        {...getRootProps()}
        className="mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600"
      >
        Subir foto
      </button>
      <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
        Eliminar foto
      </button>
      <input {...getInputProps()} />
    </div>
  );
}
