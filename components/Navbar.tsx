"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <nav className="rounded-3xl bg-linear-to-r from-purple-500 to-purple-800 shadow-lg shadow-purple-400">
      <div className="w-full">
        <div className="h-14 w-full font-serif flex justify-between items-center px-10">
          {/* Logo */}
          <div className="font-serif">
            <h1 className="text-purple-200 font-bold tracking-wide text-lg md:text-lg lg:text-2xl">
              Hacky_Coder
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex justify-center items-center gap-3 lg:gap-8">
            <Link
              href="#"
              className="text-sm lg:text-lg font-semibold tracking-tight hover:underline underline-offset-1 hover:decoration-purple-300 hover:text-purple-300"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm lg:text-lg font-semibold tracking-tight hover:underline underline-offset-1 hover:decoration-purple-300 hover:text-purple-300"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm lg:text-lg font-semibold tracking-tight hover:underline underline-offset-1 hover:decoration-purple-300 hover:text-purple-300"
            >
              Our Works
            </Link>
            <Link
              href="#"
              className="text-sm lg:text-lg font-semibold tracking-tight hover:underline underline-offset-1 hover:decoration-purple-300 hover:text-purple-300"
            >
              About Me
            </Link>

            <Link href="#">
              <span className="animate-pulse inset-ring-2 bg-linear-to-b from-purple-700 to-purple-900 py-1 px-6 rounded-2xl text-sm lg:text-lg font-semibold tracking-tight hover:scale-105 duration-100 hover:shadow-lg hover:shadow-purple-400 inline-block">
                Contact Us
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="inset-ring-2 bg-purple-500 p-2 rounded-full hover:scale-105 duration-100 shadow-sm shadow-purple-200"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden">
            <div className="flex flex-col gap-3 items-center py-10">
              <Link
                href="#"
                onClick={handleClose}
                className="text-lg font-semibold tracking-tight hover:underline underline-offset-1 hover:decoration-purple-300 hover:text-purple-300"
              >
                Home
              </Link>
              <Link
                href="#"
                onClick={handleClose}
                className="text-lg font-semibold tracking-tight hover:underline underline-offset-1 hover:decoration-purple-300 hover:text-purple-300"
              >
                Services
              </Link>
              <Link
                href="#"
                onClick={handleClose}
                className="text-lg font-semibold tracking-tight hover:underline underline-offset-1 hover:decoration-purple-300 hover:text-purple-300"
              >
                Our Works
              </Link>
              <Link
                href="#"
                onClick={handleClose}
                className="text-lg font-semibold tracking-tight hover:underline underline-offset-1 hover:decoration-purple-300 hover:text-purple-300"
              >
                About Me
              </Link>

              <Link href="#" onClick={handleClose}>
                <span className="animate-pulse inset-ring-2 bg-linear-to-b from-purple-700 to-purple-900 py-1 px-6 rounded-2xl text-2xl font-semibold tracking-tight hover:scale-105 duration-100 hover:shadow-lg hover:shadow-purple-400 inline-block">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
