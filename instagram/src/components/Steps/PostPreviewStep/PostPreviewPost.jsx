import React from 'react';

export default function PostPreviewPost({ fileUpload }) {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      {/* {fileUpload?.type === 'image' && (
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
        )} */}

      {fileUpload?.type === 'image' ? (
        <img
          src={fileUpload.preview}
          alt="preview"
          className="w-full h-4/5 object-cover "
        />
      ) : (
        <div className="flex flex-col justify-center items-center p-8">
          <h2>No hay imagen</h2>
        </div>
      )}
    </div>
  );
}
