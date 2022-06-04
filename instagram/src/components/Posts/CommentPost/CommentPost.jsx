import React from 'react';
import { Form, Formik } from 'formik';

import toast from 'react-hot-toast';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT, GET_COMMENTS } from '../../../gql/comment';

export default function CommentPost({ publication }) {
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [
      {
        query: GET_COMMENTS,
        variables: { idPublication: publication.id },
      },
    ],
  });

  return (
    <Formik
      initialValues={{
        comment: '',
      }}
      onSubmit={async (values, actions) => {
        try {
          const result = await addComment({
            variables: {
              input: {
                comment: values.comment,
                idPublication: publication.id,
              },
            },
          });

          console.log(result);

          if (result.data.addComment.comment !== '') {
            actions.resetForm();
          }
        } catch (error) {
          toast.error(error.message, {
            position: 'top-right',
          });
        }
      }}
    >
      {(formik) => (
        <Form
          onSubmit={formik.handleSubmit}
          className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400"
        >
          <button
            type="submit"
            className="flex items-center justify-center w-20 h-10 object-cover  shadow mr-2 cursor-pointer text-xs font-medium text-gray-200 bg-darktheme-button rounded-xl hover:bg-blue-600"
          >
            Enviar
          </button>

          <span className="absolute inset-y-0 right-0 flex items-center pr-6">
            <div className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
              <svg
                className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </span>
          <input
            type="text"
            name="comment"
            className="w-full py-3 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
            style={{ borderRadius: '25px' }}
            placeholder="Escribe un comentario..."
            value={formik.values.comment}
            onChange={formik.handleChange}
          />
        </Form>
      )}
    </Formik>
  );
}
