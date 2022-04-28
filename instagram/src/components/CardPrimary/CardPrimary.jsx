import React from 'react';

export default function CardPrimary() {
  return (
    <div class="h-96 rounded-2.5xl p-10 bg-no-repeat bg-cover overflow-hidden relative w-1/3">
      <h3 class="text-3xl font-semibold max-w-xxs">hola</h3>
      <div class="flex flex-wrap-reverse items-center pt-4 pr-24">
        <div class="relative flex items-center justify-center rounded-full w-14 h-14">
          <img
            src="https://images.pexels.com/photos/248533/pexels-photo-248533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            class="w-12 h-12 rounded-full"
            alt=""
          />
          <span class="absolute inset-0 border rounded-full border-white/50" />
          <component class="absolute bottom-0 right-0" />
        </div>
        <div class="flex flex-col py-4 pl-2">
          <a class="font-medium tracking-wider" href="#">
            {' '}
            hola{' '}
          </a>
          <span class="text-xs tracking-wider text-white/80">
            vistas • creados en
          </span>
        </div>
      </div>
      <span class="px-2 py-0.5 absolute right-5 bottom-5 rounded-lg bg-gray-900/50 text-xxs">
        duration
      </span>
    </div>
  );
}
