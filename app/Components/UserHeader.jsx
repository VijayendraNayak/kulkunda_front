// Import necessary modules
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Select from "react-select";

const UserHeader = ({ loading }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();
  const path = usePathname();

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

    if (selectedValue === "aboutTemple") {
      router.push("/Pages/aboutus");
    } else if (selectedValue === "howtoReach") {
      router.push("/Pages/reach");
    }
  };

  const sevasOptions = [
    { value: "", label: "Sevas..." },
    { value: "sevaList", label: "Seva list" },
    { value: "advancedSevaBookings", label: "Advanced seva bookings" },
  ];

  const aboutUsOptions = [
    { value: "", label: "About Us" },
    { value: "aboutTemple", label: "About Temple" },
    { value: "howtoReach", label: "How to Reach" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "transparent", // Set background color
      border: "none",
      borderRadius: "4px",
      width: "120px",
      color: "#FFA500", // Add text color orange-500
      "&:hover": {
        background: "transparent", // Adjust hover background color
        cursor: "pointer",
        textDecoration: "underline",
        color: "#FFA500", // Add text color orange-500 for hover state
      },
    }),
    indicatorSeparator: () => ({
      display: "none", // Remove the indicator separator
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#ffb400", // Adjust color to match your design
      "&:hover": {
        color: "#ff7400", // Adjust hover color
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected || state.isFocused ? "#ff7400" : "transparent",
      color: state.isSelected ? "#fff" : "#FFA500", // Set text color to orange-500
      textDecoration: state.isFocused ? "underline" : "none", // Add underline on hover
      whiteSpace: "nowrap",
      "&:hover": {
        backgroundColor: state.isSelected ? "#ff7400" : "transparent",
        color: state.isSelected ? "#fff" : "#FFA500", // Set text color to orange-500 for hover state
      },
    }),
    menu: (provided) => ({
      ...provided,
      background: "bg-orange-100", // Set the background color to transparent
      border: "1px solid #ffb400", // Adjust border color
      borderRadius: "4px",
      marginTop: "4px", // Adjust menu top margin
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
    }),
  };

  return (
    <header
      className={`bg-orange-100 fixed top-0 left-0 w-full z-50 transition-transform duration-300 transform ${
        isNavVisible ? "translateY(0)" : "-translate-y-full"
      } allow-interaction`}
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
            <li
              className={`hover:underline text-orange-700 hidden sm:flex ${
                path === "/"
                  ? "bg-orange-500 rounded-full p-3 text-white font-semibold"
                  : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Select
            className="hidden sm:flex"
            value={sevasOptions.find(
              (option) => option.value === selectedOption
            )}
            options={sevasOptions}
            onChange={(selected) =>
              handleOptionChange({ target: { value: selected.value } })
            }
            styles={customStyles}
          />

          <Select
            className="hidden sm:flex text-orange-500"
            value={aboutUsOptions.find(
              (option) => option.value === selectedOption
            )}
            options={aboutUsOptions}
            onChange={(selected) =>
              handleOptionChange({ target: { value: selected.value } })
            }
            styles={customStyles}
          />
          <Link href="/Pages/contactus">
            <li
              className={`hover:underline text-orange-700 hidden sm:flex ${
                path === "/Pages/contactus"
                  ? "bg-orange-500 rounded-full p-3 text-white font-semibold"
                  : ""
              }`}
            >
              Contact Us
            </li>
          </Link>
          <Link href="/Pages/gallery">
            <li
              className={`hover:underline text-orange-700 hidden sm:flex ${
                path === "/Pages/gallery"
                  ? "bg-orange-500 rounded-full p-3 text-white font-semibold"
                  : ""
              }`}
            >
              View Gallery
            </li>
          </Link>
          {currentUser ? (
            <Link
              href="/Pages/profile"
              className={`hover:underline text-orange-700 hidden sm:flex ${
                path === "/Pages/profile"
                  ? "bg-orange-500 rounded-full p-1 text-white font-semibold"
                  : ""
              }`}
            >
              <img
                className=" rounded-full w-10 h-10 hidden sm:flex"
                src={currentUser.avatar}
                alt="profile"
              />
            </Link>
          ) : (
            <Link href="/Pages/login">
              <li
                className={`hover:underline text-orange-700 hidden sm:flex ${
                  path === "/Pages/login"
                    ? "bg-orange-500 rounded-full p-3 text-white font-semibold"
                    : ""
                }`}
              >
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
                <li
                  className={`hover:underline text-orange-700 sm:hidden ${
                    path === "/"
                      ? "bg-orange-400 p-2 rounded-lg text-white text-lg"
                      : ""
                  }`}
                  onClick={togglenavbar}
                >
                  Home
                </li>
              </Link>
              <Link href="/Pages/aboutus">
                <li
                  className={`hover:underline text-orange-700 sm:hidden ${
                    path === "/Pages/aboutus"
                      ? "bg-orange-400 p-2 rounded-lg text-white text-lg"
                      : ""
                  }`}
                  onClick={togglenavbar}
                >
                  About The Temple
                </li>
              </Link>
              <Link href="/Pages/reach">
                <li
                  className={`hover:underline text-orange-700 sm:hidden ${
                    path === "/Pages/reach"
                      ? "bg-orange-400 p-2 rounded-lg text-white text-lg"
                      : ""
                  }`}
                  onClick={togglenavbar}
                >
                  How to reach
                </li>
              </Link>
              <Link href="/Pages/seva">
                <li
                  className={`hover:underline text-orange-700 sm:hidden ${
                    path === "/Pages/seva"
                      ? "bg-orange-400 p-2 rounded-lg text-white text-lg"
                      : ""
                  }`}
                  onClick={togglenavbar}
                >
                  Seva list
                </li>
              </Link>
              <Link href="/Pages/advancedseva">
                <li
                  className={`hover:underline text-orange-700 sm:hidden ${
                    path === "/Pages/advancedseva"
                      ? "bg-orange-400 p-2 rounded-lg text-white text-lg"
                      : ""
                  }`}
                  onClick={togglenavbar}
                >
                  Advanced Seva bookings
                </li>
              </Link>
              <Link href="/Pages/contactus">
                <li
                  className={`hover:underline text-orange-700 sm:hidden ${
                    path === "/Pages/contactus"
                      ? "bg-orange-400 p-2 rounded-lg text-white text-lg"
                      : ""
                  }`}
                  onClick={togglenavbar}
                >
                  Contact Us
                </li>
              </Link>
              <Link href="/Pages/gallery">
                <li
                  className={`hover:underline text-orange-700 sm:hidden ${
                    path === "/Pages/gallery"
                      ? "bg-orange-400 p-2 rounded-lg text-white text-lg"
                      : ""
                  }`}
                  onClick={togglenavbar}
                >
                  View Gallery
                </li>
              </Link>
              {currentUser ? (
                <Link href="/Pages/profile">
                  <div
                    className={`flex gap-1 items-center ${
                      path === "/Pages/profile"
                        ? "bg-orange-400 p-2 rounded-lg text-white text-lg"
                        : ""
                    }`}
                  >
                    <Image
                      className=" rounded-full w-10 h-10  sm:hidden"
                      src={currentUser.avatar}
                      alt="profile"
                      priority={true}
                    />
                    <span
                      className={`hover:underline text-orange-700 sm:hidden `}
                      onClick={togglenavbar}
                    >
                      My Profile
                    </span>
                  </div>
                </Link>
              ) : (
                <Link href="/Pages/login">
                  <li
                    className={`hover:underline text-white bg-red-500 rounded-lg p-3 sm:hidden ${
                      path === "/Pages/login"
                        ? "bg-orange-400 p-2 rounded-lg text-white text-lg"
                        : ""
                    }`}
                    onClick={togglenavbar}
                  >
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
