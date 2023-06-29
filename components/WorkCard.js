import React, { useState } from "react";
import Moment from "react-moment";
import {
  BriefcaseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
const WorkCard = ({ role, company,intern, start_date, end_date, description }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="w-full border p-3 my-3 rounded-md cursor-pointer border-blue-500 min-h-32"
    >
      <div className="bg-blue-500 w-fit p-2 rounded-md text-[#0a0d14]">
        <BriefcaseIcon className="w-5 h-5" />
      </div>
      <div className="flex justify-between pt-2">
        <h1 className="font-bold ">
          {role} @ <span className="text-blue-500">{company}</span>
        </h1>
      </div>
      {intern && <p className="text-sm text-blue-500 uppercase">[ Intern ]</p>}
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-400">
          <Moment format="DD-MMM-YYYY">{start_date}</Moment> -{" "}
          {end_date ? (
            <span>
              <Moment format="DD-MMM-YYYY">{end_date}</Moment>
            </span>
          ) : (
            <span>Present</span>
          )}
        </p>

        <div>
          {isActive ? (
            <ChevronUpIcon
              className="w-5 h-5 cursor-pointer animate-bounce"
              onClick={() => setIsActive(false)}
            />
          ) : (
            <ChevronDownIcon
              className="w-5 h-5 cursor-pointer animate-bounce"
              onClick={() => setIsActive(true)}
            />
          )}
        </div>
      </div>
      {/* btn */}

      {isActive ? (
        <div className="px-3 pt-2 text-sm text-gray-400 ">
          {description.map((desc) => (
            <>
              <div className="flex my-1">
                <div>
                  <InformationCircleIcon className="w-5 h-5 mr-2" />
                </div>

                <p>{desc}</p>
              </div>
            </>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default WorkCard;
