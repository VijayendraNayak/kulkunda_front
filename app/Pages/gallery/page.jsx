// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from 'next/image';
// import pallakki from "/app/assets/image/Pallakki.jpg"

// const page = () => {
//   const router = useRouter();
//   const [formdata, setFormdata] = useState([]);
//   useEffect(() => {
    
//     const fetchdata = async () => {
//       const res = await fetch("/api/gallery/noofimg");
//       const data = await res.json();
//       if (data.success === false) {
//         console.log(data.message);
//         return;
//       }
//       setFormdata(data.gallery);
//     };
//     fetchdata();
//   }, []);

//   return (
//     <div className="container mx-auto py-20 px-10">
//       <div className="font-semibold text-6xl text-orange-500 text-center pb-10">
//         Gallery
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {formdata.map((image) => (
//           <div
//             key={image._id}
//             className="relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1 hover:opacity-80"
//           >
//             <img
//               src={image.pallakki}
//               alt={image.title}
//               className="object-cover w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-75"
//             />
//             <div className="p-4">
//               <p className="text-lg font-semibold">{image.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";
import Temple13 from "/app/assets/image/temple13.jpg"
import Temple14 from "/app/assets/image/temple14.jpg"
import Temple15 from "/app/assets/image/temple15.jpg"
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [formdata, setFormdata] = useState([]);
  useEffect(() => {
    
    const fetchdata = async () => {
      const res = await fetch("/api/gallery/admin/noofimg");
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormdata(data.gallery);
    };
    fetchdata();
  }, []);
  return (
    <div className="container mx-auto py-20 px-10" height={300} width={500}>
      <div className="font-semibold text-5xl text-orange-500 text-center pb-10">
        Gallery
      </div>
      <div className='d-block h-full w-full' align="center"   >
       
       
        <div className='w-full'>
          <div className='bg-ora p-5 rounded-md hover:scale-105'>
            <div className='bg-orange-100 border-2 border-orange-500 p-6 rounded-lg shadow-md'>
            <div className=' flex w-full lg:w-1/3 md:w-1/2 mb-5 md:mb-5 lg:mb-5 gap-10 ' align="center">
        <div class='gap-10'>
       <Image
         src={Temple13}
         className='mx-auto d-block rounded-lg border-2 border-orange-500 w-full max-h-full'
         alt="third background image"
         width={500}
         height={250}
       />
      </div>
    <div class='gap-10'>
    <Image
      src={Temple14}
      className='mx-auto d-block rounded-lg border-2 border-orange-500 w-full h-full'
      alt="third background image"
      width={500}
      height={250}
    />
    </div>
    <div class='gap-10'>
    <Image
      src={Temple15}
      className='mx-auto d-block rounded-lg border-2 border-orange-500 w-full h-full'
      alt="third background image"
      width={500}
      height={250}
    />
    </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-20 px-10">
      <div className="font-semibold text-5xl text-orange-500 text-center pb-10">
      <div className='bg-orange-100 border-2 border-orange-500 p-6 rounded-lg shadow-md'>
      <div className='flex w-full items-center justify-center mb-5 md:mb-5 lg:mb-5 gap-10 text-center'>
   Videos
</div>

<div className="flex items-center justify-center">
   <iframe width="935" height="526" src="https://www.youtube.com/embed/2wf_JJPvOE0" title="ಈ ದೇಗುಲದ ಬಸವನ ಹಣೆ ಮೇಲಿದೆ &quot;ಶಿವಲಿಂಗ&quot;..!! ಬಹು ಅಪರೂಪದ ಸಾನಿಧ್ಯ &quot;ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ&quot; ಪಕ್ಕದಲ್ಲಿ..!! ♥💫" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
      </div>
      
     
      
  </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {formdata.map((image) => (
          <div
            key={image._id}
            className="relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1 hover:opacity-80"
          >
            <img
              src={image.avatar}
              alt={image.title}
              className="object-cover w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-75"
            />
            <div className="p-4">
              <p className="text-lg font-semibold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default page;