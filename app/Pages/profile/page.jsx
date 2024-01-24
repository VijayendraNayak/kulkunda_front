"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import {
  updateStart,
  updateFailure,
  updateSuccess,
  signoutStart,
  signoutSuccess,
  signoutFailure,
} from "../../Redux/Features/counter/counterslice";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../firebase";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Loader from "../../Components/Loader";
import dynamic from "next/dynamic";

const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [sevas, setSevas] = useState([]);
  const [formdata, setFormdata] = useState([]);
  const [file, setFile] = useState(null);
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();
  const fileref = useRef(null);
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const id = currentUser?.userId || '';
    setUserId(id);
    setFormdata({
      name: currentUser?.name || "", // Use optional chaining here
      email: currentUser?.email || "",
      avatar: currentUser?.avatar || "",
    });
  }, [currentUser]);

  useEffect(() => {
    // You can use userId here
    console.log(userId);

    // ... (other useEffect logic)
  }, []);

  useEffect(() => {
    const fetchUserSevas = async () => {
      try {
        const response = await fetch(`/api/seva/user/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch sevas');
        }
  
        const data = await response.json();
        setSevas(data.sevas);
      } catch (error) {
        console.error('Error fetching sevas:', error.message);
      }
    };
    const userId = currentUser?._id || '';
    if (userId) {
      fetchUserSevas();
    }
  }, []);
  

  if (loading) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    if (file) {
      handlefileupload(file);
    }
  }, [file]);

  useEffect(() => {
    setLoader(true)
    const isLoggedIn = !!localStorage.getItem('userToken');
    if(!isLoggedIn){router.replace("/Pages/login")}
    setLoader(false)
    const checkcookie=async()=>{
      setLoader(true)
      const res=await fetch("/api/user/checkcookies")
      const data=await res.json()
      if (data.success===false){
        console.log(data.message)
        router.replace("/Pages/login")
        setLoader(false)
        return
      }
      setLoader(false)
    }
    checkcookie()
    setLoader(false)
  }, []);
  

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handlefileupload = async (file) => {
    setLoader(true)
    const storage = getStorage(app);
    const filename = new Date().getTime() + file.name;
    const storageref = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageref, file);

    uploadTask.on("state_changed", () => {
      getDownloadURL(uploadTask.snapshot.ref).then((DownloadURL) => {
        setFormdata({ ...formdata, avatar: DownloadURL });
      });
    });
    setLoader(false)
  };

  const handleSubmit = async (e) => {
    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateFailure(data.message));
        return;
      }
      dispatch(updateSuccess(data.user));
      console.log("here");
      window.location.reload()
    } catch (error) {
      dispatch(updateFailure(error));
    }
  };

  const handlelogout = async () => {
    try {
      dispatch(signoutStart());
      const res = await fetch("/api/user/logout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutFailure(data.message));
        return;
      }
      dispatch(signoutSuccess(data));
      router.replace("/Pages/login");
      window.location.reload()
    } catch (error) {
      dispatch(signoutFailure(error));
    }
  };

  return (
    <div className=" flex sm:flex-row flex-col pt-16 ">
      {(loading ||loader )&& <Loader/>}
      <div className="flex-1 p-10 ">
        <div className="flex flex-col lg:flex-row gap-4 items-center ">
          <div className="">
            <input
              className="hidden"
              accept="image/.*"
              type="file"
              ref={fileref}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <img
              src={formdata?.avatar} // Use optional chaining here
              alt="profile image"
              className="w-44 h-60 rounded-lg no-repeat center object-cover"
              onClick={() => fileref.current.click()}
            />
          </div>
          <div className=" flex flex-col gap-4">
            <form className="flex flex-col gap-4 w-80">
              <input
                type="text"
                placeholder="Username"
                className="border p-3 rounded-lg"
                id="name"
                value={formdata?.name || ""} // Use optional chaining here
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-lg"
                id="email"
                value={formdata?.email || ""} // Use optional chaining here
                onChange={handleChange}
              />
            </form>
            <button
              className="bg-green-500 text-white p-3 rounded-lg font-semibold text-xl"
              onClick={handleSubmit}
            >
              {loading ? "Loading..." : "Update Profile"}
            </button>
            <button
              className="bg-red-500 text-white flex flex-row p-3 justify-center items-center gap-2 rounded-lg font-semibold text-xl"
              onClick={handlelogout}
            >
              <IoLogOutOutline /> Logout
            </button>
            <Link
              className="text-blue-500 font-semibold ml-auto cursor-pointer hover:scale-110"
              href="/Pages/changepass"
            >
              <span>Change passoword?</span>
            </Link>
          </div>
          </div>
      {error && (
          <p className="text-red-500 text-center font-semibold">{error}</p>
        )}
      </div>
      <div className="p-10 w-full sm:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Booked Sevas:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
          {sevas.map((seva) => (
            <div
              key={seva._id}
              className="bg-white bg-opacity-50 p-4 rounded-md mb-4"
            >
              <div>
                <p className="text-lg font-semibold mb-2">Seva Name: {seva.sevaname}</p>
                <p className="text-gray-600 mb-2">User Name: {seva.username}</p>
                <p className="text-gray-600 mb-2">Phone Number: {seva.phonenumber}</p>
                <p className="text-gray-600">Seva Date: {seva.sevadate}</p>
              </div>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default dynamic (() => Promise.resolve(Profile), {ssr: false})
