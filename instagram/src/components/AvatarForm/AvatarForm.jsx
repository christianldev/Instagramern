import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/client';
import { UPDATE_AVATAR } from '../../gql/user';

export default function AvatarForm({ setShowModal }) {
  const [updateAvatar] = useMutation(UPDATE_AVATAR);

  const onDropFile = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    try {
      const result = await updateAvatar({ variables: { file } });
      console.log(result);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    noKeyboard: true,
    multiple: false,
    onDrop: onDropFile,
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
