import React from 'react';

import { FaSearch } from 'react-icons/fa';
import './Search.css';

export default function Search({ handleSearch, searchUsers }) {
  return (
    <>
      <li>
        <a
          onClick={handleSearch}
          className="block text-lg py-2 pr-2 pl-2 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 cursor-pointer"
        >
          {!searchUsers && <FaSearch />}
        </a>
      </li>
      {searchUsers ? (
        <div class="pt-2 relative mx-auto text-gray-600">
          <input
            class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            <FaSearch />
          </button>
        </div>
      ) : null}
    </>
  );
}
