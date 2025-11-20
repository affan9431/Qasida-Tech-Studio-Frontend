import React from "react";
import { Link } from "react-router-dom";

function HomeHeroSection() {
  return (
    <section className="h-[700px] md:h-[700px] bg-cover bg-center bg-[url('/images/Home.png')] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6 px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl font-bold">
          We Design. We Develop. We Build Brands.
        </h1>
        <p className="text-[#737272] text-sm md:text-base px-2 md:px-0">
          Your one-stop studio for design, UI/UX, websites, and apps.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link to="/app/contact">
            <button className="bg-[#ECF5CC] px-8 py-4 rounded-full text-[#474747] text-sm md:text-base font-medium hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
