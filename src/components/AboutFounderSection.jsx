import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

function AboutFounderSection() {
  return (
    <section className="bg-[#EDEDED] py-20 md:py-28">
      {/* Heading */}
      <div className="px-6 md:px-16 mb-10 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Meet the Founder
        </h1>
        <div className="w-20 h-[3px] bg-black mt-3"></div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold leading-relaxed">
            Affan Sayeed — Founder of Qasida Tech Studio <br />
            Full-Stack Developer & UI/UX Designer
          </h2>

          <p className="mt-6 text-sm md:text-lg leading-relaxed text-gray-700 w-full md:w-[85%]">
            Qasida Tech Studio is helmed by Affan Sayeed, a developer-designer
            hybrid who blends creativity with technical precision. With a strong
            foundation in modern web technologies and clean design principles,
            he drives the studio’s mission to create branding, interfaces, and
            digital products that feel effortless and perform flawlessly.
            <br />
            <br />
            His belief is simple — every brand deserves thoughtful design and
            dependable development. No shortcuts, no fluff, just honest work
            built for long-term value.
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
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/affan-founder.jpg"
            alt="Affan Sayeed Founder"
            className="h-[350px] md:h-[480px] rounded-xl object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutFounderSection;
