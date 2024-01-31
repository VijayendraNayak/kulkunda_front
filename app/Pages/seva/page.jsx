"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Entrance from "/app/assets/image/entrance.jpg";
import Loader from "../../Components/Loader";
import "../../Components/Scrollbar.css";
import { useSelector } from "react-redux";

const SevaPage = () => {
  const [formdata, setFormdata] = useState(null);
  const [loader, setLoader] = useState(false);
  const {langName}=useSelector(state=>state.lang)


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



  return (
    <div className="pt-20">
      {
        loader && <Loader/>
      }
      <p className="text-black lg:text-6xl text-3xl text-center font-bold" style={{ textDecoration: 'none', fontFamily: 'Roboto' }}>
        Seva Served Here
      </p>
      <div className="flex flex-row">
        <div
          className="flex-1 p-2 px-8 overflow-y-auto custom-scrollbar" 
          style={{ maxHeight: "500px" }}
        >
          {formdata &&
            formdata.map((seva) => (
              <div
                key={seva._id}
                className="flex text-center justify-center w-full h-28 border-2 border-orange-400 mb-8 rounded-lg bg-orange-100 cursor-pointer relative  hover:scale-105" // Updated this line
              >
                <div className="flex flex-col">
                  <div className="font-semibold text-xl p-4 ">
                    {langName === "English"
                      ? seva.sevanamee
                      : seva.sevanamek
                      }
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
