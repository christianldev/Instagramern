import React, { useState } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { Form, useField, Formik } from 'formik';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { validationSchemaLogin } from '../../helpers/validationSchema';

import { LOGIN } from '../../gql/user';
import { useMutation } from '@apollo/client';
import { setToken, decodeToken } from '../../utils/token';

import useAuth from '../../hooks/useAuth';

export const LoginForm = ({ loginForm, setLoginForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, seterror] = useState('');
  const [login] = useMutation(LOGIN);

  const { setUser } = useAuth();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchemaLogin}
      onSubmit={async (values) => {
        seterror('');
        try {
          const { data } = await login({
            variables: {
              input: values,
            },
          });
          const { token } = data.login;
          setToken(token);
          setUser(decodeToken(token));
        } catch (error) {
          seterror(error.message);
        }
      }}
    >
      {(formik) => (
        <Form
          onSubmit={formik.handleSubmit}
          className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
        >
          <div className="pb-2 pt-4">
            <TextInput
              useField={useField}
              type="email"
              name="email"
              label="Correo electronico"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative pb-4 pt-4">
            <TextInput
              useField={useField}
              type={showPassword ? 'text' : 'password'}
              name="password"
              label="Contraseña"
              autoComplete="off"
              value={formik.values.password}
              onChange={formik.handleChange}
            />

            <div
              onClick={handleShowPassword}
              className={
                'absolute inset-y-0 right-0 pr-3 p-12 block text-sm leading-5 cursor-pointer'
              }
            >
              {showPassword ? (
                <FaRegEye
                  className={'text-gray-500  flex justify-center items-center'}
                />
              ) : (
                <FaRegEyeSlash
                  className={'text-gray-500  flex justify-center items-center'}
                />
              )}
            </div>
          </div>
          <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
            <a href="#" className="text-sm">
              Olvidaste tu constraseña?
            </a>
          </div>
          <p className="text-center text-red-500 text-xs">{error}</p>
          <div type="submit" className="relative inline-flex group w-full mt-5">
            <div
              className={
                formik.isValid && formik.dirty
                  ? 'absolute transitiona-all duration-1000 opacity-60 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter  group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200'
                  : 'absolute'
              }
            ></div>{' '}
            <button
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              className={
                formik.isValid && formik.dirty
                  ? ' w-full relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all duration-200 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer'
                  : '  w-full relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-md focus:outline-none  disabled:opacity-60 disabled:hover:bg-gray-900'
              }
            >
              Iniciar sesion
            </button>
          </div>
          <div className="flex mt-7 items-center text-center">
            {loginForm ? (
              <label className="block font-medium text-sm text-gray-400 w-full cursor-pointer hover:text-white">
                No tienes una cuenta?{' '}
                <a
                  href="#"
                  onClick={() => setLoginForm(!loginForm)}
                  className="hover:underline"
                >
                  Registrate
                </a>
              </label>
            ) : (
              <label className="block font-medium text-sm text-gray-400 w-full  cursor-pointer hover:text-white">
                Tienes una cuenta?{' '}
                <a
                  href="#"
                  onClick={() => setLoginForm(!loginForm)}
                  className="hover:underline"
                >
                  Inicia sesion
                </a>
              </label>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};
