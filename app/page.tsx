import Grid from "@/components/shared/Grid";
import Skills from "@/components/shared/Skills";
import Testimonials from "@/components/shared/Testimonials";
import { TextGenerateEffect } from "@/components/aceternity/TextGenerateEffect";
import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <div className="flex justify-center relative my-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex  flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center to-blue-100 max-w-80">
            Unlocking Web Magic with Me!
          </h2>

          <TextGenerateEffect
            words="Transform Your Online Presence With Ishak"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi , I&apos;am Ishak , A FrontEnd Developer Based In India
          </p>

          <Link
            className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[2px] focus:outline-none sm:w-60 sm:mt-10"
            href={"/projects"}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
              className={`inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-black bg-purple px-7 text-sm font-medium dark:text-white-100 text-black backdrop-blur-3xl`}
            >
              <p className="text-lg font-extrabold">Show My Work</p>
              <BriefcaseBusiness />
            </span>
          </Link>
        </div>
      </div>

      <div>
        <Grid />
        <Skills />
        <Testimonials />
      </div>
    </div>
  );
};

export default page;
