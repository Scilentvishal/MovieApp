'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-[50px] md:flex bg-gradient-to-r to-black from-[#0b0b3e] shadow-sm shadow-gray-600 text-white items-center align-middle fixed top-0 right-0 left-0 z-40 justify-between md:py-0 py-4 lg:px-24 px-5 overflow-x-hidden">
      <h3>
        <Link href="/" className="text-center">
          <span className="text-xl text-[#FE5B7C]">Net</span>
          Flix
        </Link>
      </h3>
      <ul className="md:flex hidden">
        <li className="inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none">
          <Link href="/">Home</Link>
        </li>
        <li className="inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none">
          <Link href="/about">About Us</Link>
        </li>
        <li className="inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none">
          <Link href="/movie">Movies</Link>
        </li>
        {/* <li className="inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none">
                    <Link href="/gallery">Gallery</Link>
                </li> */}
        <li className="inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div
        className="md:hidden flex justify-between flex-col w-6 h-5 cursor-pointer absolute right-3 top-4"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-1 bg-white" />
        <div className="w-full h-1 bg-white" />
        <div className="w-full h-1 bg-white" />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className="md:hidden transition-all duration-100 fixed h-[calc(100vh-0px)] w-1/2 bg-black top-12 m-0 p-0 font-bold text-gray-300 list-none bottom-0 flex flex-col items-center z-50"
        style={{ right: open ? '0px' : '-100vw' }}
      >
        <li className="my-5">
          <Link href="/">Home</Link>
        </li>
        <li className="my-5">
          <Link href="/about">About Us</Link>
        </li>
        <li className="my-5">
          <Link href="/service">Services</Link>
        </li>
        <li className="my-5">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
