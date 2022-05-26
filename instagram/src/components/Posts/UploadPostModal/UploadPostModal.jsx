import React, { useCallback, useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';

export default function UploadPostModal({ setShowModal, auth }) {
  const [fileUpload, setFileUpload] = useState(null);
  const [loadingNewPost, setLoadingNewPost] = useState(false);

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];

    setFileUpload({
      type: 'image',
      file,
      preview: URL.createObjectURL(file),
    });
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

  return (
    <div className="relative w-full flex items-center justify-center">
      <div className=" w-full p-8 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-2 text-xl font-bold text-gray-900">
            Agregar publicación
          </h2>
        </div>
        <form className="mt-2 space-y-3">
          {fileUpload?.type === 'image' && (
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Titulo
              </label>
              <input
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="mail@gmail.com"
              />
            </div>
          )}

          <div class="mx-auto py-2 max-w-5xl">
            <div
              {...getRootProps()}
              className="flex flex-col items-center py-4 px-6 rounded-md border-2 border-dashed cursor-pointer w-full"
              style={fileUpload && { border: 0 }}
            >
              {fileUpload?.type === 'image' ? (
                <img
                  src={fileUpload.preview}
                  alt="preview"
                  className="w-2/3 h-2/3 object-cover"
                />
              ) : (
                <>
                  <svg
                    class="w-12 h-12 text-gray-500"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>

                  <p class="text-xl text-gray-700">
                    Arrastra una imagen o selecciona
                  </p>

                  <p class="text-xs text-gray-600 mt-4">Tamaño maximo: 6MB</p>
                  <p className="text-sm text-gray-400">
                    <span>Tipo de archivo: jpg, jpeg, png</span>
                  </p>
                </>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="my-2 w-full flex justify-center bg-blue-500 text-gray-100 p-2  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Publicar
          </button>
          <button
            onClick={() => setShowModal(false)}
            type="submit"
            className="my-2 w-full flex justify-center bg-red-500 text-gray-100 p-2  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Cancelar
          </button>
          <input {...getInputProps()} />
        </form>
      </div>
    </div>
  );
}
