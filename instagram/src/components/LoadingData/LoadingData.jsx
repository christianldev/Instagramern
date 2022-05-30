import React from 'react';

export default function LoadingData() {
  return (
    <main className="flex justify-center items-center container py-12">
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
    </main>
  );
}
