import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useApolloClient } from '@apollo/client';

export default function SettingsModal({ setShowModal }) {
  const { logout } = useAuth();

  const client = useApolloClient();
  const navigate = useNavigate();

  const onLogout = () => {
    client.clearStore();
    logout();
    navigate('/');
  };

  return (
    <div className="relative p-2 w-full max-w-md h-full md:h-auto">
      <div className="relative bg-white rounded-lg shadow dark:bg-darktheme-body">
        <div className="p-2">
          <ul className=" space-y-3">
            <li>
              <a
                className="flex items-center p-3 text-base font-bold
                text-gray-900 bg-gray-800 rounded-lg hover:bg-gray-100 group
                hover:shadow dark:hover:bg-gray-700 dark:text-white cursor-pointer"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-base font-bold
                text-gray-900 bg-gray-800 rounded-lg hover:bg-gray-100 group
                hover:shadow dark:hover:bg-gray-700 dark:text-white cursor-pointer"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Coinbase Wallet
                </span>
              </a>
            </li>

            <li>
              <a
                onClick={onLogout}
                className="flex items-center p-3 text-base font-bold text-gray-900 bg-red-500 rounded-lg hover:bg-gray-100 group hover:shadow  dark:hover:bg-red-600 dark:text-white cursor-pointer"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Cerrar Sesion
                </span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowModal(false)}
                className="flex items-center p-3 text-base font-bold
                text-gray-900 bg-gray-800 rounded-lg hover:bg-gray-100 group
                hover:shadow dark:hover:bg-gray-700 dark:text-white cursor-pointer"
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
