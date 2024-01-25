"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const GalleryPage = () => {
  const [mediaData, setMediaData] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [slideshowOpen, setSlideshowOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
              <Image
                key={imageIndex}
                src={image}
                alt={`Image ${index + 1}-${imageIndex + 1}`}
                className="object-cover w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-75 cursor-pointer"
                onClick={() => openSlideshow(index)}
                width={500}
                height={500}
              />
            ))}
          </div>
        ))}
      </div>

      {slideshowOpen &&
        selectedImageIndex !== null &&
        mediaData[selectedImageIndex]?.avatar && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-white text-xl"
                onClick={closeSlideshow}
              >
                Close
              </button>
              {mediaData[selectedImageIndex].avatar.map((image, imageIndex) => (
                <Image
                  key={imageIndex}
                  src={image}
                  alt={`Image ${selectedImageIndex + 1}-${imageIndex + 1}`}
                  className="mx-auto d-block rounded-lg border-2 border-orange-500 w-full max-h-full"
                  width={250} // Set the width to 50% of the original size
                  height={250} // Set the height to 50% of the original size
                />
              ))}
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
