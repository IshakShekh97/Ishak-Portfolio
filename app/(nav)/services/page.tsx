import { Button } from "@/components/aceternity/MovingBorder";
import { TextGenerateEffect } from "@/components/aceternity/TextGenerateEffect";
import { workExperience } from "@/data";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="flex justify-center relative mb-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex  flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center to-blue-100 max-w-80">
            Bringing Your Vision to Life, One Pixel at a Time.
          </h2>

          <div className="py-5 text-center font-black text-[60px] md:text-7xl lg:text-8xl ">
            Services
          </div>

          <h1 className="heading">
            <TextGenerateEffect words="Building Custom Solutions for Your Business Needs" />
          </h1>
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 3000 + 3000)}
            className="flex-1 dark:text-white text-black border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16 "
              />
              <div className="lg:ms-5 ">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start dark:text-white-100 text-black  mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Services;
