import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { get, size } from 'lodash';

import { FaCircleNotch, FaSearch } from 'react-icons/fa';
import { SEARCH_USER } from '../../gql/user';
import './Search.css';
import avatarNotFound from '../../assets/avatarnotfound.jpg';
import { Link } from 'react-router-dom';

export default function Search({ handleSearch, inputSearch }) {
  const [searchUsers, setSearch] = useState(null);
  const [results, setResults] = useState([]);

  const { data, loading } = useQuery(SEARCH_USER, {
    variables: { search: searchUsers },
  });

  useEffect(() => {
    if (size(data?.searchUsers) > 0) {
      const users = [];
      [...data.searchUsers].forEach((user) => {
        users.push(user);
      });
      setResults(users);
    } else {
      setResults([]);
    }
  }, [data]);

  const handleSearchChange = (e) => {
    e.target.value ? setSearch(e.target.value) : setSearch(null);
  };

  return (
    <>
      <li>
        <a
          onClick={handleSearch}
          className="block text-lg py-2 pr-2 pl-2 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 cursor-pointer"
        >
          {!inputSearch && <FaSearch />}
        </a>
      </li>
      {inputSearch ? (
        <div className="w-1/2 lg:w-full flex justify-center items-center h-64">
          <div className="flex flex-col items-center relative">
            <div className="relative text-gray-600">
              <input
                type={'search'}
                name="search"
                placeholder="Search"
                onChange={handleSearchChange}
                value={searchUsers || ''}
                className="bg-gray-200 dark:bg-gray-800 h-10 px-5 pr-10 rounded-full text-sm text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              >
                {loading ? (
                  <FaCircleNotch className="animate-spin" />
                ) : (
                  <FaSearch />
                )}
              </button>
            </div>
            {searchUsers && (
              <div className="absolute shadow bg-white dark:bg-darktheme-navbar border-gray-400 top-14 z-20 left-0 w-full rounded  max-h-select dropdown">
                <div className="flex flex-col dropdown-menu">
                  <div className="cursor-pointer rounded-t overflow-y-scroll overflow-auto">
                    {!results.length && (
                      <div className="flex w-full justify-center items-center p-2  border-transparent border-l-2 relative ">
                        <p className=" justify-center text-center text-gray-500 items-center">
                          No hay resultados
                        </p>
                      </div>
                    )}

                    {results.length > 0 &&
                      results.map((user) => (
                        <Link
                          to={`/${user.username}`}
                          onClick={() => setSearch(null)}
                          key={user.id}
                          className="flex w-full items-center p-2  border-transparent border-l-2 relative hover:border-blue-600 dark:hover:bg-gray-800"
                        >
                          <div className="w-6 flex flex-col items-center">
                            <div className="flex relative w-6 h-6 object-cover bg-orange-500 justify-center items-center m-1 mr-2  mt-1 rounded-full ">
                              <img
                                className="rounded-full"
                                alt="perfilAvatar"
                                src={user.avatar || avatarNotFound}
                              />
                            </div>
                          </div>
                          <div className="w-full items-center flex">
                            <div className="mx-2 -mt-1 text-gray-500">
                              @{user.username}
                              <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                                {user.name}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
