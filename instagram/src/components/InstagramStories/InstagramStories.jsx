import React from 'react';

import avatarNotFound from '../../assets/avatarnotfound.jpg';
import './InstagramStories.css';

export default function InstagramStories({ getUser }) {
  return (
    <div className="max-w-2xl mx-auto shadow-lg min-w-0  dark:highlight-white/5 p-4">
      <div className="overflow-x-auto flex">
        <div className="flex-none py-2 px-3 first:pl-6 last:pr-6">
          <div className="flex flex-col items-center justify-center gap-3 ">
            <img
              className="w-16 h-16 rounded-full bg-gradient-to-r p-[4px] from-[#09beec] via-[#3B82F6] to-[#9333EA]"
              src={getUser.avatar ? getUser.avatar : avatarNotFound}
            />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              <font style={{ verticalAlign: 'inherit' }}>
                {getUser.username}
              </font>
            </strong>
            <button class="relative bg-blue-500 text-white text-sm font-light w-5 h-5 rounded-full bottom-14 left-6 border-2 border-white flex justify-center items-center font-mono hover:bg-blue-700 focus:outline-none">
              <div class="transform -translate-y-px text-sm">+</div>
            </button>
          </div>
        </div>
        <div className="flex-none py-2 px-3 first:pl-6 last:pr-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              className="w-16 h-16 rounded-full bg-gradient-to-r p-[4px] from-[#09beec] via-[#3B82F6] to-[#9333EA]"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              <font style={{ verticalAlign: 'inherit' }}>emily</font>
            </strong>
          </div>
        </div>
        <div className="flex-none py-2 px-3 first:pl-6 last:pr-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              className="w-16 h-16 rounded-full bg-gradient-to-r p-[4px] from-[#09beec] via-[#3B82F6] to-[#9333EA]"
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              <font style={{ verticalAlign: 'inherit' }}>whitney</font>
            </strong>
          </div>
        </div>
        <div className="flex-none py-2 px-3 first:pl-6 last:pr-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              className="w-16 h-16 rounded-full bg-gradient-to-r p-[4px] from-[#09beec] via-[#3B82F6] to-[#9333EA]"
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              <font style={{ verticalAlign: 'inherit' }}>David</font>
            </strong>
          </div>
        </div>
        <div className="flex-none py-2 px-3 first:pl-6 last:pr-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              className="w-16 h-16 rounded-full bg-gradient-to-r p-[4px] from-[#09beec] via-[#3B82F6] to-[#9333EA]"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              <font style={{ verticalAlign: 'inherit' }}>Cristina</font>
            </strong>
          </div>
        </div>
        <div className="flex-none py-2 px-3 first:pl-6 last:pr-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              className="w-16 h-16 rounded-full bg-gradient-to-r p-[4px] from-[#09beec] via-[#3B82F6] to-[#9333EA]"
              src="https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            />
            <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
              <font style={{ verticalAlign: 'inherit' }}>Sara</font>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
