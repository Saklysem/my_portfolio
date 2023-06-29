import {
  BriefcaseIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import WorkCard from "./WorkCard";

const Work = ({ experiences }) => {
  return (
    <div className="w-full mt-16 text-left">
      <h2 className="font-bold text-lg pb-8 underline-offset-[15px] decoration-gray-500 underline tracking-widest decoration-dashed">
        Work Experience
      </h2>
      <div className="mt-5">
        {experiences.experiences.map(
          ({
            _id,
            role,
            company,
            start_date,
            end_date,
            description,
            intern,
          }) => {
            return (
              <WorkCard
                key={_id}
                role={role}
                company={company}
                intern={intern}
                start_date={start_date}
                end_date={end_date}
                end={end_date}
                description={description}
              />
            );
          }
        )}
      </div>
      <div className="h-16"></div>
    </div>
  );
};

export default Work;
