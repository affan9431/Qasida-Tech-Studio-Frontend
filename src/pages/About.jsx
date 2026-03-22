import { Helmet } from "react-helmet-async";
import AboutFounderSection from "../components/AboutFounderSection";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutValueSection from "../components/AboutValueSection";
import AboutWhatWeDo from "../components/AboutWhatWeDo";
import AboutWhyWeExits from "../components/AboutWhyWeExits";

function About() {
  return (
    <>
      <Helmet>
        <title>
          About Qasida Tech Studio | Web Development & UI/UX Design Agency
        </title>

        <meta
          name="description"
          content="Learn about Qasida Tech Studio, a creative web development and UI/UX design agency helping startups build modern digital products."
        />

        <meta
          name="keywords"
          content="about qasida tech studio, web development agency India, UI UX design company, creative tech studio"
        />

        <link rel="canonical" href="https://qasidatechstudio.com/app/about" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Qasida Tech Studio | Creative Tech Agency"
        />
        <meta
          property="og:description"
          content="Discover our journey, mission, and expertise in web development and UI/UX design."
        />
        <meta
          property="og:url"
          content="https://qasidatechstudio.com/app/about"
        />
        <meta
          property="og:image"
          content="https://qasidatechstudio.com/images/logo (2).png"
        />
      </Helmet>
      <AboutHeroSection />
      <AboutWhatWeDo />
      <AboutWhyWeExits />
      <AboutValueSection />
      <AboutFounderSection />
    </>
  );
}

export default About;
