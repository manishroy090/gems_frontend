"use client";

import React, { useEffect, useRef, useState } from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const ProfilePictureUpload = ({ setValue, register, imaged }) => {
  let [image, setImage] = useState();
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];


    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setValue('image', file, { shouldValidate: true });
      setImage(imageUrl);
    }
  };

  useEffect(() => {
    if (imaged) {
      setImage(`http://localhost:8080/uploads/doctors/${imaged}`)

    }
  }, [imaged])
  return (
    <div className="flex justify-center">
      <div className="relative group">
        {/* Profile Image */}
        <div
          className="w-32 h-32 rounded-full overflow-hidden border-4 border-white 
          shadow-lg ring-2 ring-gray-100 bg-gray-100"
        >
          <img
            src={
              image ||
              "https://ui-avatars.com/api/?name=User&background=e5e7eb&color=374151&size=256"
            }
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="absolute inset-0 rounded-full bg-black/30 opacity-0 
          group-hover:opacity-100 transition duration-300 
          flex items-center justify-center cursor-pointer"
        >
          <div
            className="w-10 h-10 rounded-full bg-white flex items-center 
            justify-center shadow-md"
          >
            <CameraAltOutlinedIcon className="text-gray-700 text-xl" />
          </div>
        </div>

        {/* Small Floating Edit Button */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-1 right-1 w-9 h-9 rounded-full 
          bg-[#14967f] hover:bg-[#107864] transition 
          flex items-center justify-center shadow-lg cursor-pointer"
        >
          <CameraAltOutlinedIcon className="text-white text-[18px]" />
        </div>

        {/* Hidden Input */}
        <input
          {...register}
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ProfilePictureUpload;