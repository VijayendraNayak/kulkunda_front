"use client";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast, Toaster } from "react-hot-toast";
import Loader from "../../Components/Loader";

// Main component
const App = () => {
  // State variables
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState("");
  const [suc, setSuc] = useState(false);

  // JSX structure
  return (
    <section className="bg-orange-400 flex items-center justify-center h-screen">
      <div>
        {loading && <Loader />}
        <Toaster toastOptions={{ duration: 4000 }} />
        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
          <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
            Welcome to <br />
            <span className="font-bold">KULKUNDA SHREE BASAVESHWARA TEMPLE</span>
          </h1>
          {showOTP ? (
            <>
              {/* Removed OTP functionality UI */}
            </>
          ) : (
            <>
              <div className="bg-white text-orange-400 w-fit mx-auto p-4 rounded-full">
                <BsTelephoneFill size={30} />
              </div>
              <label
                htmlFor=""
                className="font-bold text-xl text-white text-center"
              >
                Verify your phone number
              </label>
              <PhoneInput country={"in"} value={phone} onChange={setPhone} />
              <button
                onClick={() => {}}
                className="bg-orange-500 w-full flex gap-1 items-center justify-center py-2.5 hover:scale-105 text-white rounded-lg"
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Send code via SMS</span>
              </button>
              {/* Captcha button below */}
              <div id="recaptcha"></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default App;
