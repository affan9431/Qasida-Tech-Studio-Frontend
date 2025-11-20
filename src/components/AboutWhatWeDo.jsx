function AboutWhatWeDo() {
  return (
    <section className="bg-[#F6F8ED] py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/about-pic-2.avif"
            alt="What we do"
            className="h-[350px] md:h-[480px] rounded-xl shadow-md object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            What We Do
          </h1>
          <div className="w-20 h-[3px] bg-black mt-3 mb-6"></div>

          <p className="text-base md:text-lg leading-relaxed text-gray-700 md:w-[85%]">
            Our mission is simple: help businesses grow with clean design,
            strong branding, and smooth digital experiences. From logos to
            full-fledged websites and apps, we build things that look good and
            work even better.
            <br />
            <br />
            We keep it modern, minimal, and meaningful — no clutter, no
            guesswork, just straight-up good design with purpose.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutWhatWeDo;
