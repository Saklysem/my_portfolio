import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const BtnProject = () => {
  return (
    <div className=" mt-10  ">
      <Link
        href="/project"
        className="border px-4 py-1 rounded-md hover:bg-blue-500 hover:text-white border-blue-500 cursor-pointer flex justify-center items-center"
      >
        <p className="text-sm">View My Project</p>
        <ChevronRightIcon className="ml-2 w-4 h-4" />
      </Link>
    </div>
  );
};

export default BtnProject;
