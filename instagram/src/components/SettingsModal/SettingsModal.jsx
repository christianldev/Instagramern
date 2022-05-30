import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useApolloClient } from '@apollo/client';
import { decodeToken } from '../../utils/token';

export default function SettingsModal({ setShowModal }) {
  const { logout } = useAuth();

  const client = useApolloClient();
  const navigate = useNavigate();

  const onLogout = () => {
    client.clearStore();
    // remove token when expired
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      if (token) {
        const decoded = decodeToken(token);
        if (decoded.exp * 1000 < Date.now()) {
          logout();
          navigate('/');
        }
      }
    }

    logout();
    navigate('/');
  };

  return (
    <div className="relative p-2 w-full max-w-lg h-full md:h-auto">
      <div className="relative bg-white  dark:bg-darktheme-body">
        <div className="p-2">
          <ul className=" space-y-3">
            <li>
              <Link
                to="/account/edit"
                className="flex items-center p-3 text-sm font-bold
                 bg-blue-500 dark:bg-gray-800 rounded-lg hover:bg-blue-600 group
                hover:shadow dark:hover:bg-gray-700 text-white cursor-pointer"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Editar perfil
                </span>
              </Link>
            </li>

            <li>
              <a
                onClick={onLogout}
                className="flex items-center p-3 text-sm font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 group hover:shadow  dark:hover:bg-red-600 dark:text-white cursor-pointer"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Cerrar Sesion
                </span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowModal(false)}
                className="flex items-center p-3 text-sm font-bold
                 bg-blue-500 dark:bg-gray-800 rounded-lg hover:bg-blue-600 group
                hover:shadow dark:hover:bg-gray-700 text-white cursor-pointer"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Cancelar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
