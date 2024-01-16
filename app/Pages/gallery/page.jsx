"use client";
import Temple2 from "/app/assets/image/temple13.jpg"
import Temple from "/app/assets/image/temple.jpg"
import Temple3 from "/app/assets/image/temple14.jpg"
import Temple4 from "/app/assets/image/temple15.jpg"
import Temple6 from "/app/assets/image/temple6.jpg"
import Temple7 from "/app/assets/image/temple7.jpg"
import Temple9 from "/app/assets/image/temple9.jpg"
import Image from 'next/image';
import React, { useRef, useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperSlide

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


import { Pagination, Navigation } from 'swiper/modules';

import { useRouter } from "next/navigation";




const page = () => {
  const router = useRouter();
  const [formdata, setFormdata] = useState([]);
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
  return (
   
    <>
    <div className='w-full mt-11'>
          <div className='bg-ora p-5 rounded-md hover:scale-105'>
            <div className='bg-orange-100 border-2 border-orange-500 p-6 rounded-lg shadow-md'width="1000px">
              <h1 className='text-orange-500 text-2xl font-semibold  'align="center">Gallery and Video</h1>
             
            </div>
          </div>
        </div>
      
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      background-color="red"
    >
      <SwiperSlide>
        <Image
        src={Temple}
        alt="Temple picture"
        

        />
      </SwiperSlide >
      <SwiperSlide >
      <Image
      
        src={Temple2}
        alt="Temple picture"
        height={500}
        width={600}

        />
      </SwiperSlide>
      <SwiperSlide>
      <Image
      
      src={Temple3}
      alt="Temple picture"
      height={500}
      width={600}

      />

      </SwiperSlide>
      <SwiperSlide>
      <Image
      
      src={Temple4}
      alt="Temple picture"
      height={500}
      width={600}

      />
      </SwiperSlide>
      <SwiperSlide>
      <Image
      
      src={Temple7}
      alt="Temple picture"
      height={500}
      width={600}

      />
      </SwiperSlide>
      <SwiperSlide>
      <Image
      
      src={Temple9}
      alt="Temple picture"
      height={500}
      width={600}

      />
      </SwiperSlide>
      <SwiperSlide>
      <iframe width="" height="" src="https://www.youtube.com/embed/2wf_JJPvOE0" title="ಈ ದೇಗುಲದ ಬಸವನ ಹಣೆ ಮೇಲಿದೆ &quot;ಶಿವಲಿಂಗ&quot;..!! ಬಹು ಅಪರೂಪದ ಸಾನಿಧ್ಯ &quot;ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ&quot; ಪಕ್ಕದಲ್ಲಿ..!! ♥💫" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {/* <Image
     
      src={Temple9}
      alt="Temple picture"
      height={500}
      width={600}

      /> */}
      </SwiperSlide>
      
    </Swiper>
  </>
   
     );
};

export default page;