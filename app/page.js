
"use client"
// Import necessary modules
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ImageSlider from './Components/ImageSlider';
import Image from 'next/image';
import Loader from "./Components/Loader";
import Temple from "/app/assets/image/temple.jpg";
import Temple13 from "/app/assets/image/temple13.jpg";
import Temple2 from "/app/assets/image/temple3.jpg";
import { CgEditBlackPoint } from "react-icons/cg";

const Page = () => {
  const [lang, setLang] = useState('english');
  const [loader, setLoader] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  const handleLanguageChange = () => {
    setLoader(true);
    setLang((prevLang) => (prevLang === 'english' ? 'kannada' : 'english'));
    setLoader(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the threshold based on your preference
      const threshold = window.innerWidth * 0.7;

      // Check if the element is within the viewport
      const element = document.querySelector('.animate-text');
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementVisible = rect.left <= threshold;
        setIsVisible(elementVisible);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const content = {
    english: {
      title: 'Shree Basaveshwara Temple ',
      text: '⦾ According to Skanda Purana, it is believed that Lord Shri Subrahmanya Swami performed penance on Lord Shiva at this site...',
      readMore: 'Read more...',
      title1: 'How to Reach?',
      text1: '⦾ By bus: Plenty of buses travel to and from Kukke Subrahmanya, connecting Bisle, Dharmasthala, Kadaba, Uppinangady, Mangaluru, and other parts of Karnataka. Alight at Kulkunda junction and walk approximately 350 meters to reach the temple.',
      readMore1: 'Read more...',
      title2: 'News and Updates',
      text2: '',
      title3:'Darshana Timings:',
      text3:`⦾ Morning from 6 till 1 in the noon and Evening from 3 till 5`

    },
    kannada: {
      title: 'ಶ್ರೀ ಬಸವೇಶ್ವರ ',
      text: '⦾ ಸ್ಕಂದ ಪುರಾಣ ಉಲ್ಲೇಖದಂತೆ, ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯು ತಾರಕಾಸುರನೇಮೊದಲಾದ ರಕ್ಕಸರನ್ನು ಧನುರ್ವಿದ್ಯೆ ಯಲ್ಲಿ ಸಂಹಾರ ಮಾಡಿದಾಗ...',
      readMore: 'ಮತಾಂತರಿಸಿ ಹೇಳಿ...',
      title1: 'ಹೇಗೆ ಹೋಗಬಹುದು?',
      text1: '⦾  ಬಸ್ ಮಾರ್ಗದಲ್ಲಿ:ಹೆಚ್ಚಿನ ಬಸ್‌ಗಳು ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯಕ್ಕೆ ಹೋಗಲು ಬಿಸ್ಲೆ, ಧರ್ಮಸ್ಥಳ, ಕಡಾಬ, ಉಪ್ಪಿನಂಗಡಿ, ಮಂಗಳೂರು ಮತ್ತು ಕರ್ನಾಟಕದ ಇತರ ಭಾಗಗಳನ್ನು ಸಂಪರ್ಕಿಸುತ್ತವೆ. ಕುಲ್ಕುಂಡ ಜಂಕ್ಷನ್‌ನಲ್ಲಿ ಇಳಿಯಿರಿ ಮತ್ತು ದೇವಸ್ಥಾನಕ್ಕೆ ಸೇರಲು ಸುಮಾರು 350 ಮೀಟರ್ ನಡೆಯಿರಿ.',
      readMore1: 'ಮತಾಂತರಿಸಿ ಹೇಳಿ...',
      title3:'ದರ್ಶನ ಸಮಯ:',
      text3:'⦾ ಬೆಳಗ್ಗೆ 6 ಗಂಟೆಯಿಂದ ಮಧ್ಯಾಹ್ನ 1 ಗಂಟೆ ತನಕ ಸಂಜೆ 3 ಗಂಟೆಯಿಂದ 7 ಗಂಟೆ ತನಕ'

    },
  };

  const currentContent = content[lang];

  return (
    <div className='container mx-auto'>
      {/* ImageSlider component */}
      <ImageSlider />

      {/* Loader */}
      {loader && <Loader />}

      <div
        className={`font-bold flex flex-col text-4xl sm:text-5xl sm:max-w-xl sm:mx-auto m-10 p-5 lg:text-center items-center ${isVisible ? 'animate-slide-in' : 'opacity-0'
          } animate-text`}
      >
        <span>
          Welcome to
        </span>
        <span className=' font-extrabold text-center'>
          Kulkunda Shree Basaveshwara Temple
        </span>
      </div>

      {/* Language switch button */}
      <div className="flex  justify-end px-4 mt-5">
        <button
          type="button"
          className="border-2 font-bold text-white bg-black px-12 py-3 rounded-lg hover:text-black hover:bg-white"
          onClick={handleLanguageChange}
        >
          {lang === "english" ? "ಕನ್ನಡ" : "English"}
        </button>
      </div>
      <div className='relative flex flex-col md:flex-row py-5 md:p-5 justify-center'>
        <div className='relative w-full lg:w-1/3 md:w-1/2 mb-3 md:mb-5 lg:mb-5'>
          {/* Image with text overlay */}
          <div className='relative w-full bg-black'>
            <Image
              src={Temple}
              className='w-full  opacity-50'
              alt="register background image"
              width={300}
              height={250}
            />
            <div className='absolute top-0 left-0 right-0 bottom-24 flex flex-col justify-end p-5'>
              <h3 className='text-2xl font-semibold mb-2 text-white'>{currentContent.title}</h3>
              <p className=' line-clamp-3 md:line-clamp-5 text-white'>  {currentContent.text}</p>
              <Link href="/Pages/aboutus">
                <p className='text-white font-bold py-1 text-[15px]'>{currentContent.readMore}</p>
              </Link>
            </div>
          </div>
        </div>
        {/* ... Repeat the structure for the second content block */}
      </div>

      <div className='relative flex flex-col md:flex-row py-5 md:p-5 justify-center'>
        <div className='relative w-full lg:w-1/3 md:w-1/2 mb-3 md:mb-5 lg:mb-5'>
          {/* Image with text overlay */}
          <div className='relative w-full bg-black'>
            <Image
              src={Temple2}
              className='w-full  opacity-50'
              alt="register background image"
              width={300}
              height={250}
            />
            <div className='absolute top-0 left-0 right-0 bottom-24 flex flex-col justify-end p-5'>
              <h3 className='text-2xl font-semibold mb-2 text-white'>{currentContent.title1}</h3>
              <p className=' line-clamp-3 md:line-clamp-5 text-white'>  {currentContent.text1}</p>
              <Link href="/Pages/contactus">
                <p className='text-white font-bold py-1 text-[15px]'>{currentContent.readMore1}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col md:flex-row py-5 md:p-5 justify-center'>
        <div className='relative w-full lg:w-1/3 md:w-1/2 mb-3 md:mb-5 lg:mb-5'>
          {/* Image with text overlay */}
          <div className='relative w-full bg-black'>
            <Image
              src={Temple13}
              className='w-full  opacity-50'
              alt="register background image"
              width={300}
              height={250}
            />
            <div className='absolute top-0 left-0 right-0 bottom-24 flex flex-col justify-end p-5'>
              <h3 className='text-2xl font-semibold mb-2 text-white'>  {currentContent.title3}</h3>
              <p className=' line-clamp-3 md:line-clamp-5 text-white '>{currentContent.text3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Page;
