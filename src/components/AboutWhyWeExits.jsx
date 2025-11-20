function AboutWhyWeExist() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Why We Exist
          </h1>
          <div className="w-20 h-[3px] bg-black mt-3 mb-6"></div>

          <p className="text-base md:text-lg leading-relaxed text-gray-700 md:w-[85%]">
            We’re here because we genuinely love building things — designs that
            speak, brands that stand out, and digital products that feel
            effortless. Creativity isn’t just our work; it’s our escape, our
            vibe, our obsession.
            <br />
            <br />
            We exist to turn your vision into something unforgettable —
            something that feels alive, honest, and uniquely yours.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/about-pic-3.avif"
            alt="Why we exist"
            className="h-[350px] md:h-[480px] rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutWhyWeExist;
