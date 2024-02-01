"use client"
import Image from "next/image";

import Temple12 from "/app/assets/image/temple12.png";
import Loader from "../../Components/Loader";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const [loader, setLoader] = useState(false);
  const {langName}=useSelector(state=>state.lang)
  return (
    <div className="pt-10 pb-10 lg:pt-20 ">
      {loader && <Loader />}
      <div
        className={`flex flex-col gap-4 px-4 md:px-8 ${langName==="Kannada"?"hidden":"flex"}`}
      >
      <div className="flex flex-col items-center pb-5">
        <p className="text-3xl lg:text-5xl text-center font-semibold text-black py-4 px-4 underline md:mx-auto">
            How to Reach..
        </p>
      </div>
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-2 w-full md:h-60 rounded-3xl p-2">
          <div className="w-full h-full md:w-2/3 p-2 gap-2 flex flex-col">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              <span className="block">
                By train: If arriving by train, travel to Subrahmanya Road,
                accessible from Karwar, Mangaluru, Bengaluru, Hassan, Hubballi,
                and Vijayapura. KSRTC buses from Subrahmanya Road station or
                auto rickshaws can take you to Kulkunda.
              </span>
              <br></br>
              <span className="block">
                By flight: The nearest airport is Mangaluru International
                Airport, 108 km away. Flights from Bengaluru, Hyderabad,
                Chennai, Mumbai, Pune, Delhi, and Gulf cities operate to
                Mangaluru. From Mangaluru, you can reach Kulkunda by road or
                train.
              </span>
              <br></br>
              <span className="block">
                By Bus: The nearest bus station is Mangalore.
              </span>
            </p>
          </div>
          <div className="w-full md:w-1/3 p-1 rounded-lg">
            <Image
              className="w-full h-full object-cover lg:rounded-tl-full lg:rounded-bl-full rounded-3xl border-1 lg:hover:scale-105 mt-10"
              src={Temple12}
              alt="image here"
              height={800}
              width={700}
              priority={true}
            />
          </div>
        </div>
      </div>

      {/* Kannada  */}
      <div
        className={`flex flex-col gap-4 px-4 md:px-8 ${langName==="English"?"hidden":"flex"}`}
      >
      <div className="flex flex-col items-center pb-5">
        <span className="text-3xl lg:text-5xl text-center font-semibold text-black py-4 px-4 underline md:mx-auto">
            ಹೇಗೆ ಹೋಗಬಹುದು?
        </span>
      </div>
        <div className="flex flex-col md:flex-row gap-2 w-full md:h-60 rounded-3xl p-2">
          <div className="w-full md:w-2/3 p-2 gap-2 flex flex-col">
            <p className="text-sm md:text-base lg:text-lg text-justify break-words text-wrap">
              <span className="block">
              ರೈಲು ಮೂಲಕ:
              <br></br>
            ರೈಲಿನಲ್ಲಿಕಾರವಾರ,ಮಂಗಳೂರು,ಬೆಂಗಳೂರು,ಹಾಸನ,ಹುಬ್ಬಳ್ಳಿ,ವಿಜಯಪುರ,ಕಣ್ಣೂರು,ಕಾಸರಗೋಡಿನಿಂದ ನೇರ ರೈಲುಗಳ ಮೂಲಕ ಸುಬ್ರಹ್ಮಣ್ಯ ರೋಡ್ ರೈಲು ನಿಲ್ದಾಣಕ್ಕೆ ಪ್ರಯಾಣಿಸಿ,ಅಲ್ಲಿಂದ 
              ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ಸುಗಳು,ಜೀಪುಗಳು ಅಥವಾ ಆಟೋ ರಿಕ್ಷಾಗಳ ಮೂಲಕ 12 ಕಿಲೋಮೀಟರು ದೂರದಲ್ಲಿರುವ ಕುಲ್ಕುಂದ, ಸುಬ್ರಹ್ಮಣ್ಯಕ್ಕೆ ಪ್ರಯಾಣಿಸಬಹುದು.   
              </span>
              <br></br>
              <span className="block">
              ವಿಮಾನದ ಮೂಲಕ:
              <br></br>
              ಹತ್ತಿರದ ವಿಮಾನ ನಿಲ್ದಾಣವೆಂದರೆ 108 ಕಿಮೀ ದೂರದಲ್ಲಿರುವ ಮಂಗಳೂರು ಅಂತರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ. 
              ಬೆಂಗಳೂರು,ಹೈದರಾಬಾದ್,ಚೆನ್ನೈ,ಮುಂಬೈ,ಪುಣೆ,ದೆಹಲಿ ಮತ್ತು ಗಲ್ಫ್ ನಗರಗಳಿಂದ ಮಂಗಳೂರಿಗೆ ವಿಮಾನಗಳು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ. 
              ಮಂಗಳೂರಿನಿಂದ ಕುಲ್ಕುಂದವನ್ನು ರಸ್ತೆ ಅಥವಾ ರೈಲಿನ ಮೂಲಕ ತಲುಪಬಹುದು.

              </span>
            </p>
          </div>
          <div className="w-full md:w-1/3 p-1 rounded-lg">
            <Image
              className="w-full h-full object-cover rounded-3xl lg:rounded-tl-full lg:rounded-bl-full border-1 lg:hover:scale-105 mt-10"
              src={Temple12}
              alt="image here"
              height={800}
              width={700}
              priority={true}
            />
          </div>
        </div>
      </div>
      {/*map*/}
        <div className="flex mt-8 p-4 justify-center rounded-lg ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.3518917216397!2d75.6071434!3d12.690440299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4e6a6152c4c59%3A0x848a6ae907e47652!2sShree%20Basaveshwara%20Temple!5e0!3m2!1sen!2sin!4v1703072760786!5m2!1sen!2sin"
            width="800"
            height="600"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
