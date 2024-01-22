// Assuming this is your complete component file (e.g., GalleryPage.js)
"use client";
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Importing images statically
import Temple13 from "/app/assets/image/temple13.jpg";
import Temple14 from "/app/assets/image/temple14.jpg";
import Temple15 from "/app/assets/image/temple15.jpg";


const GalleryPage = () => {
  const router = useRouter();
  const [formdata, setFormdata] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("/api/gallery/admin/noofimg");
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormdata(data.gallery);
    };
    fetchdata();
  }, []);

  const openSlideshow = (index) => {
    setSelectedImageIndex(index);
  };

  const closeSlideshow = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="container mx-auto py-20 px-10">
      <div className="font-semibold text-5xl text-orange-500 text-center pb-10">
        Gallery
      </div>
      <div className='d-block h-full w-full' align="center">
        <div className='w-full'>
          <div className='bg-ora p-5 rounded-md hover:scale-105'>
            <div className='bg-orange-100 border-2 border-orange-500 p-6 rounded-lg shadow-md'>
              <div className='flex w-full lg:w-1/3 md:w-1/2 mb-5 md:mb-5 lg:mb-5 gap-10 ' align="center">
                <div className='gap-10' onClick={() => openSlideshow(0)}>
                  <Image
                    src={Temple13}
                    className='mx-auto d-block rounded-lg border-2 border-orange-500 w-full max-h-full cursor-pointer'
                    alt="Temple 13"
                    width={500}
                    height={250}
                  />
                </div>
                <div className='gap-10' onClick={() => openSlideshow(1)}>
                  <Image
                    src={Temple14}
                    className='mx-auto d-block rounded-lg border-2 border-orange-500 w-full h-full cursor-pointer'
                    alt="Temple 14"
                    width={500}
                    height={250}
                  />
                </div>
                <div className='gap-10' onClick={() => openSlideshow(2)}>
                  <Image
                    src={Temple15}
                    className='mx-auto d-block rounded-lg border-2 border-orange-500 w-full h-full cursor-pointer'
                    alt="Temple 15"
                    width={500}
                    height={250}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative">
            <button className="absolute top-2 right-2 text-white text-xl" onClick={closeSlideshow}>
              Close
            </button>
            <Image
              src={formdata[selectedImageIndex].avatar}
              className='mx-auto d-block rounded-lg border-2 border-orange-500 w-full max-h-full'
              alt={`Temple ${selectedImageIndex + 13}`}
              width={800}
              height={400}
            />
          </div>
        </div>
      )}

      <div className="container mx-auto py-20 px-10">
        <div className="font-semibold text-5xl text-orange-500 text-center pb-10">
          Videos
        </div>
        <div className="flex items-center justify-center">
          <iframe width="935" height="526" src="https://www.youtube.com/embed/2wf_JJPvOE0" title="ಈ ದೇಗುಲದ ಬಸವನ ಹಣೆ ಮೇಲಿದೆ &quot;ಶಿವಲಿಂಗ&quot;..!! ಬಹು ಅಪರೂಪದ ಸಾನಿಧ್ಯ &quot;ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ&quot; ಪಕ್ಕದಲ್ಲಿ..!! ♥💫" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {formdata.map((image, index) => (
          <div
            key={image._id}
            className="relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1 hover:opacity-80"
          >
            <img
              src={image.avatar}
              alt={image.title}
              className="object-cover w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-75 cursor-pointer"
              onClick={() => openSlideshow(index)}
            />
            <div className="p-4">
              <p className="text-lg font-semibold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
