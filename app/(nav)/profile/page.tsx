"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MagicButton from "@/components/aceternity/MagicButton";
import { useState } from "react";
import { TextGenerateEffect } from "@/components/aceternity/TextGenerateEffect";

const Profile = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "mailto:shekhishak90@gmail.com";
    const mail = "shekhishak90@gmail.com";
    navigator.clipboard.writeText(mail);
    let a = document.createElement("a");
    a.href = text;
    a.click();
    setCopied(true);
  };

  return (
    <div>
      <div className="flex justify-center relative mb-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex  flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center to-blue-100 max-w-80">
            Introduction!
          </h2>

          <div className="py-5 text-center font-black text-[60px] md:text-7xl lg:text-8xl ">
            About Me
          </div>

          <h1 className="heading">
            <TextGenerateEffect words="Recent Reflections on My Journey So Far" />
          </h1>
        </div>
      </div>

      <section className="w-full max-w-3xl mx-auto text-center relative bg-transparent backdrop-blur-sm shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:shadow-[0_8px_16px_rgb(255_255_255/0.09)]  rounded-xl  py-5">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="rounded-[30px] w-24 h-24 overflow-hidden flex items-center justify-center border-[.15rem] object-cover  border-slate-900 ">
              <Image
                alt="profile"
                src={"/images/ishak.jpg"}
                width={250}
                height={250}
                className="hover:scale-110 transition-all"
                quality={"95"}
                priority={true}
              />
            </div>
            <h1 className="text-2xl absolute bottom-0 right-0 ">👍!</h1>
          </div>
        </div>
        {/* paragraph */}
        <h1 className="capitalize mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl">
          <span className="font-bold">Hello, i am Ishak Shekh.</span> A
          <span className="font-bold">
            {" "}
            Front-End developer .(Aspiring Full Stack Developer)
          </span>{" "}
          <span className="font-bold"> Student</span> . I enjoy building
          <span className="italic"> sites & apps</span>. My focus is
          <span className="underline"> React (Next.js) and Tailwind </span>.
        </h1>
        {/* buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-base sm:text-lg font-medium  ">
          {/* <Link
            href="/contact"
            className="px-7 py-3 flex items-center gap-2 rounded-full "
          > */}
          <MagicButton
            title={copied ? "Email is Copied!" : "Open Mail"}
            icon={<ArrowUpRight />}
            position="right"
            parentClass="sm:mt-0 mt-0"
            handleClick={handleCopy}
          />
          {/* </Link> */}
          {/* <a
          href="/cv.pdf"
          download
          className="bg-slate-900 border-indigo-950 border  outline-none  hover:scale-110 transition-all hover:bg-slate-950 active:scale-105   px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Download CV <HiDownload />
        </a> */}
          <div className="flex gap-2 mt-2 sm:m-0 ">
            <Link
              href="https://www.linkedin.com/in/ishak-shekh-12bb94247/"
              target="_blank"
              rel="noopener"
              className="p-2 border  w-11 h-11  items-center justify-center flex rounded-full "
            >
              <img src="/link.svg" alt="LinkedIn" className="w-10 h-10" />
            </Link>
            <Link
              href="https://github.com/ishakshekh-org"
              target="_blank"
              rel="noopener"
              className=" border w-11 h-11 p-2 flex rounded-full  items-center justify-center"
            >
              <img src="/git.svg" alt="github" className="w-10 h-10" />
            </Link>
          </div>
        </div>
      </section>

      <div className="flex justify-center sm:my-14 my-10">
        <div className="w-1/2 h-[1px] dark:bg-white-100/45 bg-black/45"></div>
      </div>

      <section className="max-w-[45rem] mx-auto text-center leading-8  ">
        <p className="mb-3 max-sm:text-sm">
          After Passing Higher Secondary with{" "}
          <span className="font-medium">Bio Background</span>, I decided to
          pursue my passion for programming. I enrolled in BCA degree for{" "}
          <span className="font-medium">full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          Designing and problem-solving aspect. I{" "}
          <span className="underline">love</span> the feeling of finally
          figuring out a solution to a problem. My core stack is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with C , Java and Python. I am always looking to
          learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">Free Lancing opportunity </span> as a
          software developer.
        </p>
        <p className="mb-3 max-sm:text-sm">
          <span className="italic">When I am not coding</span>, I enjoy playing
          video games and watching movie. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am
          currently learning about{" "}
          <span className="font-medium">Web Animations </span>.{" "}
        </p>
      </section>
    </div>
  );
};

export default Profile;
