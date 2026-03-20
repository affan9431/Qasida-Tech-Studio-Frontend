import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function ContactHeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Logo Design",
    "Graphic Design",
    "Branding",
    "UI/UX",
    "Web Development",
    "App Development",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://qasida-tech-studio-backend.vercel.app/api/contact",
      formData,
    );
    if (res.status === 201) {
      toast.success("Thanks! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <section className="h-[900px] bg-cover bg-center bg-[url('/images/Home.png')] flex items-center justify-center">
      <div className=" -md p-10  w-[90%] max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-4">
          Let’s Build Something Great
        </h1>
        <p className="text-[#737272] text-center mb-8">
          Tell us about your project — we’ll get back to you within 24 hours.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            required
            className="p-3 border border-[#E4F9A0] focus:outline-none focus:ring-2 focus:ring-green-300 w-full max-w-md"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            required
            className="p-3 border border-[#E4F9A0] focus:outline-none focus:ring-2 focus:ring-green-300 w-full max-w-md"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone (Optional)"
            className="p-3 border border-[#E4F9A0] focus:outline-none focus:ring-2 focus:ring-green-300 w-full max-w-md"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="p-3 border border-[#E4F9A0] focus:outline-none focus:ring-2 focus:ring-green-300 w-full max-w-md"
          >
            <option value="">Select Service*</option>
            {services.map((service, idx) => (
              <option key={idx} value={service}>
                {service}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message*"
            required
            rows="4"
            className="p-3 border border-[#E4F9A0] focus:outline-none focus:ring-2 focus:ring-green-300 w-full max-w-md"
          />

          <button
            type="submit"
            className="bg-[#ECF5CC] text-[#737272] font-semibold p-3  hover:bg-green-200 transition w-full max-w-md cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactHeroSection;
