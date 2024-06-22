import { ReactNode } from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  content,
  parentClass,
  img,
}: {
  title?: string;
  icon: ReactNode;
  img?: string;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  content?: ReactNode;
  parentClass?: string;
}) => {
  return (
    <>
      <button
        className={`relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[2px] focus:outline-none sm:w-60 sm:mt-10 ${parentClass} `}
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex gap-5 h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-neutral-950 bg-purple px-7 text-base font-bold text-black dark:text-white  backdrop-blur-3xl ${otherClasses}`}
        >
          {position === "left" && icon}

          {title && title}
          {content && content}
          {position === "right" && icon}
        </span>
      </button>
    </>
  );
};

export default MagicButton;
