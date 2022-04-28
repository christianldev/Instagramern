import React from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../../components/Profile';
import CardPrimary from '../../components/CardPrimary';
import CardSecondary from '../../components/CardSecondary';

export default function User() {
  const { username } = useParams();

  return (
    <div className="flex min-h-screen 2xl:max-w-7xl 2xl:mx-auto 2xl:border-x-2 2xl:border-indigo-50 ">
      <Profile />

      <main className="w-full dark:bg-darktheme-body py-4 px-3 sm:px-10">
        <section>
          <div className="bg-rose-100/70 mt-12  rounded-xl px-5 sm:px-10  pt-8 pb-4 relative xl:bg-gray-400 bg-no-repeat bg-right bg-contain ">
            <div className="text-rose-400 font-semibold text-lg">
              All Invoices
            </div>

            <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 gap-y-6  gap-x-6 md:flex md:space-x-6 md:gap-x-0 ">
              <div className="mt-6 grid grid-cols-4 max-w-max gap-x-6">
                <div className="flex flex-col w-40 text-gray-700 text-sm space-y-2">
                  <label for="start-date">Begin Date</label>
                  <input
                    id="startdate"
                    type="date"
                    value="2019-11-01"
                    className="bg-indigo-800/80 text-white  px-4 py-3 rounded-lg "
                  />
                </div>

                <div className="flex flex-col  md:w-40  text-gray-600 text-sm space-y-2 font-semibold">
                  <label for="client">Begin Date</label>
                  <div className="inline-flex relative">
                    <input
                      className="bg-indigo-800/80 text-white tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                      id="client"
                      name="client"
                      type="text"
                      value="2019/02/28"
                    />

                    <span className="absolute top-0 right-0 m-3 pointer-events-none text-white">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:w-40  text-gray-600 text-sm space-y-2 font-semibold">
                  <label for="client">End Date</label>
                  <div className="inline-flex relative">
                    <input
                      className="bg-indigo-800/50 text-white tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                      id="client"
                      name="client"
                      type="text"
                      value="2019/12/09"
                    />

                    <span className="absolute top-0 right-0 m-3 pointer-events-none text-white">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:w-40  text-gray-600 text-sm space-y-2 font-semibold">
                  <label for="client">Status</label>
                  <div className="inline-flex relative">
                    <select
                      className="bg-rose-400 text-white  px-4 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                      id="client"
                      name="client"
                    >
                      <option value="Any">Any</option>
                    </select>
                    <span className="absolute top-0 right-0 m-3 pointer-events-none text-white">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:w-40 text-gray-600 text-sm space-y-2 font-semibold">
                  <label for="client">Client</label>
                  <div className="inline-flex relative">
                    <select
                      className="bg-blue-600/70  text-white  px-4 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                      id="client"
                      name="client"
                    >
                      <option value="Any">Any</option>
                    </select>
                    <span className="absolute top-0 right-0 m-3 pointer-events-none text-white">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 text-gray-500 text-sm ">
                * This data has been shown according to your given information
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="invoice-table-row invoice-table-header bg-white mt-10 rounded-xl px-10  py-4 flex items-center gap-x-3 text-sm font-semibold  text-gray-600">
            <div className="text-left">Invoice</div>
            <div className="text-left">Client name</div>
            <div className="text-center">Date</div>
            <div className="text-center ">Due date</div>
            <div className="text-right">Total</div>
            <div className="flex-1  text-center">Status</div>
          </div>

          <div className="bg-white mt-5 rounded-xl text-sm  text-gray-500 divide-y divide-indigo-50 overflow-x-auto  shadow">
            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4">
              <div className="text-left ">12</div>
              <div className="text-left">John Doe</div>
              <div className="text-center">2019/11/20</div>
              <div className="text-center">2019/12/20</div>
              <div className="text-right">$10.00</div>
              <div className="text-center ">
                <span className="px-4 py-1 rounded-lg bg-rose-400  text-white">
                  Draft
                </span>
              </div>
            </div>

            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4">
              <div className="text-left">13</div>
              <div className="text-left">Thomas Bride</div>
              <div className="text-center">2019/11/20</div>
              <div className="text-center">2019/12/20</div>
              <div className="text-right">$670.00</div>
              <div className="text-center ">
                <span className="px-4 py-1 rounded-lg bg-indigo-400  text-white">
                  Paid
                </span>
              </div>
            </div>

            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4">
              <div className="text-left">14</div>
              <div className="text-left">Ellen Bean</div>
              <div className="text-center">2019/11/20</div>
              <div className="text-center">2019/12/20</div>
              <div className="text-right">$1032.00</div>
              <div className="text-center ">
                <span className="px-4 py-1 rounded-lg bg-rose-400  text-white">
                  Draft
                </span>
              </div>
            </div>

            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4 bg-indigo-50">
              <div className="text-left">15</div>
              <div className="text-left">Jack Sanders</div>
              <div className="text-center">2020/11/20</div>
              <div className="text-center">2020/12/20</div>
              <div className="text-right">$590.00</div>
              <div className="text-center ">
                <span className="px-4 py-1 rounded-lg bg-indigo-400  text-white">
                  Paid
                </span>
              </div>
            </div>

            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4">
              <div className="text-left">16</div>
              <div className="text-left">Leslie Ive</div>
              <div className="text-center">2020/11/20</div>
              <div className="text-center">2020/12/20</div>
              <div className="text-right">$230.00</div>
              <div className="text-center ">
                <span className="px-4 py-1 rounded-lg bg-rose-400  text-white">
                  Draft
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
