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
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const fileref = useRef(null);
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [isFormModified, setIsFormModified] = useState(false);

  useEffect(() => {
    const id = currentUser?.userId || "";
    setUserId(id);
    setFormdata({
      name: currentUser?.name || "", // Use optional chaining here
      email: currentUser?.email || "",
      avatar: currentUser?.avatar || "",
    });
  }, [currentUser]);

  useEffect(() => {
    const fetchUserSevas = async () => {
      try {
        setLoader(true);
        const response = await fetch(`/api/seva/user/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch sevas");
        }

        const data = await response.json();
        setLoader(false);
        setSevas(data.sevas);
      } catch (error) {
        console.error("Error fetching sevas:", error.message);
        setLoader(false);
      }
      setIsFormModified(false);
    };
    const userId = currentUser?._id || "";
    if (userId) {
      fetchUserSevas();
    }
  }, [userId]);

  useEffect(() => {
    if (file) {
      setLoader(true);
      handlefileupload(file);
    }
  }, [file]);

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("userToken");
    if (!isLoggedIn) {
      router.push("/Pages/login");
    } else {
      checkcookie();
    }
  }, []);

  const checkcookie = async () => {
    try {
      setLoader(true);
      const res = await fetch("/api/user/checkcookies");
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        router.push("/Pages/login");
      }
    } catch (error) {
      console.error("Error checking cookie:", error);
    } finally {
      setLoader(false);
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
    setIsFormModified(true);
  };

  const handlefileupload = async (file) => {
    try {
      setLoader(true)
      const storage = getStorage(app);
      const filename = new Date().getTime() + file.name;
      const storageref = ref(storage, filename);
      const uploadTask = uploadBytesResumable(storageref, file);
  
      uploadTask.on("state_changed", {
        complete: () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              setFormdata((prevData) => ({ ...prevData, avatar: downloadURL }));
              setIsFormModified(true);
              setLoader(false)
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
              setLoader(false)
              // Handle error getting download URL
            });
        },
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      setLoader(false)
      // Handle error uploading file
    } finally {
      setLoader(false);
    }
  };
  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
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
      router.push("/Pages/login");
    } catch (error) {
      dispatch(signoutFailure(error));
    }
  };

  return (
    <div className="flex sm:flex-row flex-col pt-16">
      {(loading || loader) && <Loader />}
      <div className="flex-1 p-10">
        <p className="text-sm text-gray-500 mb-2">
          Click on the fields below to update your credentials:
        </p>
        <div className="flex flex-col lg:flex-row gap-4 items-center hover:cursor-pointer">
          <div className="">
            <input
              className="hidden"
              accept="image/.*"
              type="file"
              ref={fileref}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <img
              src={formdata?.avatar}
              alt="profile image"
              className="w-44 h-60 rounded-lg no-repeat center object-cover"
              onClick={() => fileref.current.click()}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <form className="flex flex-col gap-4 w-80">
                <input
                  type="text"
                  placeholder="Username"
                  className="border p-3 rounded-lg"
                  id="name"
                  value={formdata?.name || ""}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-3 rounded-lg"
                  id="email"
                  value={formdata?.email || ""}
                  onChange={handleChange}
                />
              </form>
            </div>
            <button
              className={`bg-green-500 ${
                !isFormModified ? "bg-green-300" : "hover:bg-green-700"
              } text-white p-3 rounded-lg font-semibold text-xl`}
              onClick={handleSubmit}
              disabled={!isFormModified}
            >
              {loading ? "Loading..." : "Update Profile"}
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white flex flex-row p-3 justify-center items-center gap-2 rounded-lg font-semibold text-xl"
              onClick={handlelogout}
            >
              <IoLogOutOutline /> Logout
            </button>
          </div>
        </div>
        <Link
          className="text-blue-500 font-semibold cursor-pointer hover:text-blue-700 flex justify-end "
          href="/Pages/changepass"
        >
          <span>Change password?</span>
        </Link>
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
                <p className="text-lg font-semibold mb-2">
                  Seva Name: {seva.sevaname}
                </p>
                <p className="text-gray-600 mb-2">User Name: {seva.username}</p>
                <p className="text-gray-600 mb-2">
                  Phone Number: {seva.phonenumber}
                </p>
                <p className="text-gray-600">Seva Date: {seva.sevadate}</p>
                <p className="text-gray-600">Rashi: {seva.rashi}</p>
                <p className="text-gray-600">Nakshatra: {seva.nakshatra}</p>
                <p className="text-gray-600">Gotra: {seva.gotra}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
