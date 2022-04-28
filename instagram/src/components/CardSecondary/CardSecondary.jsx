import React from 'react';

export default function CardSecondary() {
  return (
    <div class="w-64 rounded-2.5xl overflow-hidden relative">
      <img
        src="https://images.pexels.com/photos/248533/pexels-photo-248533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        class="h-40"
        alt=""
      />
      <div class="absolute flex items-center justify-center rounded-full right-5 top-34 w-14 h-14">
        <img
          src="https://images.pexels.com/photos/248533/pexels-photo-248533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          class="w-12 h-12 rounded-full"
          alt=""
        />
        <span class="absolute inset-0 border rounded-full border-white/50" />
        {/* <CheckBlueIcon class="absolute bottom-0 right-0" /> */}
      </div>
      <span class="px-2 py-0.5 absolute right-2 top-2 text-white rounded-lg bg-gray-900/50 text-xxs">
        daracion
      </span>
      <div class="px-5 py-5 bg-gray-800">
        <div class="flex items-center">
          <span class="text-xs font-normal tracking-wider text-gray-400">
            name
          </span>
          <span class="w-2 h-2 ml-2 rounded-full bg-orange" />
        </div>
        <h3 class="inline-block pt-1 font-medium leading-relaxed">tittle</h3>
        <span class="inline-block pt-4 text-sm tracking-wider text-gray-500">
          views • created at
        </span>
      </div>
    </div>
  );
}
