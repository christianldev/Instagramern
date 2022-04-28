import React from 'react';

import './Profile.css';

export default function Profile() {
  return (
    <aside className="dark:bg-darktheme-body w-1/3 py-10 pl-4  min-w-min   border-r border-indigo-900/20 hidden md:block ">
      <div class="shadow rounded-lg p-2">
        <div class="flex flex-col gap-1 text-center items-center">
          <span className=" rounded-full bg-gradient-to-r from-purple-800  to-blue-800">
            <img
              class="h-32 w-32 p-2 rounded-full shadow"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"
              alt=""
            />
          </span>
          <p class="text-gray-200 font-semibold">John Doe</p>
          <div class="text-sm leading-normal text-gray-400 flex justify-center items-center">
            <svg
              viewBox="0 0 24 24"
              class="mr-1"
              width="16"
              height="16"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Los Angeles, California
          </div>
        </div>
        <div class="flex flex-nowrap __profile justify-center items-center gap-2 my-3">
          <div class="font-semibold text-center mx-4">
            <p class="text-gray-200">102</p>
            <span class="text-gray-400">Posts</span>
          </div>
          <div class="font-semibold text-center mx-4">
            <p class="text-gray-200">102</p>
            <span class="text-gray-400">Followers</span>
          </div>
          <div class="font-semibold text-center mx-4">
            <p class="text-gray-200">102</p>
            <span class="text-gray-400">Folowing</span>
          </div>
        </div>
        <div class="font-semibold text-center mx-4">
          <button class="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">
            Follow
          </button>
        </div>
      </div>

      <article class="flex flex-col p-4 text-gray-500 justify-center items-center rounded-lg shadow-lg ">
        <h4 className="font-bold">Biografia</h4>
        <p className=" text-center text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          neque eos vero alias voluptatibus eius ratione vel? Nemo consequuntur
        </p>
      </article>

      <div className="mt-0 flex flex-col space-y-7 text-gray-500 font-medium">
        <a className=" flex items-center p-0 lg:p-4" href="#">
          <div class=" shadow mt-4 rounded-lg p-2">
            <h3 class="text-gray-600 text-sm font-semibold mb-4">Following</h3>
            <ul class="flex items-center justify-center space-x-2">
              <li class="flex flex-col items-center space-y-2">
                <a class="block bg-white p-1 rounded-full" href="#">
                  <img
                    class="w-20 lg:w-16 md:w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
                  />
                </a>

                <span class="text-xs text-gray-500">Sage</span>
              </li>

              <li class="flex flex-col items-center space-y-2">
                <a class="block bg-white p-1 rounded-full" href="#">
                  <img
                    class="w-20 lg:w-16 md:w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
                  />
                </a>

                <span class="text-xs text-gray-500">Jett</span>
              </li>

              <li class="flex flex-col items-center space-y-2">
                <a class="block bg-white p-1 rounded-full" href="#">
                  <img
                    class="w-20 lg:w-16 md:w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
                  />
                </a>

                <span class="text-xs text-gray-500">Sky</span>
              </li>
            </ul>
          </div>
        </a>
      </div>
    </aside>
  );
}
