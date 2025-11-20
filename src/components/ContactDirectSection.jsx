import { SlSocialLinkedin } from "react-icons/sl";
import { MdEmail } from "react-icons/md";

function ContactDirectSection() {
  return (
    <section className="py-24 bg-[#F6F8ED] px-6 md:px-16 text-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-12">
        Contact Us Directly
      </h1>
      <p className="text-[#737272] md:text-lg mb-16">
        Reach out to Qasida Tech Studio via email or LinkedIn and let’s start
        building something great together.
      </p>

      {/* Contact Options */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        {/* Email */}
        <a
          href="mailto:hello@qasidatechstudio.com"
          className="flex items-center gap-3 bg-[#ECF5CC] text-[#333] px-8 py-6 rounded-xl font-semibold hover:bg-[#e0edaa] transition transform hover:scale-105"
        >
          <MdEmail size={28} />
          <span>Email Us</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/qasida-tech-studio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#0077b5] text-white px-8 py-6 rounded-xl font-semibold hover:bg-[#005582] transition transform hover:scale-105"
        >
          <SlSocialLinkedin size={28} />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

export default ContactDirectSection;
