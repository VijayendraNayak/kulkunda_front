// Import necessary modules
"use client";
// Import necessary modules
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Loader from "../../Components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaRegRectangleXmark } from "react-icons/fa6";
import "./styles.css";

const GalleryPage = () => {
  const [mediaData, setMediaData] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [slideshowOpen, setSlideshowOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(Array(50).fill(false)); // Track individual image loading
  const slideshowRef = useRef(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/gallery/allimages");
        const data = await res.json();
        if (data.success === false) {
          console.error(data.message);
          setLoading(false);
          return;
        }
        setLoading(false);
        setMediaData(data.gallery);
        setGalleryOpen(true); // Set galleryOpen to true when data is loaded
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openSlideshow = (index) => {
    setSelectedImageIndex(index);
    setSlideshowOpen(true);
    setGalleryOpen(true); // Set galleryOpen to true when slideshow is opened
  };

  const closeSlideshow = () => {
    setSelectedImageIndex(null);
    setSlideshowOpen(false);
    setGalleryOpen(false); // Set galleryOpen to false when slideshow is closed
  };

  const handlePrevPage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + mediaData.length) % mediaData.length
    );
  };

  const handleNextPage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % mediaData.length);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        slideshowOpen &&
        slideshowRef.current &&
        !slideshowRef.current.contains(event.target)
      ) {
        closeSlideshow();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [slideshowOpen]);

  const handleImageClick = (index) => {
    setLoading(true);
    openSlideshow(index);
    setLoading(false);
  };

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div className="container mx-auto py-20 px-20">
      <div className="font-semibold text-5xl text-black text-center pt-5 sm:pt-2 pb-10">
        Gallery
      </div>
      {loading && <Loader />}
      {/* Display Images */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ${
          galleryOpen ? "grid-opening-animation show" : ""
        }`}
      >
        {mediaData.map((media, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md border-4 border-white-500 hover:opacity-80 transition-transform duration-300 transform-gpu hover:scale-105"
            style={{ width: "100%", height: "300px" }}
          >
            {media.avatar.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative w-full h-full overflow-hidden cursor-pointer group transition-all duration-300 transform-gpu hover:scale-105"
                onClick={() => handleImageClick(index)}
              >
                {loading && !imageLoaded[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Loader />
                  </div>
                )}
                <img
                  src={image}
                  alt={`Image ${index + 1}-${imageIndex + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300"
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  style={{
                    transformOrigin: "50% 50%", // Set transform origin to the center
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {slideshowOpen &&
        selectedImageIndex !== null &&
        mediaData[selectedImageIndex]?.avatar && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center">
            <div
              ref={slideshowRef}
              className="relative slideshow-container mx-auto rounded-lg max-w-screen-lg w-full sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-1/2 sm:h-96"
            >
              <div className="relative w-full h-96 sm:h-96 md:h-96 lg:h-112 border border-4 p-0 rounded-lg border-orange-500">
                <Image
                  src={mediaData[selectedImageIndex].avatar[0]}
                  alt={`Image ${selectedImageIndex + 1}`}
                  className="object-contain w-full h-full bg-black rounded-lg shadow-lg"
                  width={600}
                  height={400}
                  priority={true}
                />
                <button
                  className="absolute top-1 right-1 text-red-600 px-3 py-1 rounded-md cursor-pointer"
                  onClick={closeSlideshow}
                >
                  <FaRegRectangleXmark />
                </button>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrevPage}
                  className="absolute top-1/2 left-6 text-orange-500 text-2xl focus:outline-none bg-transparent hover:scale-105 px-4 py-2 transform -translate-y-1/2"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                  onClick={handleNextPage}
                  className="absolute top-1/2 right-6 text-orange-500 text-2xl focus:outline-none bg-transparent hover:scale-105 px-4 py-2 transform -translate-y-1/2"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        )}

      <div className="container mx-auto py-10 px-4 md:px-0 md:pt-10 flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Heading and Explanation Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/2 mb-6 md:mb-0 sm:w-full order-2 md:order-1">
          <div className="font-semibold text-4xl md:text-5xl text-black pb-4 md:pb-6">
            Video on Kulkunda Shree Basaveshwara Temple
          </div>
          <p className="text-gray-600">
            ಈ ದೇಗುಲದ ಬಸವನ ಹಣೆ ಮೇಲಿದೆ "ಶಿವಲಿಂಗ"..!! ಬಹು ಅಪರೂಪದ ಸಾನಿಧ್ಯ "ಕುಕ್ಕೆ
            ಸುಬ್ರಹ್ಮಣ್ಯ" ಪಕ್ಕದಲ್ಲಿ..!!
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2 sm:h-[200px] md:h-[300px] rounded-xl overflow-hidden mb-10 sm:order-1 md:order-2">
          <iframe
            className="w-full sm:w-4/5 h-full" // Adjusted the width for small screens
            src="https://www.youtube.com/embed/2wf_JJPvOE0"
            title="Example Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
