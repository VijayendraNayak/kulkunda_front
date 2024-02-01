// ImageSlider.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slide1 from "/app/assets/image/lake.jpg";
import Slide2 from "/app/assets/image/ship.jpg";
import Slide3 from "/app/assets/image/slider2.jpg";
import Slide4 from "/app/assets/image/temple16.jpg"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const images = [Slide1, Slide2, Slide3, Slide4];

const ImageSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="relative flex h-[400px] sm:h-[400px] w-full flex-col mt-12 sm:mt-26 sm:justify-center items-center">
      <div className="relative w-full h-[400px] sm:h-[400px] flex overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            className="w-full h-full object-cover object-center"
            sizes="100vw"
            fill
            alt={`Image ${currentPage + 1}`}
            src={images[currentPage]}
            priority={true}
          />
        </div>
      </div>

      {/* Left arrow */}
      <div
        onClick={handlePrevPage}
        className="z-10 absolute text-white bottom-1/2 left-4 text-2xl md:left-8 font-semibold cursor-pointer hover:text-orange-500"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      </div>

      {/* Right arrow */}
      <div
        onClick={handleNextPage}
        className="z-10 absolute bottom-1/2 text-white right-8 text-2xl md:right-8 font-semibold cursor-pointer hover:text-orange-500"
      >
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentPage
                ? "bg-white opacity-100"
                : "bg-white opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
