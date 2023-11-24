/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBars, FaLock } from "react-icons/fa";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <header className="bg-sky-400 py-3 relative">
        <div className="container mx-auto w-3/4 flex justify-between">
          <a className="flex items-center" href="">
            <FaLock className="w-8 h-8 text-white" />
            <p className=" pl-2 text-2xl text-white">Secured Area</p>
          </a>
          <nav>
            <button
              className="text-white text-end flex sm:hidden"
              onClick={toggleMenu}
            >
              <FaBars className="w-8 h-8" />
            </button>
            <ul
              id="main-menu"
              className={`absolute bg-sky-400 w-full left-0 top-15 p-4 text-center text-white font-semibold ${
                menuVisible ? "" : "hidden"
              } sm:block sm:relative sm:top-0 sm:flex sm:gap-5`}
            >
              <li className="mb-2">
                <a href="" className="hover:text-gray-600">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:text-gray-600">
                  Contact
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:text-gray-600">
                  Login
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  className="hover:text-gray-600 bg-blue-500 text-white px-4 py-2 rounded-full"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
