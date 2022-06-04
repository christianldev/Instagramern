import React, { useState, useEffect, useCallback } from 'react';
import Picker from 'emoji-picker-react';

export default function DescriptionPostStep({
  fileUpload,
  title,
  description,
  setDescription,
  onChangeDescription,
  onChangeTitle,
}) {
  const [showPicker, setShowPicker] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState('');

  const [maxLength, setMaxLength] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (chosenEmoji) {
      fileUpload.description += chosenEmoji.emoji;
    }
  }, [chosenEmoji]);

  const handleMaxLength = (e) => {
    const { value } = e.target;

    if (value.length > 250) {
      setMaxLength(250);

      setError('La descripción no puede superar los 250 caracteres');
    } else {
      setError('');
      setChosenEmoji(e.target.value);
      setMaxLength(value.length);
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    event.preventDefault();
    setChosenEmoji((emoji) => emoji + emojiObject.emoji);

    setDescription(...description, chosenEmoji);
  };

  return (
    <form className=" mx-auto w-full flex flex-col rounded-lg text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
      <div className="icons flex text-gray-500 m-2">
        <svg
          className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <svg
          onClick={() => setShowPicker((val) => !val)}
          className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
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

        {showPicker && (
          <Picker
            onEmojiClick={onEmojiClick}
            disableAutoFocus={true}
            native
            pickerStyle={{
              width: '40%',
              height: '40%',
              position: 'absolute',
              top: '50%',
              left: '40%',
              transform: 'translate(-50%, -50%)',
            }}
            disableSearchBar
            preload={true}
          />
        )}
      </div>

      <input
        className="title bg-gray-100 border border-gray-300 p-2 mb-2 outline-none"
        placeholder="Titulo"
        type="text"
        name="title"
        value={title}
        onChange={onChangeTitle}
      />
      <textarea
        onClick={() => setShowPicker(false)}
        className=" bg-gray-100 sec p-3 h-40 border border-gray-300 outline-none resize-none"
        maxLength={250}
        placeholder="Descripcion"
        name="description"
        value={chosenEmoji || description}
        onChange={(e) => {
          handleMaxLength(e);
          onChangeDescription(e);
        }}
      />

      <p className="flex justify-center items-center text-red-500 text-xs italic">
        {error}
      </p>
      <div className="p-2 ml-auto text-gray-400 text-xs font-semibold">
        {maxLength}/250
      </div>
    </form>
  );
}
