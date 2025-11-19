import React from "react";

function AboutWhatWeDo() {
  return (
    <section className="bg-[#F6F8ED] h-screen md:h-screen">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between md:justify-around relative md:top-46 top-10">
        <div className="pl-5 md:pl-30 pt-10 md:pt-20 w-full md:w-[50%]">
          <h1 className="text-2xl md:text-3xl font-bold">What We Do</h1>

          <p className="w-full md:w-[70%] mt-5 text-sm md:text-base">
            Our mission is simple: help businesses grow with clean design,
            strong branding, and smooth digital experiences. From logos to
            full-fledged websites and apps, we build things that look good and
            work even better. We keep it modern, minimal, and meaningful.
          </p>
        </div>

        <div className="p-5 md:p-10 relative top-0 md:top-[-100px] w-full md:w-[32%] flex md:block justify-center">
          <img
            src="/images/about-pic-2.avif"
            alt=""
            className="h-[280px] sm:h-[350px] md:h-[486px]  md:rounded-r-2xl object-cover w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutWhatWeDo;
