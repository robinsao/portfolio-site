"use client";

import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaNewspaper } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import NavbarContent from "./NavbarContentWrapper";

function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      {/* Center: Logo */}
      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 px-3 py-1 mt-2 
        hidden xl:flex items-center justify-center 
        bg-black text-white rounded-full font-bold text-xl shadow-lg border-2"
      >
        Robin Sao
      </Link>
      {/*  [&:nth-child(5)]:col-span-2 [&:nth-child(5)]:md:col-span-1 */}
      <NavbarContent
        className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-[repeat(5,auto)_1fr_auto] grid-flow-row grid-rows-1 auto-rows-auto 
       px-4 md:px-8 lg:px-12 
       w-full 
  [&_a]:text-center [&_a]:py-2 [&_a]:md:py-4 [&_a]:px-2 [&_a]:hover:scale-110"
      >
        <Link
          href="/"
          className="text-black dark:text-white hover:text-blue-600 transition"
        >
          Home
        </Link>
        <Link
          href="/#tech-stack"
          className="text-black dark:text-white hover:text-blue-600 transition"
        >
          Tech Stack
        </Link>
        <Link
          href="/#recent-blogs"
          className="text-black dark:text-white hover:text-blue-600 transition"
        >
          Recent Blogs
        </Link>
        <Link
          href="/#projects"
          className="text-black dark:text-white hover:text-blue-600 transition"
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className="text-black dark:text-white hover:text-blue-600 transition
           col-span-2 sm:col-span-1"
        >
          Contact
        </Link>
        {/* Right: Social Icons */}
        <div className="flex items-center justify-center col-span-2 sm:col-span-5 md:col-span-1 md:col-start-7 gap-2 md:gap-5 mb-2 md:mb-0">
          <ThemeToggle className="scale-90 md:scale-100" />
          <a
            href="https://linkedin.com/in/robin-sao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedin
              size={22}
              className="text-blue-700 dark:text-blue-400"
            />
          </a>
          <a
            title="Blog"
            href="https://blog.robinsao.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaNewspaper size={22} className="text-black dark:text-white" />
          </a>
          <a
            href="https://github.com/robinsao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub size={22} className="text-black dark:text-white" />
          </a>
        </div>
      </NavbarContent>
    </nav>
  );
}

export default Navbar;
