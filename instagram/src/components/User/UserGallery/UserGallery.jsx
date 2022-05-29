import React, { useEffect } from 'react';

import './UserGallery.css';

export const LoadingPublications = () => {
  return (
    <main className="flex justify-center items-center container py-12">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-indigo-600 animate-spin"
      >
        <path
          opacity=".05"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 19a7.001 7.001 0 0 0 4.95-11.95A7 7 0 1 0 12 19Zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
          fill="#000"
        ></path>
        <path
          d="M3.5 12c-.828 0-1.512-.675-1.389-1.495a10.007 10.007 0 0 1 8.394-8.394C11.325 1.988 12 2.671 12 3.5c0 .828-.68 1.484-1.489 1.66a7 7 0 0 0-5.35 5.351C4.983 11.321 4.327 12 3.5 12Z"
          fill="currentColor"
        ></path>
      </svg>
    </main>
  );
};

export default function UserGallery({
  dataPublications,
  loadingPublications,
  errorPublications,
}) {
  const [changeGridImage, setChangeGridImage] = React.useState(false);

  useEffect(() => {
    setChangeGridImage(true);
  }, []);

  const handleChangeGridImage = () => {
    if (changeGridImage) {
      setChangeGridImage(false);
    } else {
      setChangeGridImage(true);
    }
  };

  if (loadingPublications) {
    return <LoadingPublications />;
  }
  if (errorPublications)
    return (
      <main className="flex justify-center items-center container">
        Error al cargar las publicaciones
      </main>
    );
  const { getPublications } = dataPublications;

  return (
    <section className="w-full  dark:bg-darktheme-body py-4 px-6">
      <div className="rounded-xl pt-2  ">
        <main className=" py-2 px-4 mx-auto max-w-7xl">
          <div className="flex flex-col  md:flex-row sm-flex-row items-center justify-between space-y-6 md:space-y-0 pt-4">
            <ul className="flex gap-x-8">
              <li href="#" className="text-lg text-gray-400  font-medium">
                Popular
              </li>

              <li href="#" className="text-lg text-gray-400">
                Recent
              </li>
            </ul>

            <button
              onClick={handleChangeGridImage}
              className={
                changeGridImage
                  ? 'grid-list without-text animation hidden lg:flex md:flex'
                  : 'grid-list without-text animation active hidden lg:flex md:flex'
              }
            >
              <div className="icon">
                <div className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <div className="lines">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
            </button>
          </div>
          {getPublications.length === 0 && (
            <div className="flex justify-center container items-center py-12">
              <p className="text-center text-gray-500 text-xl">
                No hay publicaciones
              </p>
            </div>
          )}
          <div
            className={
              changeGridImage
                ? 'gap-6 pt-2 columns-1 sm:columns-2 md:col-span-2  lg:columns-2'
                : 'gap-6 pt-2 columns-1 sm:columns-2 md:col-span-2  lg:columns-3'
            }
          >
            {getPublications.map((post) => (
              <figure key={post.id} className="py-4 [break-inside:avoid]">
                <img
                  className="rounded-md  h-80 object-cover w-full cursor-pointer"
                  src={post.file}
                  alt="row of four men sitting on mountain trail"
                />
              </figure>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
