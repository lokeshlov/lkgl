import { Circle } from "lucide-react";
import React from "react";
import Image from "next/image";

type Props = {};

function FeatureSection({}: Props) {
  return (
    <div className="section-sm w-full bg-[#2D3748] border-b border-[#2D3748]">
      <div className="container">
        <div className="grid grid-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <Image
              src="/images/placeholder-industrial-1.svg"
              alt="Steel Manufacturing"
              width={800}
              height={600}
              className="rounded-lg brightness-80 hover:scale-105 duration-200 w-full max-w-lg"
              priority
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="flex mb-6 items-center gap-2">
              <h4 className="font-sans capitalize text-[#DD6B20]">
                SINCE 1895
              </h4>
              <Circle
                size={16}
                strokeWidth={4}
                className="stroke-[#DD6B20] font-extrabold"
              />
            </div>
            <h2 className="text-[#FFFFFF] mb-6">
              130 Years of Excellence
            </h2>
            <p className="text-[#F8FAFC]">
              From commission agents in Amritsar to leading industrialists. Six generations of unwavering commitment to honesty, integrity, and sustainable business practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;