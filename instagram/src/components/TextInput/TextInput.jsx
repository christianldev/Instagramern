import React from 'react';
import { Field } from 'formik';

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
        <Field
          className="block w-full rounded-xl p-2 text-sm bg-slate-200 dark:bg-black text-gray-400"
          {...field}
          {...rest}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="relative inset-y-0 right-0 pr-3 flex items- justify-center pointer-events-none">
          <FaExclamationCircle
            className="h-5 w-5 mt-2 text-red-500"
            aria-hidden="true"
          />
          <p className="mt-2 text-sm pl-2 text-red-600" id="email-error">
            {meta.error}
          </p>
        </div>
      ) : null}
    </>
  );
}
