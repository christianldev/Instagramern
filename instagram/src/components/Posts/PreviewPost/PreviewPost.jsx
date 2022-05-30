import React, { useEffect } from 'react';
import useModalForm from '../../../hooks/useModalForm';
import ModalStructure from '../../ModalStructure/ModalStructure';

export default function PreviewPost({ post }) {
  const {
    setShowModal,
    showModal,
    handlerModal,
    titleModal,
    childreModal,
    setPublication,
  } = useModalForm();

  useEffect(() => {
    setPublication({ ...post });
  }, [post]);

  return (
    <>
      <figure key={post.id} className="py-4 [break-inside:avoid]">
        <img
          className="rounded-md  h-80 object-cover w-full cursor-pointer hover:opacity-90 "
          src={post.file}
          alt={post.description}
          onClick={() => {
            handlerModal('viewPost');
          }}
        />
      </figure>
      {showModal ? (
        <ModalStructure
          showModal={showModal}
          setShowModal={setShowModal}
          titleModal={titleModal}
        >
          {childreModal}
        </ModalStructure>
      ) : null}
    </>
  );
}
