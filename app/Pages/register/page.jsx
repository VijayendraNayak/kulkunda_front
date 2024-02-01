"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import RegisterImage from "/app/assets/image/temple.jpg";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "../../Redux/Features/counter/counterslice";
import { setPhoneNumber } from "../../Redux/Features/counter/phoneslice";
import dynamic from "next/dynamic";
import Loader from "../../Components/Loader";


const Register = () => {
  const [formdata, setFormdata] = useState({});
  const [password, showPassword] = useState(true);
  const { loading, error } = useSelector((state) => state.user);
  const [votp, setVotp] = useState(false);
  const [otp, setOtp] = useState("false");
  const [verror, setVerror] = useState(false);
  const [tick, setTick] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleotpChange = (e) => {
    setVotp(true);
    setOtp({ [e.target.id]: e.target.value });
  };

  const togglePassword = () => {
    showPassword(!password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (votp === false) {
      setVerror(true);
      return;
    }
    try {
      dispatch(registerStart());
      const res = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(registerFailure(data.message));
        return;
      }
      router.push("/Pages/login");
      dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(registerFailure(error));
      console.log("catcherr", error);
    }
  };

  const handlesendotp = async (e) => {
    e.preventDefault();
    // Assuming formdata is an object with a property 'phonenumber'
    if (formdata && formdata.phonenumber) {
      const phoneNumber = formdata.phonenumber;
      if (phoneNumber.length >= 5) {
        // Remove the 4th character and merge the parts
        const modifiedPhoneNumber =
          phoneNumber.substring(0, 3) + phoneNumber.substring(4);
        await fetch("/api/otp/send-verification", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phonenumber: modifiedPhoneNumber,
          }),
        });
        // Handle the response as needed
      } else {
        console.error("Invalid phone number length");
      }
    } else {
      console.error("formdata or formdata.phonenumber is undefined");
    }
  };

  const handleverifyotp = async (e) => {
    e.preventDefault();
    if (formdata && formdata.phonenumber) {
      const phoneNumber = formdata.phonenumber;
      const votp = otp.otp;
      console.log(phoneNumber, votp);
      if (phoneNumber.length >= 5) {
        // Remove the 4th character and merge the parts
        const modifiedPhoneNumber =
          phoneNumber.substring(0, 3) + phoneNumber.substring(4);
        const res = await fetch("/api/otp/check-verification", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phonenumber: modifiedPhoneNumber,
            otp: votp, // assuming otp is a variable holding the OTP value
          }),
        });
        const data = await res.json();
        if (data.status === "approved") {
          setTick(true);
          dispatch(setPhoneNumber(phoneNumber))
        }
        setVotp(true);
        // Handle the response as needed
      } else {
        console.error("Invalid phone number length");
      }
    } else {
      console.error("formdata or formdata.phonenumber is undefined");
    }
  };

  return (
    <div className=" my-20 sm:p-10 p-5 flex items-center gap-8">
      {loading && <Loader />}
      <div className="flex-1 relative  hidden sm:flex ">
        <Image
          src={RegisterImage}
          className="rounded-2xl"
          alt="register background image"
          layout="responsive"
          objectFit="cover"
          objectPosition="left"
          priority
        />
      </div>
      <div className=" flex-1 w-full sm:w-[700px] border-2 p-4 sm:p-6 border-orange-500 bg-orange-100 rounded-lg">
        <p className="text-2xl sm:text-4xl font-semibold text-center text-orange-500 mb-4">
          Register
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border p-3 rounded-lg hover:shadow-lg focus:outline-none"
            id="name"
            onChange={handleChange}
          />
          <div className="flex gap-10 ">
            <input
              type="text"
              placeholder="Phone number"
              className={`border p-3 rounded-lg hover:shadow-lg focus:outline-none w-60 ${
                tick ? "border-green-500" : ""
              }`}
              id="phonenumber"
              defaultValue={"+91 "}
              onChange={handleChange}
            />
            {tick && (
              <span className="text-green-500 ml-2 font-extrabold text-xl">
                &#10003; verified
              </span>
            )}

            <button
              className={`p-3 bg-green-500 text-white text-xl hover:bg-green-600 rounded-lg font-semibold ${tick?"hidden":"flex"}`}
              onClick={handlesendotp}
              type="button"
            >
              Send OTP
            </button>
          </div>
          <div className="flex gap-10">
            <input
              type="text"
              placeholder="Enter the OTP"
              className="border p-3 rounded-lg hover:shadow-lg focus:outline-none w-60"
              id="otp"
              onChange={handleotpChange}
            />
            <button
              className={`p-3 bg-blue-500 text-white text-xl hover:bg-blue-600 rounded-lg font-semibold ${tick?"hidden":"flex"}`}
              onClick={handleverifyotp}
              type="button"
            >
              Verify OTP
            </button>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg hover:shadow-lg focus:outline-none"
            id="email"
            onChange={handleChange}
          />
          <div className="relative">
            <input
              type={password ? "password" : "text"}
              placeholder="Password"
              className="border p-3 rounded-lg pr-10 w-full hover:shadow-lg focus:outline-none"
              id="password"
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 hover:shadow-lg focus:outline-none"
            >
              {password ? <IoIosEye /> : <IoIosEyeOff />}
            </button>
          </div>
          <div className="relative">
            <input
              type={password ? "password" : "text"}
              placeholder="Confirm Password"
              className="border p-3 rounded-lg pr-10 w-full hover:shadow-lg focus:outline-none"
              id="confirmpassword"
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 hover:shadow-lg focus:outline-none"
            >
              {password ? <IoIosEye /> : <IoIosEyeOff />}
            </button>
          </div>
          <button
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-3 font-semibold text-xl hover:shadow-lg focus:outline-none"
            onClick={handleSubmit}
            disabled={!votp}
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
        <div className="flex justify-end mt-4">
          <Link href="/Pages/login">
            <span className="text-blue-500 font-bold cursor-pointer hover:underline">
              Have an Account?
            </span>
          </Link>
        </div>
        {error && (
          <p className="text-red-500 text-center font-semibold mt-4">{error}</p>
        )}
        {verror && (
          <p className="text-red-500 text-center font-semibold mt-4">
            The user should Enter the otp to proceed
          </p>
        )}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Register), { ssr: false });
