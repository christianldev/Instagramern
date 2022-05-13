import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import './Search.css';

export default function Search({ handleSearch, inputSearch }) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
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
        <div class="w-1/2 lg:w-full flex justify-center items-center h-64">
          <div class="flex flex-col items-center relative">
            <div class="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search"
                value={search}
                onChange={handleChange}
                class="bg-gray-200 dark:bg-gray-800 h-10 px-5 pr-10 rounded-full text-sm text-gray-400 focus:outline-none"
              />
              <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                <FaSearch />
              </button>
            </div>
            {search != '' && (
              <div class="absolute shadow bg-white dark:bg-darktheme-navbar border-gray-400 top-14 z-20 left-0 w-full rounded  max-h-select dropdown">
                <div class="flex flex-col dropdown-menu">
                  <div class="cursor-pointer rounded-t">
                    <div class="flex w-full items-center p-2  border-transparent border-l-2 relative hover:border-blue-600 dark:hover:bg-gray-800">
                      <div class="w-6 flex flex-col items-center">
                        <div class="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2  mt-1 rounded-full ">
                          <img
                            class="rounded-full"
                            alt="A"
                            src="https://randomuser.me/api/portraits/men/62.jpg"
                          />{' '}
                        </div>
                      </div>
                      <div class="w-full items-center flex">
                        <div class="mx-2 -mt-1 text-gray-500">
                          Jack jhon
                          <div class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                            CEO &amp; managin director
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="cursor-pointer w-full">
                    <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-blue-600 dark:hover:bg-gray-800">
                      <div class="w-6 flex flex-col items-center">
                        <div class="flex relative  bg-orange-500 justify-center items-center m-1 mr-2 w-5 h-5 mt-1 rounded-full ">
                          <img
                            class="rounded-full"
                            alt="A"
                            src="https://randomuser.me/api/portraits/men/65.jpg"
                          />{' '}
                        </div>
                      </div>
                      <div class="w-full items-center flex">
                        <div class="mx-2 -mt-1 w-1/ text-gray-500 ">
                          Brian White
                          <div class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                            CTO &amp; technical manager
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cursor-pointer w-full border-gray-100 rounded-b  dark:hover:bg-gray-800">
                    <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-blue-600">
                      <div class="w-6 flex flex-col items-center">
                        <div class="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2  mt-1 rounded-full ">
                          <img
                            class="rounded-full"
                            alt="A"
                            src="https://randomuser.me/api/portraits/men/85.jpg"
                          />{' '}
                        </div>
                      </div>
                      <div class="w-full items-center flex">
                        <div class="mx-2 -mt-1 text-gray-500">
                          Eric Dripper
                          <div class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                            CMO &amp; marketing manager
                          </div>
                        </div>
                      </div>
                    </div>
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
