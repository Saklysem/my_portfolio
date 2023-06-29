import {
  BriefcaseIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import WorkCard from "./WorkCard";
import { BsCheckLg } from "react-icons/bs";

const Work = ({ experiences }) => {
  return (
    <div className="w-full mt-16 text-left">
      <h2 className="font-bold text-lg pb-8 underline-offset-[15px] decoration-gray-500 underline tracking-widest decoration-dashed">
        Work Experience
      </h2>
      <div className="mt-5">
      {experiences.experiences.map((experience) => (
        <div key={experience._id}>
          <WorkCard
            role={experience.role}
            company={experience.company}
            intern={experience.intern}
            start_date={experience.start_date}
            end_date={experience.end_date}
            end={experience.end_date}
            description={experience.description}
          />
        </div>
          
        ))}

      </div>
      <div className="h-16"></div>
    </div>
  );
};

export default Work;
