import AboutFounderSection from "../components/AboutFounderSection";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutValueSection from "../components/AboutValueSection";
import AboutWhatWeDo from "../components/AboutWhatWeDo";
import AboutWhyWeExits from "../components/AboutWhyWeExits";

function About() {
  return (
    <div className="">
      <AboutHeroSection />
      <AboutWhatWeDo />
      <AboutWhyWeExits />
      <AboutValueSection />
      <AboutFounderSection />
    </div>
  );
}

export default About;
