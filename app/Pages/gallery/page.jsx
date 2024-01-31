// Import necessary modules
"use client"
// Import necessary modules
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Loader from "../../Components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaRegRectangleXmark } from "react-icons/fa6";

const GalleryPage = () => {
  const [mediaData, setMediaData] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [slideshowOpen, setSlideshowOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(Array(50).fill(false)); // Track individual image loading
  const slideshowRef = useRef(null);

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
  };

  const closeSlideshow = () => {
    setSelectedImageIndex(null);
    setSlideshowOpen(false);
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
    <div className="container mx-auto py-20 px-10">
      <div className="font-semibold text-5xl text-black text-center pb-10">
        Gallery
      </div>
      {loading && <Loader />}
      {/* Display Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {mediaData.map((media, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1 hover:opacity-80"
          >
            {media.avatar.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative w-full h-full"
                style={{ cursor: "pointer" }}
                onClick={() => handleImageClick(index)}
              >
                {loading && !imageLoaded[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <Loader />
                  </div>
                )}
                <Image
                  src={image}
                  alt={`Image ${index + 1}-${imageIndex + 1}`}
                  className="object-cover w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-75"
                  width={500}
                  height={500}
                  priority={true}
                  onLoad={() => handleImageLoad(index)} // Close loader once image is loaded
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {slideshowOpen &&
        selectedImageIndex !== null &&
        mediaData[selectedImageIndex]?.avatar && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
            <div className="relative slideshow-container" ref={slideshowRef}>
              <button
                className="absolute top-2 right-2 text-orange-200 text-xl"
                onClick={closeSlideshow}
              >
                <FaRegRectangleXmark />
              </button>
              {mediaData[selectedImageIndex].avatar.map((image, imageIndex) => (
                <Image
                  key={imageIndex}
                  src={image}
                  alt={`Image ${selectedImageIndex + 1}-${imageIndex + 1}`}
                  className="mx-auto d-block rounded-lg border-2 border-orange-500 w-full max-h-full"
                  width={600} // Adjust the width for desktop view
                  height={600} // Adjust the height for desktop view
                  priority={true}
                />
              ))}
              <div
                onClick={handlePrevPage}
                className="z-10 absolute  bottom-1/2 left-4 text-2xl  md:left-8 font-semibold cursor-pointer text-orange-200"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              </div>

              {/* Right arrow */}
              <div
                onClick={handleNextPage}
                className="z-10 absolute bottom-1/2 right-8 text-2xl  md:right-8 font-semibold cursor-pointer text-orange-200"
              >
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </div>
            </div>
          </div>
        )}

      <div className="container mx-auto py-20 px-10">
        <div className="font-semibold text-5xl text-black text-center pb-10">
          Video
        </div>
        <div className="flex items-center justify-center">
          <iframe
            className="w-[1000px] h-[170px] md:h-[350px] lg:h-[600px] rounded-xl"
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