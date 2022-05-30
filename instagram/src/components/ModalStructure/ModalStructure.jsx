import React from 'react';

export default function ModalStructure({ setShowModal, children, titleModal }) {
  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover "
      id="modal-id"
    >
      <div
        className="fixed bg-black opacity-80 inset-0 z-0"
        onClick={() => setShowModal(false)}
      ></div>
      <div
        className={
          titleModal === 'Publicar'
            ? 'w-full max-w-2xl p-2 absolute mx-auto my-auto rounded-xl shadow-lg  bg-white dark:bg-darktheme-body '
            : 'w-full max-w-lg p-2 absolute mx-auto my-auto rounded-xl shadow-lg  bg-white dark:bg-darktheme-body '
        }
      >
        {titleModal !== 'Publicar' && (
          <div className="text-center p-2 flex-auto justify-center">
            <h2 className="text-xl font-bold py-2  dark:text-white ">
              {titleModal}
            </h2>
            <p className="text-sm text-gray-500 px-8">
              {titleModal === 'getFollowers' || 'Following'
                ? ''
                : '¿Qué accion vas a realizar?'}
            </p>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
