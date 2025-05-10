"use client";

import React, { useState } from "react";
import SecondaryButton from "./ui/secondaryButton";
import PrimaryButton from "./ui/primaryButton";
import { Menu, X, Disc, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="absolute top-0 left-0 w-full h-20 bg-[#121212] bg-opacity-80 backdrop-blur-md flex px-8 py-2 z-50 items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="flex items-center justify-center w-auto h-auto text-green-600 gap-2">
        <Disc className="w-[1.3vw] h-[1.3vw]"></Disc>
        <h1 className="text-white font-bold text-2xl">GrooveVinyl</h1>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ml-auto flex flex-col justify-center items-center space-y-1 laptop:hidden"
      >
        {isOpen ? (
          <X className="text-white font-bold w-8 h-8" />
        ) : (
          <Menu className="text-white font-bold w-8 h-8" />
        )}
      </button>


      <div className="ml-auto hidden laptop:flex gap-[1vw]">
        {["Features", "Artists", "Songs", "Pricing"].map((item) => (
          <a
            key={item}
            onClick={() =>
              document
                .getElementById(item.toLowerCase())
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`text-lg font-bold transition-colors cursor-pointer hover:text-green-600`}
          >
            {item}
          </a>
        ))}
      </div>

      
      <div className="ml-auto hidden laptop:flex gap-2 items-center">
      <a href={''} className='text-white font-bold text-md px-2 py-3 hover:text-green-600 flex items-center'>
            Log In
        </a>

        <a href={''} className='bg-green-600 text-white font-bold text-md px-2 py-3 rounded-md hover:bg-green-700 transition duration-300 ease-in-out flex items-center'>
            Connect Spotify
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121212] bg-opacity-90 flex flex-col items-center py-4 gap-4 laptop:hidden">
          {["Features", "Artists", "Songs", "Pricing"].map((item) => (
            <a
              key={item}
              onClick={() => {
                document
                  .getElementById(item.toLowerCase())
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="text-lg text-white font-bold hover:text-[#a2da5a] transition-colors" // Close menu on click
            >
              {item}
            </a>
          ))}

          <div className="laptop:hidden flex flex-col gap-2 items-center mt-10">
            <a href={''} className='bg-green-600 text-white font-bold text-md px-2 py-3 rounded-md hover:bg-green-700 transition duration-300 ease-in-out flex items-center'>
                  Connect Spotify
              </a>
            <a href={''} className='text-white font-bold text-md px-2 py-3 hover:text-green-600 flex items-center'>
                  Log In
              </a>
            </div>
        </div>
      )}
    </motion.nav>
  );
}
