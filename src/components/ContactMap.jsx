import React from "react";

function ContactMap() {
  return (
    <section className="w-full h-[400px] mt-10">
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83901815778!2d77.06889972288668!3d28.527116125287933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03f39a58b09d%3A0x3de91f0f1ecb8c37!2sIndia!5e0!3m2!1sen!2sin!4v1699987654321!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="border-0 rounded-xl"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default ContactMap;
