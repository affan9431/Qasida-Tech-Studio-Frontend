function AboutHeroSection() {
  return (
    <section className="bg-[#EDEDED] py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight relative top-10 md:top-0">
            Who We Are
          </h1>
          <div className="w-20 h-[3px] bg-black mt-3 mb-6 relative top-10 md:top-0"></div>

          <p className="text-base md:text-lg leading-relaxed text-gray-700 md:w-[85%] relative top-10 md:top-0">
            We’re a small crew with big brains and bigger ambition — driven by
            curiosity, shaped by craft, and steady with consistency. No office
            politics, no overhyped nonsense. Just real people who actually care,
            turning raw ideas into designs that hit.
            <br />
            <br />
            We blend creativity with clear thinking, so every brand we touch
            feels fresh but still rooted, modern yet timeless. Nothing forced,
            nothing fake — just work that makes sense and looks good doing it.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/images/about-pic-1.avif"
            alt="About us"
            className="h-[350px] md:h-[480px] rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
