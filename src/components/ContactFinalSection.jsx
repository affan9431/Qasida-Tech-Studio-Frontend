import React from "react";

function ContactFinalSection() {
  return (
    <section className="h-[700px] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center h-[60%] text-center  space-y-6">
        <h1 className="text-4xl font-bold">
          Let’s Build Something Great Together.
        </h1>
        <p className="text-[#737272]">
          We don’t just design. We build brands that last.
        </p>
        <div>
          <button className="bg-[#ECF5CC] p-3 rounded-[50px] w-36 h-14 cursor-pointer text-[#737272]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactFinalSection;
