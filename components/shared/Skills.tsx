import { skills } from "@/data";
import { TextGenerateEffect } from "../aceternity/TextGenerateEffect";
import MagicButton from "../aceternity/MagicButton";
import { FileJson } from "lucide-react";

const Skills = () => {
  return (
    <div className="py-20">
      <TextGenerateEffect
        className="heading"
        words="Tools of My Trade: Proficiencies"
      />

      <div className="flex flex-wrap items-center justify-center max-w-[70%] mx-auto  gap-4 md:gap-16 mt-10 ">
        {skills.map((skill) => (
          // <div
          //   className="flex items-center justify-center  gap-2 bg-transparent border-black max-w-52 h-16 px-5 rounded-2xl  dark:border-white-100/20 border backdrop-blur-[2px]"
          //   key={skill.id}
          // >
          //   <img src={skill.img} alt={skill.name} className="md:w-8 w-5 " />
          //   <p className="capitalize font-bold ">{skill.name}</p>
          // </div>

          <div
            className={`relative inline-flex h-16 w-full overflow-hidden rounded-lg p-[2px] focus:outline-none sm:w-60 sm:mt-10`}
            key={skill.id}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
              className={`inline-flex gap-5 h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-slate-950  bg-purple px-7 text-base font-bold text-black dark:text-white  backdrop-blur-3xl `}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className={`md:w-8 w-5 ${skill.class}`}
              />
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
