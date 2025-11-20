import React from "react";
import { Link } from "react-router-dom";

function HomeFinalSection() {
  return (
    <section className="py-32 flex justify-center items-center px-4 md:px-0 bg-white">
      <div className="flex flex-col items-center text-center space-y-5 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Let’s Build Something Great Together.
        </h1>

        <p className="text-[#737272] text-sm md:text-lg">
          We don’t just design. We craft brands that stay.
        </p>

        <Link to="/app/contact">
          <button className="bg-[#ECF5CC] px-8 py-4 rounded-full text-[#474747] text-sm md:text-base font-medium hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HomeFinalSection;
