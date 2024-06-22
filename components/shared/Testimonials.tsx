import { testimonials } from "@/data";
import { InfiniteMovingCards } from "../aceternity/InfiniteMovingCards";
import { TextGenerateEffect } from "../aceternity/TextGenerateEffect";

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-20 ">
      <TextGenerateEffect
        className="heading"
        words="Kind Words  From Satisfied Clients"
      />
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
