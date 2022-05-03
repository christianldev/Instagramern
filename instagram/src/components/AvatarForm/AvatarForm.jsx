import React from 'react';

export default function AvatarForm({ showModal, setShowModal }) {
  return (
    <div className="p-3  mt-2 text-center space-x-4 md:block">
      <button
        onClick={() => setShowModal(false)}
        className="mb-2 md:mb-0 bg-white  px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
      >
        Salir
      </button>
      <button className="mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600">
        Subir foto
      </button>
      <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
        Eliminar foto
      </button>
    </div>
  );
}
