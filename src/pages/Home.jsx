import { Helmet } from "react-helmet-async";
import HomeFeatureSection from "../components/HomeFeatureSection";
import HomeFinalSection from "../components/HomeFinalSection";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeProjectSection from "../components/HomeProjectSection";
import HomeServicesSection from "../components/HomeServicesSection";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Top Web Development & UI/UX Design Agency for Startups in India |
          Qasida Tech Studio
        </title>

        <meta
          name="description"
          content="Qasida Tech Studio offers modern web development, UI/UX design, and branding services for startups and businesses."
        />

        <meta
          name="keywords"
          content="web development India, UI UX design agency, MERN stack developer, startup website development, app development India"
        />

        <link rel="canonical" href="https://qasidatechstudio.com/app/home" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Top Web Development & UI/UX Design Agency for Startups in India | Qasida Tech Studio"
        />
        <meta
          property="og:description"
          content="Modern web development, UI/UX design, and branding services for startups."
        />
        <meta
          property="og:url"
          content="https://qasidatechstudio.com/app/home"
        />
        <meta
          property="og:image"
          content="https://qasidatechstudio.com/images/logo (2).png"
        />
      </Helmet>
      <HomeHeroSection />
      <HomeServicesSection />
      <HomeFeatureSection />
      <HomeProjectSection />
      <HomeFinalSection />
    </>
  );
}

export default Home;
