import React, { useState } from 'react';

import { FaFacebookSquare, FaGooglePlay, FaApple } from 'react-icons/fa';
import './Auth.css';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

import { InstagramLogo } from '../../components/InstagramLogo/InstagramLogo';

export default function Auth() {
  const [loginForm, setLoginForm] = useState(true);

  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div className="bg__auth lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="logo__font text-5xl font-bold text-left tracking-wide">
            Instagram
          </h1>
          <p className="text-3xl my-4">
            Captura tu memoria personal de forma única, en cualquier lugar.
          </p>
        </div>
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
          <a
            href="#"
            className="w-full sm:w-auto bg-darktheme-900 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <FaApple className="mr-3 w-7 h-7" />

            <div className="text-left">
              <div className="mb-1 text-xs">Download on the</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Mac App Store
              </div>
            </div>
          </a>
          <a
            href="#"
            className="w-full sm:w-auto bg-darktheme-900  hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <FaGooglePlay className="mr-3 w-7 h-7" />

            <div className="text-left">
              <div className="mb-1 text-xs">Get in on</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Google Play
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: '#161616' }}
      >
        <div className="bg__auth absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <InstagramLogo />
          {loginForm && (
            <div className="py-6 space-x-2">
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 rounded-md group bg-blue-500 focus:outline-none"
              >
                <span>
                  <FaFacebookSquare className="text-gray-200 " />
                </span>
                <span className="text-sm font-medium text-gray-200 ">
                  Inicia sesion con Facebook
                </span>
              </a>
            </div>
          )}
          {loginForm && <p className="text-gray-100">o usa tu cuenta</p>}
          {loginForm ? (
            <LoginForm loginForm={loginForm} setLoginForm={setLoginForm} />
          ) : (
            <RegisterForm loginForm={loginForm} setLoginForm={setLoginForm} />
          )}
        </div>
      </div>
    </section>
  );
}
