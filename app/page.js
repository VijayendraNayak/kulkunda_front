"use client"
// Import necessary modules
import React, { useState } from 'react';
import Link from 'next/link';
import ImageSlider from './Components/ImageSlider';
import Image from 'next/image';
import Temple from "/app/assets/image/temple.jpg";
import Temple1 from "/app/assets/image/temple2.jpg";
import Temple2 from "/app/assets/image/temple3.jpg";
import MarqueeComponent from './Components/MarqueeComponent';
import Owner from './Components/OwnerSection';
import Loader from "./Components/Loader"

const Page = () => {
  const [lang, setLang] = useState('english');
  const [loader, setLoader] = useState(false);
  const [newsContent, setNewsContent] = useState({
    english: {
      title: 'News and Updates',
    },
    kannada: {
      title: 'ಸುದ್ದಿ ಮತ್ತು ನವಿಯಗಳು',
    },
  });
  

  const handleLanguageChange = () => {
    setLoader(true);
    if (lang === "english") {
      setLang("kannada");
      setLoader(false);
    } else {
      setLang("english");
      setLoader(false);
    }
  };

  const content = {
        english: {
      title: 'Shri Basaveshwara Temple ',
      text: 'According to Skanda Purana, it is believed that Lord SriSubrahmanya Swami performed penance on Lord Shiva at this site...',
      readMore: 'Read more.........',
      title1: 'How to Reach?',
    text1: 'By bus: Plenty of buses travel to and from Kukke Subrahmanya, connecting Bisle, Dharmasthala, Kadaba, Uppinangady, Mangaluru, and other parts of Karnataka. Alight at Kulkunda junction and walk approximately 350 meters to reach the temple.',
    readMore1: 'Read more.........',
    title2:'News and Updates',
    text2:''
    },
    kannada: {
      title: 'ಶ್ರೀ ಬಸವೇಶ್ವರ ',
      text: 'ಸ್ಕಂದ ಪುರಾಣ ಉಲ್ಲೇಖದಂತೆ, ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯು ತಾರಕಾಸುರನೇಮೊದಲಾದ ರಕ್ಕಸರನ್ನು ಧನುರ್ವಿದ್ಯೆ ಯಲ್ಲಿ ಸಂಹಾರ ಮಾಡಿದಾಗ...',
      readMore: 'ಮತಾಂತರಿಸಿ ಹೇಳಿ.........',

      title1: 'ಹೇಗೆ ಹೋಗಬಹುದು?',
      text1: ' ಬಸ್ ಮಾರ್ಗದಲ್ಲಿ:ಹೆಚ್ಚಿನ ಬಸ್‌ಗಳು ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯಕ್ಕೆ ಹೋಗಲು ಬಿಸ್ಲೆ, ಧರ್ಮಸ್ಥಳ, ಕಡಾಬ, ಉಪ್ಪಿನಂಗಡಿ, ಮಂಗಳೂರು ಮತ್ತು ಕರ್ನಾಟಕದ ಇತರ ಭಾಗಗಳನ್ನು ಸಂಪರ್ಕಿಸುತ್ತವೆ. ಕುಲ್ಕುಂಡ ಜಂಕ್ಷನ್‌ನಲ್ಲಿ ಇಳಿಯಿರಿ ಮತ್ತು ದೇವಸ್ಥಾನಕ್ಕೆ ಸೇರಲು ಸುಮಾರು 350 ಮೀಟರ್ ನಡೆಯಿರಿ.',
      readMore1: 'ಮತಾಂತರಿಸಿ ಹೇಳಿ.........',
    },
  };

  const currentContent = content[lang];

  return (
    <div className='container mx-auto'>
      <ImageSlider />
      {loader && <Loader/>}
      <div className='flex flex-col md:flex-row p-5 md:p-5'>
        <div className='w-full lg:w-1/3 md:w-1/2 mb-3 md:mb-5 lg:mb-5'>
          <Image
            src={Temple}
            className='mx-auto d-block rounded-lg border-2 border-orange-500'
            alt="register background image"
            width={300}
            height={250}
          />
        </div>
        <div className='flex-1 md:ml-5 lg:ml-10'>
          <div className='bg-ora p-5 rounded-md hover:scale-105' >
            <div className='bg-orange-100 border-2 border-orange-500 p-8 rounded-lg shadow-md 'height={300}>
              <h3 className='text-xl font-semibold mb-2'>{currentContent.title}</h3>
              <p className='text-gray-700 line-clamp-3 md:line-clamp-5'>{currentContent.text}</p>
              <Link href="/Pages/aboutus">
                <p className='text-red-500'>{currentContent.readMore}</p>
              </Link>
            </div>
          </div>
          {/* ... Repeat the structure for the second content block */}
        </div>
      </div>

      <div className='flex-1 flex-col md:flex-row md:ml-5 lg:ml-10s flex relative'>
        {/* Left half - Content */}
        <div className='flex-1 md:ml-5 lg:ml-5'>
          <div className='bg-ora p-5 rounded-md hover:scale-105'>
            <div className='bg-orange-100 border-2 border-orange-500 p-8 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>{currentContent.title1}</h3>
                <p className='text-gray-700 line-clamp-3 md:line-clamp-5'>{currentContent.text1}</p>
                <Link href="/Pages/aboutus">
                <p className='text-red-500'>{currentContent.readMore1}</p>
                </Link>
              </div>
            </div>
        </div>
        
        <div className='w-full lg:w-1/3 md:w-1/2 mb-5 md:mb-5 lg:mb-5'>
          {/* Third Image (Temple2) */}
          <div className='hidden md:block'>
            <Image
              src={Temple2}
              className='mx-auto d-block rounded-lg border-2 border-orange-500'
              alt="third background image"
              width={300}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className='d-block ' align="center">       
        <div className='w-full'>
          <div className='bg-ora p-5 rounded-md hover:scale-105'>
            <div className='bg-orange-100 border-2 border-orange-500 p-6 rounded-lg shadow-md'width="1000px">
              <h1 className='text-black-500 text-2xl font-semibold 'align="center">News and Updates</h1>
              <MarqueeComponent />
            </div>
          </div>
        </div>
      </div>
    


      

      <div className="flex justify-center md:justify-end md:pr-8 pt-2 absolute top-10 right-0 m-4">
        {/* <select
          className="border p-1"
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="english">English</option>
          <option value="kannada">ಕನ್ನಡ</option>
        </select> */}

        <button
          type="button"
          className="border-2 border-orange-500 bg-orange-300 px-5 py-3 rounded-full ml-auto mr-0 mt-5 hover:bg-orange-400"
          onClick={(e) => handleLanguageChange(e.target.value)}
        >
          {lang === "english" ? "ಕನ್ನಡ" : "English"}
        </button>
      </div>

      <h1 className='text-center bold text-5xl text-black-400  mt-10 mb-5'>TRUSTEES</h1>
      <div className='flex flex-col md:flex-row md:p-10'>
        <Owner />
      </div>
    </div>
  );
};

export default Page;