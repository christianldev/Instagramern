import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { PUBLISH_POST } from '../../../gql/post';

import toast from 'react-hot-toast';

export default function StepperControl({
  handleClick,
  currentStep,
  steps,
  getRootProps,
  getInputProps,
  error,
  fileUpload,
  setShowModal,
}) {
  const [loadingUploadPost, setLoadingUploadPost] = useState(false);
  const [publish] = useMutation(PUBLISH_POST);

  // automatic step whem the user uploads an image
  useEffect(() => {
    if (fileUpload?.type === 'image') {
      handleClick('next');
    }
  }, [fileUpload]);

  const onPublishPost = async () => {
    setLoadingUploadPost(true);
    try {
      const result = await publish({
        variables: {
          file: fileUpload.file,
        },
      });

      if (result.data.publish.status) {
        setLoadingUploadPost(false);
        handleClick('next');
      } else {
        toast.error('No se pudo publicar el post');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <span className="flex justify-center  items-center text-gray-500 text-xs">
        {error && <span className="text-red-600 text-sm">{error}</span>}
      </span>
      <div className="container mt-2 mb-2 flex justify-around">
        <button
          onClick={() => handleClick('back')}
          className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-2 font-semibold  text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
            currentStep === 1 ? ' cursor-not-allowed opacity-50 ' : ''
          }`}
        >
          Atras
        </button>
        <button
          onClick={() => setShowModal(false)}
          type="submit"
          className="cursor-pointer rounded-lg bg-red-500 py-2 px-2 font-semibold  text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
        >
          Cancelar
        </button>

        {loadingUploadPost ? (
          <button className="cursor-pointer rounded-lg bg-blue-500 py-2 px-2 font-semibold  text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
            {currentStep === steps.length - 1 &&
              fileUpload &&
              loadingUploadPost &&
              'Publicando...'}
          </button>
        ) : (
          <button
            {...getRootProps()}
            onClick={() =>
              currentStep === steps.length - 1 && fileUpload
                ? onPublishPost()
                : handleClick('next')
            }
            className="cursor-pointer rounded-lg bg-blue-500 py-2 px-2 font-semibold  text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
          >
            {currentStep === steps.length - 1 && fileUpload
              ? 'Publicar'
              : 'Siguiente'}
          </button>
        )}

        <input {...getInputProps()} />
      </div>
    </>
  );
}
