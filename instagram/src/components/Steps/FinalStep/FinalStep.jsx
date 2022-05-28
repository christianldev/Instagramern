import React from 'react';

import { FaCheckCircle } from 'react-icons/fa';

export default function FinalStep({ setShowModal }) {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <FaCheckCircle className="w-10 h-10 text-green-500" />
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Nuevo post
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Tu publicacion ha sido creada con exito
        </div>

        <div onClick={() => setShowModal(false)} className="mt-10">
          <button className="h-10  px-5 text-blue-600 transition-colors duration-150 border border-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-500 hover:text-green-100">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
