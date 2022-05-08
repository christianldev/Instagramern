import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

export default function Error404() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center dark:bg-darktheme-body">
      <h1 className="text-9xl font-extrabold text-gray-400 tracking-widest">
        404
      </h1>
      <div className="bg-blue-500 text-gray-200 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link
          to="/"
          className="relative inline-block text-sm font-medium text-blue-600 group active:text-blue-600 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-gray-500 dark:bg-gray-800 text-gray-200 border border-current">
            Volver a inicio
          </span>
        </Link>
      </button>
    </main>
  );
}
