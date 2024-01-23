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
import dynamic from "next/dynamic";
import Loader from "../../Components/Loader";

const Register = () => {
  const [formdata, setFormdata] = useState({});
  const [password, showPassword] = useState(true);
  const { phoneNumber } = useSelector((state) => state.phone);
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const togglePassword = () => {
    showPassword(!password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      router.replace("/Pages/login");
      dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(registerFailure(error));
      console.log("catcherr", error);
    }
  };

  useEffect(() => {
    // Set phonenumber in formdata if phoneNumber exists
    if (phoneNumber) {
      setFormdata((prevData) => ({ ...prevData, phonenumber: phoneNumber }));
    }
  }, [phoneNumber]);

  return (
    <div className="pt-20 p-5 sm:p-10 flex flex-col items-center">
      {loading && <Loader />}
      <div className="flex-1 relative mb-6 hidden sm:flex">
        <Image
          src={RegisterImage}
          alt="register background image"
          layout="responsive"
          objectFit="cover"
          objectPosition="left"
          priority
        />
      </div>
      <div className="w-full sm:w-[700px] border-2 p-4 sm:p-6 border-orange-500 bg-orange-100 rounded-lg">
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
          <input
            type="text"
            placeholder="Phone number"
            className="border p-3 rounded-lg hover:shadow-lg focus:outline-none"
            id="phonenumber"
            onChange={handleChange}
          />
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
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Register), { ssr: false });
