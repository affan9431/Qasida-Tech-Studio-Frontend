import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

function AboutFounderSection() {
  return (
    <section className="bg-[#F7FEE0] py-10 md:py-20">
      {/* Heading */}
      <div className="px-6 md:px-16">
        <h1 className="text-3xl md:text-4xl font-bold relative top-10">
          Meet the Founder
        </h1>
      </div>

      {/* Main Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-20 px-6 md:px-16 mt-20">
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2">
          <h1 className="text-lg md:text-xl font-semibold leading-relaxed">
            Affan Sayeed — Founder Of Qasida Tech Studio <br />
            Full-Stack Developer & UI/UX Designer
          </h1>

          <p className="mt-4 text-sm md:text-base md:w-[80%] leading-relaxed">
            Qasida Tech Studio is led by Affan Sayeed, a full-stack developer
            and UI/UX designer who brings a balance of creativity and technical
            precision to every project. With a strong foundation in modern web
            technologies and design principles, he has guided the studio toward
            delivering clean branding, intuitive interfaces, and
            high-performance digital products.
            <br />
            <br />
            As the Founder, Affan drives Qasida Tech Studio with a simple
            belief: every brand deserves thoughtful design and dependable
            development. His leadership keeps the studio focused on quality,
            clarity, and long-term value for clients — no shortcuts, no noise,
            just honest work that performs.
          </p>

          <div className="mt-6 text-3xl md:text-2xl">
            <Link
              to="https://www.linkedin.com/in/affan-sayeed-291078268"
              target="_blank"
            >
              <SlSocialLinkedin />
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/images/affan-founder.jpg"
            alt=""
            className="h-[350px] md:h-[480px] w-full md:w-auto rounded-l-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutFounderSection;
