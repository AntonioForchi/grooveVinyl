"use client";

import React from "react";
import Vinyl from "./vinyl";
import Image from "next/image";
import { useState } from "react";

interface VinylSheetProps {
  src: string;
  albumName: string;
}

const VinylSheet: React.FC<VinylSheetProps> = ({src, albumName}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <div
        className="relative flex items-center justify-center w-fit h-auto group laptop:cursor-pointer"
        onClick={handleToggle}
      >
        <div
          className={`
                absolute transition-transform duration-300 translate-x-0
                z-0 rounded-full shadow-xl shadow-black/70
                ${isActive ? "-translate-y-1/3 tablet:translate-x-1/2 tablet:-translate-y-0" : ""}
                laptop:translate-x-0 
                laptop:group-hover:translate-x-1/2
                laptopM:group-hover:translate-x-7/12
                surface:group-hover:translate-x-3/5
                qhd:group-hover:translate-x-2/3
              `}
        >
          <Vinyl src={src} alt="" tailwindClasses="w-[38vh] h-[38vh] text-[38vh] tablet:w-[25vw] tablet:h-[25vw] tablet:text-[25vw] laptop:w-[19vw] laptop:h-[19vw] laptop:text-[19vw] laptopM:w-[17vw] laptopM:h-[17vw] laptopM:text-[17vw] fullhd:w-[15vw] fullhd:h-[15vw] fullhd:text-[15vw] qhd:w-[10vw] qhd:h-[10vw] qhd:text-[10vw]" />
        </div>

        <div
          className={`
                relative flex items-center justify-center h-auto
                p-[40vw] tablet:p-[13vw] laptop:p-[10vw] laptopM:p-[9vw] fullhd:p-[8vw] qhd:p-[6vw]
                transition-transform duration-300 z-10 shadow-xl hover:shadow-2xl shadow-black/70
                ${isActive ? "scale-110" : ""}
                laptop:scale-100 laptop:group-hover:scale-110
              `}
        >
          <Image src={src} alt="" fill />

          <div className="absolute top-2 left-2 laptop:top-4 laptop:left-4 laptopM:top-6 laptopM:left-6 z-[2] rounded-2xl backdrop-blur-sm p-2 text-white text-xs surface:text-lg">
            {albumName}
          </div>
        </div>
      </div>
    </>
  );
};

export default VinylSheet;
