"use client";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLangName } from '../Redux/Features/counter/langslice';

const languageswitch = () => {
  const [lang, setLang] = useState("English");
  const dispatch = useDispatch();

  const toggleclick = () => {
    if (lang === "English") {
      setLang("Kannada");
      dispatch(setLangName("Kannada")); // Dispatch the new language value
    } else {
      setLang("English");
      dispatch(setLangName("English")); // Dispatch the new language value
    }
  };

  return (
    <div>
      <div className='fixed h-16 w-16 bg-white rounded-full right-0 bottom-0 m-4 shadow-2xl text-center flex justify-center items-center font-bold text-xl text-orange-500 hover:scale-110' onClick={toggleclick}>
        {lang === "English" ? "ಅ" : "A"}
      </div>
    </div>
  );
};

export default languageswitch;
