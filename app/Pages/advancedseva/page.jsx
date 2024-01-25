"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSevaName } from "../../Redux/Features/counter/sevaslice";


const page = () => {
  const [sevaname, setSevaname] = useState(null);
  const handleBookSeva = (name) => {
    router.replace("/Pages/sevabookinform");
    setSevaname(name);
    dispatch(setSevaName(name));
  };
  const router = useRouter();
  const dispatch = useDispatch();
  return <div></div>;
};

export default page;
