import Link from "next/link";
import MagicButton from "../aceternity/MagicButton";
import { MailCheck } from "lucide-react";
import { navItems, socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10">
      <div className="w-full absolute -z-10 left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          className="w-full h-full dark:opacity-50 opacity-100"
          alt="grid"
        />
      </div>

      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw] capitalize">
          Streamline{" "}
          <span className="dark:text-purple text-violet-500"> your </span>{" "}
          online presence and make it more discoverable
        </h1>
        <p className="dark:text-white-200 text-black md:mt-10 my-5 text-center capitalize ">
          Reach out to me Today and let&apos;s discuss how can i help you to
          achieve your goals
        </p>

        <Link href="mailto:shekhishak90@gmail.com">
          <MagicButton
            title="Let's Get In Touch"
            icon={<MailCheck />}
            position="right"
          />
        </Link>
      </div>

      <div className="flex flex-wrap gap-5 items-center justify-center mt-10">
        {navItems.map((item) => (
          <Link
            href={item.link}
            className="min-w-24 h-10 border-b-2 flex items-center justify-center rounded-lg backdrop-blur dark:bg-purple/5 bg-violet-500/25 dark:hover:bg-purple/45 hover:bg-violet-500/60 dark:hover:border-white hover:border-black  transition duration-500"
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light ">
          Made By Ishak In 2024 With 💖
        </p>

        <div className="flex items-center md:gap-3 gap-6 max-md:mt-5">
          {socialMedia.map((profile) => (
            <Link
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg dark:bg-violet-500/5 bg-violet-500/65 rounded-lg border dark:border-white/20 border-black/20"
              key={profile.id}
            >
              <Image src={profile.img} alt="profile" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
