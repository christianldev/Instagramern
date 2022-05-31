import React, { useEffect } from 'react';
import LikeButton from '../../../components/LikeButton';
import { FaRegComment } from 'react-icons/fa';

export default function ModalPost({ publication }) {
  // convert string to int
  const date = parseInt(publication.createAt);
  const dateFormat = new Date(date);
  // get hours and minutes from date
  const hours = dateFormat.getHours();
  const minutes = dateFormat.getMinutes();
  // get day and month from date
  const day = dateFormat.getDate();
  const month = dateFormat.getMonth() + 1;

  const time = `${hours}:${minutes}`;
  const datePost = `${day}/${month}`;

  return (
    <div className="bg-white dark:bg-darktheme-body overflow-hidden shadow-none">
      <div className="grid grid-cols-3 min-w-full">
        <div className="col-span-2 w-full">
          <img
            className="w-full max-w-full min-w-full rounded-xl"
            src={publication.file}
            alt="Description"
          />
        </div>

        <div className="col-span-1 relative pl-4">
          <header className="border-b border-grey-400">
            <a className="cursor-pointer py-4 flex items-center text-sm outline-none focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                className="h-9 w-9 rounded-full object-cover"
                alt="user"
              />
              <p className="block ml-2 font-bold">Paul</p>
            </a>
          </header>

          <div>
            <div className="pt-1">
              <div className="text-sm mb-2 flex flex-start items-center">
                <div>
                  <a
                    href="#"
                    className="cursor-pointer flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src="https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt="user"
                    />
                  </a>
                </div>
                <p className="font-bold ml-2">
                  <a className="cursor-pointer">Joshua:</a>
                  <span className="text-gray-500 font-medium ml-1">
                    Good post
                  </span>
                </p>
              </div>
            </div>
            <div className="text-sm mb-2 flex flex-start items-center">
              <div>
                <a
                  href="#"
                  className="cursor-pointer flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src="https://images.pexels.com/photos/3861456/pexels-photo-3861456.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt="user"
                  />
                </a>
              </div>
              <p className="font-bold ml-2">
                <a className="cursor-pointer">Kesha:</a>
                <span className="text-gray-500 font-medium ml-1">
                  This is amazing
                </span>
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 pl-4">
            <div className="pt-4">
              <div className="mb-2">
                <div className="flex items-center">
                  <span className="mr-3 inline-flex items-center cursor-pointer">
                    <LikeButton />
                  </span>
                  <span className="mr-3 inline-flex items-center cursor-pointer">
                    <FaRegComment className="m-1 cursor-pointer transform hover:scale-105 text-gray-400" />
                  </span>
                </div>
              </div>
              <span className="block ml-2 text-xs text-gray-600">
                Publicado {datePost} {time}
              </span>
            </div>

            <div className="pt-4 pb-1 pr-3">
              <div className="flex items-start">
                <textarea
                  className="w-full resize-none outline-none appearance-none bg-darktheme-navbar rounded-lg p-2"
                  aria-label="Agrega un comentario..."
                  placeholder="Agrega un comentario..."
                  autoComplete="off"
                  autoCorrect="off"
                  style={{ height: '36px' }}
                ></textarea>
                <button className="mb-2 focus:outline-none border-none bg-transparent text-blue-600">
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
