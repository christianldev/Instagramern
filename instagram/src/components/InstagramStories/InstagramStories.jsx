import React from 'react';
import './InstagramStories.css';

export default function InstagramStories() {
  return (
    <section
      id="stories"
      className="flex items-end justify-end mt-10  phone__stories"
    >
      <div id="profile" className="flex flex-col m-4 relative">
        <div className="circle">
          <img
            src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
            alt=""
          />
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ enableBackground: 'new -580 439 577.9 194' }}
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
        <div
          id="plus"
          className="absolute m-auto text-white font-mono top-12 right-0 bg-blue-600 h-5 w-5 rounded-full flex items-center justify-center transition transform hover:bg-blue-500 cursor-pointer"
        >
          <p>+</p>
        </div>
      </div>

      <div id="profile" className="flex flex-col  cursor-pointer">
        <div className="circle">
          <img
            src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
            alt=""
          />
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ enableBackground: 'new -580 439 577.9 194' }}
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
        <p className="text-center text-sm font-thin">Mason</p>
      </div>
      <div id="profile" className="flex flex-col  cursor-pointer">
        <div className="circle">
          <img
            src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
            alt=""
          />
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ enableBackground: 'new -580 439 577.9 194' }}
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
        <p className="text-center text-sm font-thin">Selene</p>
      </div>
      <div id="profile" className="flex flex-col  cursor-pointer">
        <div className="circle">
          <img
            src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
            alt=""
          />
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ enableBackground: 'new -580 439 577.9 194' }}
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
        <p className="text-center text-sm font-thin">Jimmy</p>
      </div>

      <div id="profile" className="flex flex-col  cursor-pointer">
        <div className="circle">
          <img
            src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
            alt=""
          />
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ enableBackground: 'new -580 439 577.9 194' }}
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
        <p className="text-center text-sm font-thin">Abílio</p>
      </div>

      <div id="profile" className="flex flex-col cursor-pointer">
        <div className="circle">
          <img
            src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
            alt=""
          />
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ enableBackground: 'new -580 439 577.9 194' }}
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
        <p className="text-center text-sm font-thin">Ethel</p>
      </div>
      <div id="profile" className="flex flex-col  cursor-pointer">
        <div className="circle">
          <img
            src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
            alt=""
          />
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ enableBackground: 'new -580 439 577.9 194' }}
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
        <p className="text-center text-sm font-thin">Shady</p>
      </div>
    </section>
  );
}
