import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col lg:flex-row justify-center px-4 lg:px-10 mt-4 lg:mt-10">
      <div className="p-2 flex flex-col gap-4 items-center justify-center lg:w-1/3 text-center">
        <p className="text-xl lg:text-2xl font-bold text-orange-500">ISCODERZ</p>
        <p className="text-sm lg:text-md">&copy; All rights reserved @ Iscoderz</p>
        <p className="text-sm lg:text-md">Phone: <a href="tel:9482624747">9482624747</a></p>
      </div>
    </div>
  );
  
};


export default Footer;
