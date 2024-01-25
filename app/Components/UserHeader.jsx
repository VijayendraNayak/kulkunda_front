"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const UserHeader = ({ loading }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (!loading) {
      setIsNavVisible(
        currentScrollPos < prevScrollPos || currentScrollPos < 100
      );
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setNavbar(false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, loading]);

  const togglenavbar = () => {
    setNavbar(!navbar);
  };
  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    // Redirect based on the selected option
    if (selectedValue === "sevaList") {
      router.push("/Pages/seva");
    } else if (selectedValue === "advancedSevaBookings") {
      router.push("/Pages/advancedseva");
    }
  };
  return (
    <header
      className={`bg-orange-100 fixed top-0 left-0 w-full z-50 transition-transform duration-300 transform ${
        isNavVisible ? "translateY(0)" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between p-3 max-w-6xl w-full mx-auto items-center">
        <Link href="/">
          <div
            className={`font-bold gap-1 text-sm sm:text-md sm:flex ${
              navbar ? "hidden" : "flex"
            }`}
          >
            <span className="text-orange-300 text-md sm:text-xl">
              Kulkunda Shree
            </span>
            <span className="text-orange-500 text-md sm:text-xl">
              Basaveshwara Temple
            </span>
          </div>
        </Link>
        <ul className={`lg:flex md:flex gap-6 lg:items-center font-semibold`}>
          <Link href="/">
            <li className="hover:underline text-orange-700 hidden sm:flex">
              Home
            </li>
          </Link>
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="bg-transparent text-orange-700 hidden sm:flex
             font-semibold hover:none"
          >
            <option
              value=""
              className="hover:underline text-orange-700 hidden sm:flex p-3"
            >
              Sevas
            </option>
            <option
              value="sevaList"
              className="hover:underline text-orange-700 hidden sm:flex p-3"
            >
              Seva list
            </option>
            <option
              value="advancedSevaBookings"
              className="hover:underline text-orange-700 hidden sm:flex p-3"
            >
              Advanced seva bookings
            </option>
          </select>
          <Link href="/Pages/aboutus">
            <li className="hover:underline text-orange-700 hidden sm:flex">
              About
            </li>
          </Link>
          <Link href="/Pages/contactus">
            <li className="hover:underline text-orange-700 hidden sm:flex">
              Contact
            </li>
          </Link>
          <Link href="/Pages/gallery">
            <li className="hover:underline text-orange-700 hidden sm:flex">
              Gallery
            </li>
          </Link>

          {currentUser ? (
            <Link href="/Pages/profile">
              <img
                className=" rounded-full w-10 h-10 hidden sm:flex"
                src={currentUser.avatar}
                alt="profile"
              />
            </Link>
          ) : (
            <Link href="/Pages/login">
              <li className="hover:underline text-orange-700 hidden sm:flex">
                Sign in
              </li>
            </Link>
          )}
        </ul>
        <button
          className=" sm:hidden text-orange-700 focus:outline-none"
          onClick={togglenavbar}
        >
          {navbar ? " " : "☰"}
        </button>
        {navbar && (
          <div className="w-full flex flex-col gap-4">
            <Link href="/">
              <h1 className="font-bold text-sm">
                <span className="text-orange-300 text-md">Kulkunda Shree</span>
                <span className="text-orange-500 text-md">
                  Basaveshwara Temple
                </span>
              </h1>
            </Link>
            <ul className={`flex flex-col gap-3 font-semibold`}>
              <Link href="/">
                <li className="hover:underline text-orange-700 sm:hidden">
                  Home
                </li>
              </Link>
              <Link href="/Pages/seva">
                <li className="hover:underline text-orange-700 sm:hidden">
                  Seva list
                </li>
              </Link>
              <Link href="/Pages/advancedseva">
                <li className="hover:underline text-orange-700 sm:hidden">
                  Advanced Seva bookings
                </li>
              </Link>
              <Link href="/Pages/aboutus">
                <li className="hover:underline text-orange-700 sm:hidden">
                  About
                </li>
              </Link>
              <Link href="/Pages/contactus">
                <li className="hover:underline text-orange-700 sm:hidden">
                  Contact
                </li>
              </Link>
              <Link href="/Pages/gallery">
                <li className="hover:underline text-orange-700 sm:hidden">
                  Gallery
                </li>
              </Link>
              {/* <Link href="/Pages/News">
                <li className="hover:underline text-orange-700 hidden sm:flex">
                  News&Updates
                </li>
              </Link> */}
              {currentUser ? (
                <Link href="/Pages/profile">
                  <div className="flex gap-1 items-center">
                    <img
                      className=" rounded-full w-10 h-10  sm:hidden"
                      src={currentUser.avatar}
                      alt="profile"
                    />
                    <span className="hover:underline text-orange-700 sm:hidden">My Profile</span>
                  </div>
                </Link>
              ) : (
                <Link href="/Pages/login">
                  <li className="hover:underline text-white bg-red-500 rounded-lg p-3 sm:hidden">
                    Sign in
                  </li>
                </Link>
              )}
              <button
                className="absolute top-0 right-0 mr-3 mt-3 text-white text-md focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-110 bg-red-500  "
                onClick={togglenavbar}
              >
                <span className="p-2">&times;</span>
              </button>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default dynamic(() => Promise.resolve(UserHeader), { ssr: false });
