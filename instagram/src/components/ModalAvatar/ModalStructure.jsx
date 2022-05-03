import React from 'react';

export default function ModalStructure({
  showModal,
  setShowModal,
  children,
  titleModal,
}) {
  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div
        className="absolute bg-black opacity-80 inset-0 z-0"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white dark:bg-darktheme-body ">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center">
            <h2 className="text-xl font-bold py-4  dark:text-white ">
              {titleModal}
            </h2>
            <p className="text-sm text-gray-500 px-8">
              ¿Qué accion vas a realizar?
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
