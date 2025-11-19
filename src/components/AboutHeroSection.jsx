function AboutHeroSection() {
  return (
    <section className="bg-[#F7FEE0] h-[110vh] md:h-screen">
      <div className="flex flex-col-reverse md:flex-row justify-between md:justify-around relative md:top-46 top-20 ">
        <div className="pl-5 md:pl-30 pt-10 md:pt-20 w-full md:w-[50%]">
          <h1 className="text-2xl md:text-3xl font-bold">Who We Are</h1>

          <p className="w-full md:w-[70%] mt-5 text-sm md:text-base">
            We’re a small but sharp creative team built on curiosity, craft, and
            consistency. No corporate drama, no fake promises — just real people
            turning ideas into designs that actually make sense. We mix
            creativity with logic, giving brands a look that feels fresh yet
            timeless.
          </p>
        </div>

        <div className="p-5 md:p-10 relative top-0 md:top-[-100px] w-full md:w-[32%] flex md:block justify-center">
          <img
            src="/images/about-pic-1.avif"
            alt=""
            className="h-[280px] sm:h-[350px] md:h-[486px] object-cover  md:rounded-l-2xl w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
