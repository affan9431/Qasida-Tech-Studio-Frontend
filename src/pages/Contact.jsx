import { Helmet } from "react-helmet-async";
import ContactDirectSection from "../components/ContactDirectSection";
import ContactHeroSection from "../components/ContactHeroSection";
import ContactMap from "../components/ContactMap";

function Contact() {
  return (
    <>
      <Helmet>
        <title>
          Contact Qasida Tech Studio | Hire Web Developers & Designers
        </title>

        <meta
          name="description"
          content="Contact Qasida Tech Studio for web development, UI/UX design, branding, and app development services. Let's build your next project."
        />

        <meta
          name="keywords"
          content="contact web developer India, hire UI UX designer, app development agency contact, qasida tech studio contact"
        />

        <link rel="canonical" href="https://qasidatechstudio.com/app/contact" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Qasida Tech Studio | Start Your Project"
        />
        <meta
          property="og:description"
          content="Reach out for professional web development and UI/UX design services."
        />
        <meta
          property="og:url"
          content="https://qasidatechstudio.com/app/contact"
        />
        <meta
          property="og:image"
          content="https://qasidatechstudio.com/images/logo (2).png"
        />
      </Helmet>
      <ContactHeroSection />
      <ContactDirectSection />
      <ContactMap />
    </>
  );
}

export default Contact;
