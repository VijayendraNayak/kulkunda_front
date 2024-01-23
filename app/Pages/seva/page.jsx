"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSevaName } from "../../Redux/Features/counter/sevaslice";
import Image from "next/image";
import Entrance from "/app/assets/image/entrance.jpg";
import Loader from "../../Components/Loader";


const SevaPage = () => {
  const [language, setLanguage] = useState("english");
  const [formdata, setFormdata] = useState(null);
  const [sevaname, setSevaname] = useState(null);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const getdata = async () => {
      try {
        setLoader(true);
        const res = await fetch("/api/sevalist/getdata");
        const data = await res.json();
        if (data.success === false) {
          setLoader(false);
          return;
        }
        setFormdata(data.sevas);
        setLoader(false)
      } catch (error) {
        console.error("Error fetching Seva data:", error);
        setLoader(false)
      }
    };
    getdata();
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleBookSeva = (name) => {
    router.replace("/Pages/sevabookinform");
    setSevaname(name);
    dispatch(setSevaName(name));
  };

  return (
    <div className="pt-20">
      {
        loader && <Loader/>
      }
      <p className="text-black lg:text-6xl text-3xl text-center font-bold" style={{ textDecoration: 'none', fontFamily: 'Roboto' }}>
        Seva Served Here
      </p>
      <div className="flex justify-end pr-8 mb-4">
        <label className="hidden md:block text-lg mr-2 font-serif">Select Language:</label>
        <select
          className="border p-1 rounded-md bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 focus:outline-none focus:ring focus:border-blue-300"
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="english">English</option>
          <option value="kannada">ಕನ್ನಡ</option>
          <option value="hindi">हिंदी</option>
        </select>
      </div>

      <div className="flex flex-row">
        <div
          className="flex-1 p-2 px-8 overflow-y-auto"
          style={{ maxHeight: "500px" }}
        >
          {formdata &&
            formdata.map((seva) => (
              <div
                key={seva._id}
                className="flex text-center justify-center w-full h-28 border-2 border-orange-400 mb-8 rounded-lg bg-orange-100 cursor-pointer relative  hover:scale-105" // Updated this line
              >
                <div className="flex flex-col">
                  <div className="font-semibold text-xl p-4">
                    {language === "english"
                      ? seva.sevanamee
                      : language === "kannada"
                      ? seva.sevanamek
                      : seva.sevanameh}
                  </div>
                  <div className="font-semibold text-xl px-4 text-green-500">
                    ₹{seva.price}/-
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex-1 relative hidden md:block">
          <Image
            src={Entrance}
            alt="entrance"
            layout="fill"
            className="p-5"
            objectFit="cover"
            objectPosition="right"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SevaPage;
