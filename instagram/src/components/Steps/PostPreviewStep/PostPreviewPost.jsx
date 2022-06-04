import React from 'react';

export default function PostPreviewPost({ fileUpload }) {
  return (
    <div className="flex flex-col w-full [break-inside:avoid] justify-center items-center bg-black">
      {fileUpload?.type === 'image' ? (
        <img
          src={fileUpload.preview}
          alt="previewPost"
          className="object-scale-down h-96 w-full"
        />
      ) : (
        <div className="flex flex-col justify-center items-center p-8">
          <h2>No hay imagen</h2>
        </div>
      )}
    </div>
  );
}
