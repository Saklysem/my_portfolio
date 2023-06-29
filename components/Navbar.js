import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import MenuItems from "../utils/menuItems";
import { useRouter } from "next/router";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
const Navbar = () => {
  const router = useRouter();
  const [greeting, setGreeting] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [text, count] = useTypewriter({
    words: greeting,
    loop: true,
    delaySpeed: 2000,
  });
  useEffect(() => {
    const time = new Date().getHours();
    if (time >= 0 && time <= 12) {
      setGreeting(["Good Morning", "អរុណសួស្ដី", "おはよう"]);
    } else if (time > 12 && time <= 18) {
      setGreeting(["Good Afternoon", "ទិវាសួស្តី", "こんにちは"]);
    } else if (time > 18 && time <= 24) {
      setGreeting(["Good Evening", "សាយ័ណ្ហសួស្ដី", "こんばんは"]);
    }
  }, []);
  return (
    <div className="w-full flex justify-between  md:first:items-center mt-5">
      <h2 className="text-white capitalize font-bold h-2">
        <span>
          {text} <Cursor cursorColor="white" />
        </span>
      </h2>
      {/* window screen */}
      <div className=" md:hidden flex flex-col">
        <div className="w-full  flex justify-end px-3 ">
          {isOpen ? (
            <XMarkIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <Bars3Icon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              ref={ref}
              className="flex  justify-end text-right flex-col mt-5  "
            >
              {MenuItems.map((item, index) => {
                return (
                  <div key={item.id} className="my-1 md:my-0">
                    <Link
                      href={item.url}
                      className={`px-3  ${
                        router.asPath === item.url
                          ? " underline decoration-wavy text-blue-500 "
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </Transition>
      </div>
      <div className="hidden md:flex">
        <div className="flex  justify-end text-right md:flex-row   ">
          {MenuItems.map((item, index) => {
            return (
              <div key={item.id} className="my-1 md:my-0">
                <Link
                  href={item.url}
                  className={`px-3  ${
                    router.asPath === item.url
                      ? " underline decoration-wavy text-blue-500 "
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
