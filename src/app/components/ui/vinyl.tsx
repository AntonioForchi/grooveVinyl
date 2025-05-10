import React from "react";
import Image from "next/image";

interface VinylProps {
  src: string;
  alt: string;
  tailwindClasses?: string;
}

const Vinyl: React.FC<VinylProps> = ({src, alt, tailwindClasses}) => {
  return (
    <>
      <div 
        className={`bg-black rounded-full flex items-center justify-center ${tailwindClasses} relative bg-[repeating-radial-gradient(circle,_#1a1a1a_0px,_#1a1a1a_1px,_transparent_1px,_transparent_5px)] animate-spin-slow z-10`}
        >
        <div 
          className="rounded-full flex items-center justify-center relative"
          style={{
            width: "0.33em", // 33% container size
            height: "0.33em",
          }}
          >
            <Image src={src} alt={alt} fill className="rounded-full"></Image>
          <div 
            className="bg-[#121212] w-[1vw] h-[1vw] rounded-full flex items-center justify-center relative"
            style={{
              width: "0.03em", // 33% container size
              height: "0.03em",
            }}
          >
          </div>
        </div>
      </div>
    </>
  );
};

export default Vinyl;
