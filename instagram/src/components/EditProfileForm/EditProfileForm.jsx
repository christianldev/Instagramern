import React from 'react';
import useAvatarForm from '../../hooks/useAvatarForm';

import ModalStructure from '../ModalStructure/ModalStructure';

import avatarNotFound from '../../assets/avatarnotfound.jpg';

export default function EditProfileForm({ auth, getUser }) {
  const { setShowModal, showModal, handlerModal, titleModal, childreModal } =
    useAvatarForm();

  return (
    <section className="w-full  dark:bg-darktheme-body py-4 px-6">
      <div
        className="justify-between items-center block md:flex"
        data-v-fecf18ac=""
      >
        <div className="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
          <ul data-v-fecf18ac="">
            <li
              className="title-stack-item inline-block pr-3 text-2xl text-gray-500 dark:text-gray-400 last:pr-0 last:font-black last:text-black "
              data-v-fecf18ac=""
            >
              Admin
            </li>
            <li
              className="title-stack-item inline-block pr-3 text-2xl text-gray-500 dark:text-gray-400 last:pr-0 last:font-black last:text-black "
              data-v-fecf18ac=""
            >
              Profile
            </li>
          </ul>
        </div>
      </div>
      <div className=" dark:bg-darktheme-body bg-white ">
        <div className="p-12">
          <div className="justify-around lg:justify-center items-center block md:flex">
            <div className="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
              <div className="lg:mx-8">
                <img
                  src={getUser.avatar ? getUser.avatar : avatarNotFound}
                  alt="John Doe"
                  className="rounded-full block h-40 w-40 dark:bg-gray-800 bg-gray-100"
                />
              </div>
            </div>
            <div className="flex shrink-0 grow-0 items-center justify-center">
              <div className="space-y-3 text-center md:text-left lg:mx-12 dark:text-gray-500">
                <h1 className="text-2xl">
                  <b>{auth.name}</b>!
                </h1>
                <p>
                  Last login <b>12 mins ago</b> from <b>127.0.0.1</b>
                </p>
                <div className="flex justify-center md:block">
                  <div className="inline-flex items-center last:mr-0 capitalize border py-2 px-4 rounded-2xl mr-3 bg-blue-600 text-white border-blue-700">
                    <span className="inline-flex justify-center items-center w-4 h-4 mr-2">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                        ></path>
                      </svg>
                    </span>
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="md:rounded border-gray-100 dark:bg-darktheme-navbar shadow-lg">
        <header className="border-gray-100 flex items-stretch border-b dark:border-gray-800">
          <p className="flex items-center py-3 grow font-bold px-4 text-gray-500">
            <span className="inline-flex justify-center items-center w-6 h-6 mr-3">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="inline-block "
              >
                <path
                  fill="currentColor"
                  d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
                ></path>
              </svg>
            </span>{' '}
            Edit Profile
          </p>
          <a
            href="#"
            className="flex items-center py-3 px-4 justify-center"
            aria-label="more options"
          >
            <span className="inline-flex justify-center items-center w-6 h-6">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="inline-block text-gray-500"
              >
                <path
                  fill="currentColor"
                  d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
                ></path>
              </svg>
            </span>
          </a>
        </header>
        <div className="p-6">
          <div className="mb-6 last:mb-0">
            <label className="block font-bold mb-2 text-gray-500">Avatar</label>

            <div className="flex items-stretch justify-start relative">
              <label
                className="inline-flex"
                onClick={() =>
                  getUser.username === auth.username && handlerModal('avatar')
                }
              >
                <button className="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded-lg ring-blue-500 p-2 bg-blue-500 text-white border-blue-600 hover:bg-blue-600">
                  <span className="inline-flex justify-center items-center w-6 h-6">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      className="inline-block"
                    >
                      <path
                        fill="currentColor"
                        d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"
                      ></path>
                    </svg>
                  </span>
                  <span className="px-2">Subir foto</span>
                </button>
                <input className="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1" />
              </label>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Max 500kb
            </div>
          </div>
          <div className="mb-6 last:mb-0">
            <label className="block font-bold mb-2 text-gray-500">Name</label>
            <div className="">
              <div className="relative">
                <input
                  name="username"
                  required=""
                  type="text"
                  className="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:text-gray-200 h-12 border bg-white dark:bg-gray-800 pl-10"
                />
                <span className="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-gray-400">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Required. Your name
            </div>
          </div>
          <div className="mb-6 last:mb-0">
            <label className="block font-bold mb-2 text-gray-500">E-mail</label>
            <div className="">
              <div className="relative">
                <input
                  name="email"
                  required=""
                  type="email"
                  className="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:text-gray-200 h-12 border bg-white dark:bg-gray-800 pl-10"
                />
                <span className="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-gray-400">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M17,17H7V15H17M17,13H7V11H17M20,9H17V6H20"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Required. Your e-mail
            </div>
          </div>
          <hr className="border-gray-100 my-6 -mx-6 dark:border-gray-800 border-t" />
          <div className="flex items-center justify-start flex-wrap -mb-3">
            <button
              className="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-500 p-2 bg-blue-500 text-white border-blue-500 hover:bg-blue-600 mr-3 last:mr-0 mb-3"
              type="submit"
            >
              <span className="px-2">Guardar</span>
            </button>
          </div>
        </div>
      </form>
      {showModal ? (
        <ModalStructure
          showModal={showModal}
          setShowModal={setShowModal}
          titleModal={titleModal}
        >
          {childreModal}
        </ModalStructure>
      ) : null}
    </section>
  );
}
