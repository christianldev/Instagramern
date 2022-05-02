import React from 'react';

export default function UserGallery({ getUser, auth }) {
  return (
    <section className="w-full  dark:bg-darktheme-body py-4 px-6">
      <div className="rounded-xl pt-2  ">
        <main className=" py-2 px-4 mx-auto max-w-7xl">
          <div className="flex gap-x-8 items-center pt-4">
            <a href="#" className="text-lg text-gray-200  font-medium">
              Popular
            </a>
            <a href="#" className="text-lg text-gray-200">
              Recent
            </a>
          </div>
          <div className="gap-6 pt-2 columns-1 sm:columns-2 md:col-span-2  lg:columns-3">
            <figure className="py-4 [break-inside:avoid]">
              <img
                className="rounded-md  h-80 object-cover w-full"
                src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwyODU0MzN8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBhbmQlMjBuYXR1cmV8ZW58MHx8fHwxNjUxMTA5Mzgw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080"
                alt="row of four men sitting on mountain trail"
              />
            </figure>
            <figure className="py-4 [break-inside:avoid]">
              <img
                className="rounded-md  h-80 object-cover w-full"
                src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwyODU0MzN8MHwxfHNlYXJjaHwyfHxwZW9wbGUlMjBhbmQlMjBuYXR1cmV8ZW58MHx8fHwxNjUxMTA5Mzgw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080"
              />
            </figure>

            <figure className="py-4 [break-inside:avoid]">
              <img
                className="rounded-md  h-80 object-cover w-full"
                src="https://images.unsplash.com/photo-1542353436-312f0e1f67ff?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwyODU0MzN8MHwxfHNlYXJjaHw2fHxwZW9wbGUlMjBhbmQlMjBuYXR1cmV8ZW58MHx8fHwxNjUxMTA5Mzgw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080"
                alt="woman spreading her arms"
              />
            </figure>
            <figure className="py-4 [break-inside:avoid]">
              <img
                className="rounded-md  h-80 object-cover w-full"
                src="https://images.unsplash.com/photo-1440186347098-386b7459ad6b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwyODU0MzN8MHwxfHNlYXJjaHw3fHxwZW9wbGUlMjBhbmQlMjBuYXR1cmV8ZW58MHx8fHwxNjUxMTA5Mzgw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080"
                alt="woman in sleeveless top and backpack surrounded by trees during daytime"
              />
            </figure>
            <figure className="py-4 [break-inside:avoid]">
              <img
                className="rounded-md  h-80 object-cover w-full"
                src="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwyODU0MzN8MHwxfHNlYXJjaHw4fHxwZW9wbGUlMjBhbmQlMjBuYXR1cmV8ZW58MHx8fHwxNjUxMTA5Mzgw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080"
                alt="man standing on top of rock mountain during golden hour"
              />
            </figure>
            <figure className="py-4 [break-inside:avoid]">
              <img
                className="rounded-md  h-80 object-cover w-full"
                src="https://images.unsplash.com/photo-1445575722865-82118e5084ff?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwyODU0MzN8MHwxfHNlYXJjaHw5fHxwZW9wbGUlMjBhbmQlMjBuYXR1cmV8ZW58MHx8fHwxNjUxMTA5Mzgw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080"
                alt="two person sitting on grass field"
              />
            </figure>
          </div>
          <div className="flex justify-center items-center py-12">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-indigo-600 animate-spin"
            >
              <path
                opacity=".05"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 19a7.001 7.001 0 0 0 4.95-11.95A7 7 0 1 0 12 19Zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                fill="#000"
              ></path>
              <path
                d="M3.5 12c-.828 0-1.512-.675-1.389-1.495a10.007 10.007 0 0 1 8.394-8.394C11.325 1.988 12 2.671 12 3.5c0 .828-.68 1.484-1.489 1.66a7 7 0 0 0-5.35 5.351C4.983 11.321 4.327 12 3.5 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </main>
      </div>
    </section>
  );
}
