"use client"
// Import necessary modules
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ImageSlider from './Components/ImageSlider';
import Image from 'next/image';
import Loader from "./Components/Loader";
import Temple from "/app/assets/image/temple20.png";
import Temple13 from "/app/assets/image/temple13.jpg";
import Temple15 from "/app/assets/image/temple15.jpg";
import { MdOutlineMouse } from "react-icons/md";
import Temple12 from "/app/assets/image/temple12.png";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

const Page = () => {
  const featuredProductsRef = useRef(null);
  const [loader, setLoader] = useState(false);
  const { langName } = useSelector(state => state.lang)
  const [isVisible, setIsVisible] = useState(false);
  const [newsUpdatesList, setNewsUpdatesList] = useState([]);
  const [found, setFound] = useState(false);

  useEffect(() => {
    const fetchNewsUpdates = async () => {
      try {
        const res = await fetch("/api/newsupdate/allnews", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setNewsUpdatesList(data.allNews);
        setFound(true);
      } catch (error) {
        console.error(
          "Error during fetching news updates:",
          error.message || "Unknown error"
        );
      }
    };
    fetchNewsUpdates();
  }, [])

  useEffect(() => {
    // Check screen size and set isVisible accordingly
    const isSmallScreen = window.innerWidth <= 600; // Adjust the breakpoint as needed

    if (isSmallScreen) {
      setIsVisible(true);
    } else {
      // Add scroll event listener to trigger animation on scroll
      const handleScroll = () => {
        // Adjust the threshold based on your preference
        const threshold = window.innerWidth * 0.7;

        // Check if the element is within the viewport
        const element = document.querySelector('.animate-text');
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementVisible = rect.left <= threshold;
          setIsVisible(elementVisible);
          // Remove the scroll event listener once the animation is triggered
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);

      // Remove the event listener when the component is unmounted
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const scrollToFeaturedProducts = () => {
    featuredProductsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const content = {
    English: {
      title: 'Shree Basaveshwara Temple ',
      text: '⦾ According to Skanda Purana, it is believed that Lord Shri Subrahmanya Swami performed penance on Lord Shiva at this site...',
      readMore: 'Read more...',
      title1: 'How to Reach?',
      text1: '⦾ By bus: Plenty of buses travel to and from Kukke Subrahmanya, connecting Bisle, Dharmasthala, Kadaba, Uppinangady, Mangaluru, and other parts of Karnataka. Alight at Kulkunda junction and walk approximately 350 meters to reach the temple.',
      readMore1: 'Read more...',
      title2: 'News and Updates',
      text2: '',
      title3: 'Darshana Timings:',
      text31: `
        ⦾ Morning: 6AM-1PM
      `,
      text32: "⦾ Morning Pooja: 8AM",
      text33: "⦾ Mahapooja: 12:15PM",
      text34: "⦾ Evening: 3PM-7PM",
      text35: "⦾ Evening Pooja: 6:30PM",
      title4: "Pooja Timings"
    },
    Kannada: {
      title: 'ಶ್ರೀ ಬಸವೇಶ್ವರ ',
      text: '⦾ ಸ್ಕಂದ ಪುರಾಣ ಉಲ್ಲೇಖದಂತೆ, ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯು ತಾರಕಾಸುರನೇಮೊದಲಾದ ರಕ್ಕಸರನ್ನು ಧನುರ್ವಿದ್ಯೆ ಯಲ್ಲಿ ಸಂಹಾರ ಮಾಡಿದಾಗ...',
      readMore: 'ಹೆಚ್ಚು ಓದಿ...',
      title1: 'ತಲುಪುವುದು ಹೇಗೆ?',
      text1: '⦾  ಬಸ್ಸಿನ ಮೂಲಕ:ಬಿಸ್ಲೆ, ಧರ್ಮಸ್ಥಳ, ಕಡಬ, ಉಪ್ಪಿನಂಗಡಿ, ಮಂಗಳೂರು ಮತ್ತು ಕರ್ನಾಟಕದ ಇತರ ಭಾಗಗಳನ್ನು ಸಂಪರ್ಕಿಸುವ ಸಾಕಷ್ಟು ಬಸ್ಸುಗಳು ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯಕ್ಕೆ ಪ್ರಯಾಣಿಸುತ್ತವೆ.ಈ ಎಲ್ಲಾ ಬಸ್ಸುಗಳಿಗೆ ಕುಲ್ಕುಂದದಲ್ಲಿ ನಿಲುಗಡೆಯಿದೆ. ಕುಲ್ಕುಂದ ಜಂಕ್ಷನ್‌ನಲ್ಲಿ ಇಳಿದು ಸರಿಸುಮಾರು 350 ಮೀಟರ್ ನಡೆದು ದೇವಸ್ಥಾನವನ್ನು ತಲುಪಬಹುದು.',
      readMore1: 'ಹೆಚ್ಚು ಓದಿ...',
      title3: 'ದರ್ಶನ ಸಮಯ:',
      text31: '⦾ ಬೆಳಗ್ಗೆ 6 ಗಂಟೆಯಿಂದ ಮಧ್ಯಾಹ್ನ 1 ಗಂಟೆ ತನಕ ಸಂಜೆ 3 ಗಂಟೆಯಿಂದ 7 ಗಂಟೆ ತನಕ',
      text32: 'ಬೆಳಗ್ಗೆ ಪೂಜೆ: 8 ಗಂಟೆಗೆ',
      text33: 'ಮಧ್ಯಾಹ್ನ ಮಹಾಪೂಜೆ: ಮಧ್ಯಾಹ್ನ 12:15',
      text34: 'ಸಂಜೆ ದರ್ಶನ ಸಮಯ: ಸಂಜೆ 3 ಗಂಟೆಯಿಂದ 7 ಗಂಟೆಯ ತನಕ',
      text35: 'ರಾತ್ರಿ ಪೂಜೆ: ಸಂಜೆ 6:30ಕ್ಕೆ',
      title4: "Pooja Timings"
    },
  };
  

  const currentContent = content[langName];

  return (
    <div className='relative mx-auto'>
  
      {/* ImageSlider component */}
      <ImageSlider />
  
      {/* Loader */}
      {loader && <Loader />}
      
      {/* Scroll button */}
      <div className='hidden justify-center py-4 sm:py-2 sm:flex'>
        <button
          className="flex justify-center items-center bg-gradient-to-r text-md sm:text-xl font-bold from-orange-100 to-orange-500 p-2 sm:p-4 rounded-full px-10 sm:px-20 border-2 border-black hover:scale-110"
          onClick={scrollToFeaturedProducts}
        >
          Scroll <MdOutlineMouse />
        </button>
      </div>
  
      {/* Welcome text */}
      <div
        className={`font-extrabold flex flex-col text-2xl sm:text-3xl sm:max-w-xl sm:mx-auto m-5 p-3 lg:text-center items-center 
          ${isVisible ? 'animate-slide-in' : 'opacity-0'} animate-text`}
        style={{ fontFamily: 'Poppins, sans-serif', color: 'black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}
        ref={featuredProductsRef}
      >
        <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
          Welcome to
        </span>
        <span className='text-center'>
          Kulkunda Shree Basaveshwara Temple
        </span>
      </div>
  
      {/* First content block */}
      <div className='flex flex-col sm:flex-row overflow-auto py-2 sm:p-5 justify-center'>
        <div className='relative w-full sm:w-1/2 mb-3 sm:mb-5 p-3'>
          {/* Image on the left */}
          <Image
            src={Temple}
            className='w-full rounded-md'
            alt="register background image"
            width={800}
            height={800}
            priority={true}
          />
        </div>
        <div className='relative w-full sm:w-1/2 mb-3 sm:mb-5 p-3'>
          {/* Text on the right */}
          <div className='flex flex-col mt-3 sm:mt-10 p-3 h-full '>
            <h3 className='text-xl sm:text-2xl font-semibold mb-2 text-black-500'>{ currentContent.title}</h3>
            <p className='line-clamp-3 sm:line-clamp-5 text-black-500'>{currentContent.text}</p>
            <Link href="/Pages/aboutus">
              <p className='text-red-500 font-bold py-1 text-[15px]'>{currentContent.readMore}</p>
            </Link>
          </div>
        </div>
      </div>
  
      {/* Second content block */}
      <div className='flex flex-col sm:flex-row overflow-auto py-2 sm:p-5 justify-center items-center'>
        <div className='relative w-full sm:w-1/2 mb-3 sm:mb-0 p-3'>
          {/* Text on the left */}
          <div className='relative w-full p-3'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-2 text-black-500'>{currentContent.title1}</h3>
            <p className='text-black-500'>{currentContent.text1}</p>
            <Link href="/Pages/aboutus">
              <p className='text-red-500 font-bold py-1 text-sm'>{currentContent.readMore1}</p>
            </Link>
          </div>
        </div>
        <div className='relative w-full sm:w-1/3 p-3'>
          {/* Image on the right */}
          <Image
            src={Temple12}
            className='w-full rounded-md'
            alt="register background image"
            width={300}
            height={250}
            priority={true}
          />
        </div>
      </div>
  
      {/* Third and Fourth content blocks */}
      <div className='flex flex-col sm:flex-row overflow-auto py-2 sm:p-5 justify-center'>
        {/* Third content block */}
        <div className='relative w-full sm:w-1/3 mb-3 sm:mb-5 p-3'>
          {/* Image with text overlay */}
          <div className='relative w-full bg-black'>
            <Image
              src={Temple13}
              className='w-full opacity-40 rounded-md'
              alt="register background image"
              width={300}
              height={250}
              priority={true}
            />
            <div className='absolute top-3 left-0 right-0 bottom-16 flex flex-col justify-end p-3'>
              <h3 className='text-xl sm:text-2xl font-semibold mb-2 text-yellow-300'>{currentContent.title3}</h3>
              <p className='line-clamp-3 sm:line-clamp-5 text-yellow-300'>{currentContent.text31}</p>
              <p className='line-clamp-3 sm:line-clamp-5 text-yellow-300'>{currentContent.text34}</p>
              <h3 className='text-xl sm:text-2xl font-semibold mb-2 text-yellow-300 pt-2'>{currentContent.title4}</h3>
              <p className='line-clamp-3 sm:line-clamp-5 text-yellow-300'>{currentContent.text32}</p>
              <p className='line-clamp-3 sm:line-clamp-5 text-yellow-300'>{currentContent.text33}</p>
              <p className='line-clamp-3 sm:line-clamp-5 text-yellow-300'>{currentContent.text35}</p>
            </div>
          </div>
        </div>
  
        {/* Fourth content block */}
        <div className='relative w-full sm:w-1/3 mb-3 sm:mb-5 p-3'>
          {/* Image with text overlay */}
          <div className='relative w-full bg-black'>
            <Image
              src={Temple15}
              className='w-full opacity-40 rounded-md'
              alt="register background image"
              width={300}
              height={250}
              priority={true}
            />
            <div className='absolute top-0 left-0 right-0 bottom-16 flex flex-col justify-end p-3'>
              <h3 className='text-xl sm:text-2xl font-semibold mb-2 text-yellow-300'>{currentContent.title2}</h3>
              <p className='text-xl sm:text-2xl font-semibold mb-2 text-yellow-300'>⦾ {found && newsUpdatesList.length > 0 && newsUpdatesList[0].headline}</p>
              <p className='text-sm sm:text-base font-semibold mb-2 text-yellow-300 line-clamp-3'>
                {found && newsUpdatesList.length > 0 && newsUpdatesList[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
  
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
