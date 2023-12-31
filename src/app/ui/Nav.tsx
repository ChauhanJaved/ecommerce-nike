"use client";

import Link from "next/link";
import Image from "next/image";
import { headerLogo } from "../../../public/images";
import { hamburger } from "../../../public/icons";
import { navLinks } from "../utils/constants";
import { montserrat } from "./fonts";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`bg-white absolute w-full z-10  ${montserrat.className} flex justify-between items-center flex-wrap p-6 text-lg`}>
      {/* Logo----- */}
      <div className="flex items-center flex-shrink-0">
        <Link href="/">
          <Image src={headerLogo} alt="Logo" className="w-[129px] h-[29px]" />
        </Link>
      </div>
      {/* Hamburger ----- */}
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border-2 rounded hover:text-orange-nike hover:border-orange-nike ">
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      {/* Menu Items-1----- */}
      <div className={`w-full block  lg:flex lg:items-center lg:w-auto  ${isOpen ? "block" : "hidden"}`}>
        <ul className="lg:flex lg:gap-16">
          {navLinks.map((item) => (
            <li key={item.label} className="block text-right mr-4 mt-4 lg:inline-block lg:mt-0 hover:text-orange-nike">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Menu Items-2----- */}
      <div
        className={`w-full block flex-grow text-right pr-4 lg:flex lg:items-center lg:w-auto lg:flex-grow-0 ${
          isOpen ? "block" : "hidden"
        }`}>
        <button className="inline-flex items-center mt-4 lg:mt-0 bg-orange-nike border-0 rounded py-2 px-4 text-white hover:bg-orange-600 ">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Nav;
