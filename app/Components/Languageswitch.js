"use client"
import React, { useState } from 'react'

const languageswitch = () => {
    const [lang,setLang]=useState("English")
const toggleclick=()=>{
    if(lang==="English"){
        setLang("Kannda")
    }
    else{
        setLang("English")
    }
}

  return (
    <div>
        <div className='fixed h-16 w-16 bg-white rounded-full right-0 bottom-0 m-4 shadow-2xl text-center flex justify-center items-center font-bold text-xl text-orange-500' onClick={toggleclick}>
        {lang==="English"? "ಕ":"A"}
        </div>
    </div>
  )
}

export default languageswitch