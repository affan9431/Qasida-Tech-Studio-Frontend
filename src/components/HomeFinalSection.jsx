import React from "react";
import { Link } from "react-router-dom";

function HomeFinalSection() {
  return (
    <section className="h-[700px] flex justify-center items-center px-4 md:px-0">
      <div className="flex flex-col items-center justify-center h-[60%] text-center space-y-6 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold">
          Let’s Build Something Great Together.
        </h1>
        <p className="text-[#737272] text-sm md:text-base">
          We don’t just design. We build brands that last.
        </p>
        <div>
          <Link to="/app/contact">
            <button className="bg-[#ECF5CC] p-3 rounded-[50px] w-36 h-14 cursor-pointer text-[#737272]">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeFinalSection;
