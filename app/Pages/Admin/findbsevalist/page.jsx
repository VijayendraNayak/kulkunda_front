"use client";
import React, { useState, useEffect } from 'react';

const AdminSevaPage = () => {
  const [bookedSevas, setBookedSevas] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

    const fetchBookedSevas = async () => {
      try {
        setLoader(true);
        const response = await fetch('/api/seva/admin/allbookedsevas');
        if (!response.ok) {
          throw new Error('Failed to fetch booked sevas');
        }
        const data = await response.json();
        setLoader(false);
        setBookedSevas(data.sevas);
        console.log(bookedSevas)
      } catch (error) {
        console.error('Error fetching booked sevas:', error);
        setError('Failed to fetch booked sevas. Please try again.');
        setLoader(false);
      }
    };

useEffect(() => {
    setLoader(true);
    fetchBookedSevas();
  }, []);

  
  const handleDelete = async (sevaId) => {
    try {
      setLoader(true);
      const response = await fetch(`/api/seva/admin/delete/${sevaId}`, {
        method: 'DELETE',
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to delete booked seva');
      }
      // If deletion is successful, refetch the updated booked sevas
      setLoader(false);
      fetchBookedSevas();
    } catch (error) {
      console.error('Error deleting booked seva:', error);
      setLoader(false);
    }
  };

  return (
    <div className="pt-24 pb-20 flex flex-col bg-white">
      {loader && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <h1 className="text-3xl font-bold mb-8 mt-12">
        Booked Seva List 
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bookedSevas.map((seva) => (
          <div key={seva._id} className="bg-white rounded-lg shadow-md p-4">
            <p className="text-lg font-semibold mb-2">Seva Name: {seva.sevaname}</p>
            <p className="text-gray-600 mb-2">User ID: {seva.userId}</p>
            <p className="text-gray-600 mb-2">User Name: {seva.username}</p>
            <p className="text-gray-600 mb-2">Phone Number: {seva.phonenumber}</p>
            <p className="text-gray-600 mb-2">Seva Date: {seva.sevadate}</p>
            <p className="text-gray-600 mb-2">Rashi: {seva.rashi}</p>
            <p className="text-gray-600 mb-2">Nakshatra: {seva.nakshatra}</p>
            <p className="text-gray-600 mb-2">Gotra: {seva.gotra}</p>
            <button
              onClick={() => handleDelete(seva._id)}
              className="text-white bg-red-600 border-0 py-2 px-4 rounded-md mt-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSevaPage;
