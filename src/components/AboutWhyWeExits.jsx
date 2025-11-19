import React from "react";

function AboutWhyWeExits() {
  return (
    <section className="h-screen md:h-screen">
      <div className="flex flex-col-reverse md:flex-row justify-between md:justify-around relative md:top-46 top-10">
        <div className="pl-5 md:pl-30 pt-10 md:pt-20 w-full md:w-[50%]">
          <h1 className="text-2xl md:text-3xl font-bold">Why We Exist</h1>

          <p className="w-full md:w-[70%] mt-5 text-sm md:text-base">
            We’re here because we genuinely love building things — designs that
            speak, brands that stand out, and digital products that feel
            effortless. Creativity isn’t just our work; it’s our escape, our
            vibe, our obsession. We exist to turn your vision into something
            people remember.
          </p>
        </div>

        <div className="p-5 md:p-10 relative top-0 md:top-[-100px] w-full md:w-[32%] flex md:block justify-center">
          <img
            src="/images/about-pic-3.avif"
            alt=""
            className="h-[280px] sm:h-[350px] md:h-[486px]  md:rounded-l-2xl object-cover w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutWhyWeExits;
