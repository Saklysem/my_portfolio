import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { urlFor } from "../sanity";
const Profile = ({ personalInfo }) => {
  // console.log(personalInfo.personalInfo);
  return (
    <div className="flex-col-reverse flex md:flex-row justify-between w-full mt-20">
      {/* image */}
      <div className="text-left pr-0 md:pr-10">
        <h1 className=" text-2xl md:text-3xl font-bold ">
          {personalInfo.personalInfo.header}
        </h1>
        <div className="flex justify-left items-center pt-2">
          <MapPinIcon className="w-5 h-5 mr-2 text-gray-400" />
          <p className="text-sm text-gray-400">
            {personalInfo.personalInfo.location}
          </p>
        </div>
        <div className="pt-5 text-xs md:text-sm">
          <p className="text-gray-400">
            <span className="text-2xl md:text-4xl p-1">&#8220;</span>
            {personalInfo.personalInfo.description}
            <span className="text-2xl md:text-4xl p-1">&rdquo;</span>
          </p>
          <p className="text-right text-gray-400 italic pr-6 pt-2">
            {personalInfo.personalInfo?.by}
          </p>
        </div>
      </div>
      <div>
        <div className="w-28 h-28 bg-blue-500 rounded-full flex items-center justify-center">
          <div className=" w-[106px] h-[106px] overflow-hidden bg-[#0a0d14] rounded-full">
            <img
              className="relative"
              src={urlFor(personalInfo.personalInfo.profile).url()}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
