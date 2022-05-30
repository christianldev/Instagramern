import React, { useEffect, useState } from 'react';
import useModalForm from '../../../hooks/useModalForm';
import LoadingData from '../../LoadingData';

import PreviewPost from '../../Posts/PreviewPost';

import './UserGallery.css';

export default function UserGallery({
  dataPublications,
  loadingPublications,
  errorPublications,
}) {
  const [changeGridImage, setChangeGridImage] = useState(false);

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
    return <LoadingData />;
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
              <PreviewPost key={post.id} post={post} />
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
