import { TextGenerateEffect } from "@/components/aceternity/TextGenerateEffect";
import { PinContainer } from "@/components/aceternity/ThreeDPin";
import { projects } from "@/data";
import { Plane } from "lucide-react";

const Projects = () => {
  return (
    <div className="">
      <div className="flex justify-center relative mb-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex  flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center to-blue-100 max-w-80">
            The Works Of Mine!
          </h2>

          <div className="py-5 text-center font-black text-[60px] md:text-7xl lg:text-8xl ">
            Projects
          </div>

          <h1 className="heading">
            <TextGenerateEffect words="A Small Selection of Recent Works" />
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center  gap-x-24 gap-y-20 mt-10 ">
        {projects.map(({ id, title, des, img, link, iconLists, shortName }) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center  w-[90vw] sm:w-[400px] md:w-[500px] xl:w-[590px] "
            key={id}
          >
            <PinContainer title={shortName} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10 ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl ">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute -right-10 hover:right-0 hover:rotate-0 hover:scale-150  transition-all duration-500  bottom-0 rotate-2 scale-110 rounded-xl"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 ">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-purple/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center ">
                  <p className="flex lg:text-xl md:text-xs text-sm dark:text-purple text-violet-600 ">
                    Check Live Site
                  </p>
                  <Plane className="ms-3 dark:text-purple text-violet-600" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
