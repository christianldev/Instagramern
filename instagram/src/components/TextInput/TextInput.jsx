import React from 'react';

import { FaExclamationCircle } from 'react-icons/fa';

export function TextInput({ useField, label, ...rest }) {
  const [field, meta] = useField(rest);
  return (
    <>
      <label
        htmlFor={rest.id || rest.name}
        className="flex text-sm font-light text-gray-200"
      >
        {label}
      </label>

      <div className="mt-1 relative">
        <input
          className="block w-full rounded-xl p-2 text-sm bg-black"
          {...field}
          {...rest}
        />
        {meta.touched && meta.error ? (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FaExclamationCircle
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        ) : null}
      </div>
      {meta.touched && meta.error ? (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {meta.error}
        </p>
      ) : null}
    </>
  );
}
