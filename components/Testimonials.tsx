import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./aceternity/InfiniteMovingCards";

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-20">
      <h1 className="heading">
        Kind Word From{" "}
        <span className="dark:text-purple text-violet-500">
          Satisfied Clients
        </span>
      </h1>

      <div className="flex flex-col items-center mt-10">
        <InfiniteMovingCards
          items={testimonials}
          pauseOnHover
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Testimonials;
