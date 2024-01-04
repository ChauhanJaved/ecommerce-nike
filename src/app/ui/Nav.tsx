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
    <nav className="flex justify-between items-center flex-wrap p-6 border-red-600 border-2">
      <div className="flex items-center flex-shrink-0 mr-6 lg:mr-72">
        <Link href="/">
          <Image src={headerLogo} alt="Logo" className="w-[129px] h-[29px]" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hower:text-black-400">
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
      {/* <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden bg-blue-300">
        {navLinks.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className={`${montserrat.className} text-lg text-slate-800`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul> */}
      {/* <div className={`bg-red-300 flex gap-2 text-lg leading-normal font-medium ${montserrat.className} max-lg:hidden`}>
        <Link href="/">Sign In</Link>
        <span>/</span>
        <Link href="/">Explore Now</Link>
      </div>
      <div className="hidden max-lg:block">
        <Image src={hamburger} alt="Hamburger Menu" width={25} height={25} />
      </div> */}
    </nav>
  );
};

export default Nav;
