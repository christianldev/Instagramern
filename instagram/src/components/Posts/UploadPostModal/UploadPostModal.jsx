import React, { useState, useCallback, useEffect } from 'react';

import { useDropzone } from 'react-dropzone';
import { PostContextProvider } from '../../../context/StepperContext';
import FinalStep from '../../Steps/FinalStep';
import Stepper from '../../Steps/Stepper';
import StepperControl from '../../Steps/StepperControl';

import PostPreviewPost from '../../Steps/PostPreviewStep/PostPreviewPost';
import UploadImageStep from '../../Steps/StepsUploadForm/UploadImageStep';
import DescriptionPostStep from '../../Steps/DescriptionPostStep/DescriptionPostStep';

export default function UploadPostModal({ setShowModal, auth }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [fileUpload, setFileUpload] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [error, setError] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {}, [description]);

  const onDrop = useCallback(
    async (acceptedFile) => {
      const file = acceptedFile[0];

      setFileUpload({
        type: 'image',
        file,
        preview: URL.createObjectURL(file),
      });
    },
    [setFileUpload],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    noKeyboard: false,
    multiple: false,
    onDrop,
  });

  const steps = ['Seleccion', 'Edicion', 'Descripcion', 'Completado'];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <UploadImageStep
            setShowModal={setShowModal}
            fileUpload={fileUpload}
            getRootProps={getRootProps}
          />
        );

      case 2:
        return <PostPreviewPost fileUpload={fileUpload} />;

      case 3:
        if (fileUpload?.type === 'image') {
          return (
            <DescriptionPostStep
              fileUpload={fileUpload}
              title={title}
              description={description}
              setDescription={setDescription}
              onChangeDescription={onChangeDescription}
              onChangeTitle={onChangeTitle}
            />
          );
        }

      case 4:
        return <FinalStep setShowModal={setShowModal} />;
      default:
    }
  };

  const handleClick = useCallback(
    (direction) => {
      let newStep = currentStep;

      if (direction === 'next' && fileUpload?.type === 'image') {
        setError('');
        newStep++;
      } else if (direction === 'back') {
        newStep--;
      } else {
        setError('Debe subir una imagen');

        return;
      }

      // check if steps are within bounds
      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    },
    [currentStep, fileUpload, setCurrentStep, steps.length],
  );

  return (
    <div className="mx-auto rounded-2xl bg-white dark:bg-darktheme-body pb-2 shadow-xl lg:w-full  ">
      {/* Stepper */}
      <div className=" container ">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          fileUpload={fileUpload}
        />

        <div className="my-6 p-6 ">
          <PostContextProvider>{displayStep(currentStep)}</PostContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          fileUpload={fileUpload}
          setFileUpload={setFileUpload}
          error={error}
          setShowModal={setShowModal}
          auth={auth}
          title={title}
          description={description}
        />
      )}
    </div>
  );
}
