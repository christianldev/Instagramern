import React from 'react';

export default function FeaturedStories() {
  return (
    <div className="mt-0 flex flex-col space-y-7 text-gray-500 font-medium">
      <div className=" flex items-center p-4 lg:p-6" href="#">
        <div className=" shadow  rounded-lg p-2">
          <h3 className="text-gray-600 text-sm font-semibold mb-4">
            Following
          </h3>
          <ul className="flex items-center justify-center space-x-2">
            <li className="flex flex-col items-center space-y-2">
              <a className="block bg-white p-1 rounded-full" href="#">
                <img
                  className="w-20 lg:w-16 md:w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
                />
              </a>

              <span className="text-xs text-gray-500">Sage</span>
            </li>

            <li className="flex flex-col items-center space-y-2">
              <a className="block bg-white p-1 rounded-full" href="#">
                <img
                  className="w-20 lg:w-16 md:w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
                />
              </a>

              <span className="text-xs text-gray-500">Jett</span>
            </li>

            <li className="flex flex-col items-center space-y-2">
              <a className="block bg-white p-1 rounded-full" href="#">
                <img
                  className="w-20 lg:w-16 md:w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
                />
              </a>

              <span className="text-xs text-gray-500">Sky</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
