import { Circle } from "lucide-react";
import React from "react";
import Image from "next/image";

type Props = {};

function FeatureSectionTwo({}: Props) {
  return (
    <div className="section-sm w-full bg-[#1A1D21] border-b border-[#2D3748]">
      <div className="container">
        <div className="grid grid-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center">
            <div className="flex mb-6 items-center gap-2">
              <h4 className="font-sans capitalize text-[#DD6B20]">
                GLOBAL PRESENCE
              </h4>
              <Circle
                size={16}
                strokeWidth={4}
                className="stroke-[#DD6B20] font-extrabold"
              />
            </div>
            <h2 className="text-[#FFFFFF] mb-6">
              30+ Countries Worldwide
            </h2>
            <p className="text-[#F8FAFC]">
              From USA to Japan, Europe to Africa. Our international network spans continents, delivering quality steel and ferro alloys to the world's leading manufacturers.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/placeholder-industrial-2.svg"
              alt="Global Network"
              width={800}
              height={600}
              className="rounded-lg brightness-80 hover:scale-105 duration-200 w-full max-w-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSectionTwo;