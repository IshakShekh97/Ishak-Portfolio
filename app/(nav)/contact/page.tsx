"use client";
import { sendEmail } from "@/actions/sendEmail";
import { TextGenerateEffect } from "@/components/aceternity/TextGenerateEffect";
import ConatctButton from "@/components/shared/ContactButton";
import React from "react";

const Contact = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-center relative mb-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex  flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center to-blue-100 max-w-80">
            Reach Me!
          </h2>

          <div className="py-5 text-center font-black text-[60px] md:text-7xl lg:text-8xl ">
            Conatct
          </div>

          <h1 className="heading !text-3xl">
            <TextGenerateEffect words="Send A Message To Me Regarding Your Projects or anything else!" />
          </h1>
        </div>
      </div>

      <div className="">
        <form
          action={async (formData: FormData) => {
            await sendEmail(formData);
          }}
          className="flex flex-col gap-5 items-center justify-center"
        >
          <div className="flex w-full items-center justify-center gap-2">
            From :
            <input
              type="email"
              name="senderEmail"
              id=""
              placeholder="example@example.com"
              className="w-[60%] sm:w-[70%] lg:w-[85%] py-2 px-4 bg-transparent border rounded-sm backdrop-blur focus:bg-transparent outline-none"
              required
              maxLength={30}
            />
          </div>
          <textarea
            name="message"
            required
            id=""
            placeholder="Your Message"
            className="w-full h-52 py-3 px-4 bg-transparent border rounded-lg backdrop-blur outline-none"
            maxLength={500}
          ></textarea>

          <ConatctButton />
        </form>
      </div>
    </div>
  );
};

export default Contact;
