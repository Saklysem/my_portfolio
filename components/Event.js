import React, { useEffect, useState } from "react";
// import { Cursor, useTypewriter } from "react-simple-typewriter";

const Event = ({ event }) => {
  const isPublished = event.event === null ? false : event.event.published;

  return (
    <>
      {isPublished ? (
        <div className=" text-white w-full text-center  ">
          <p className="pb-2 h-5 text-xs font-bold text-blue-400">
            {event.event.name}
          </p>
          <div className="w-full h-[0.1px] bg-blue-900" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Event;
