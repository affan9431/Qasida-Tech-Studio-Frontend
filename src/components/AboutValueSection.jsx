const servicesData = [
  {
    id: 1,
    title: "Quality",
    description: "We don’t deliver ‘okay’, we deliver ‘damn, that’s clean.’",
  },
  {
    id: 2,
    title: "Creativity",
    description: "Fresh ideas, bold visuals, and solutions that stand out.",
  },
  {
    id: 3,
    title: "Consistency",
    description: "Same high energy, same sharp results — every single time.",
  },
  {
    id: 4,
    title: "Honesty",
    description: "Transparent communication and zero hidden nonsense.",
  },
];

function AboutValueSection() {
  return (
    <section className="bg-[#F6F8ED] relative top-10 h-[200vh] md:h-[110vh]">
      <div className="p-8 md:p-16 flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">Our Values</h1>
      </div>

      {/* 1st row */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 md:pl-[390px] items-center justify-center md:justify-start">
        {servicesData.slice(0, 2).map((item, index) => (
          <div
            key={item.id}
            className={`w-[300px] sm:w-[320px] md:w-[340px] h-[220px] md:h-[247px] bg-[#E4F9A0] rounded-tl-[140px] rounded-br-[140px] p-10
              ${index === 1 ? "md:relative md:bottom-[50px]" : ""}
            `}
          >
            <h1 className="pl-[30px] md:pl-[50px] pt-3 md:pt-5 text-[20px] md:text-[23px] font-bold">
              {item.title}
            </h1>
            <p className="pl-[30px] md:pl-[50px] pt-3 md:pt-[15px] text-left text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* 2nd row */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-10 md:pl-[390px] items-center justify-center md:justify-start mb-10">
        {servicesData.slice(2, 5).map((item, index) => (
          <div
            key={item.id}
            className={`w-[300px] sm:w-[320px] md:w-[340px] h-[220px] md:h-[247px] bg-[#E4F9A0] rounded-tl-[140px] rounded-br-[140px] p-10
              ${
                index === 1
                  ? "md:relative md:bottom-[50px] md:left-[-70px]"
                  : ""
              }
              ${
                index === 2
                  ? "md:relative md:bottom-[100px] md:left-[-70px]"
                  : ""
              }
              ${index === 0 ? "md:relative md:left-[-60px]" : ""}
            `}
          >
            <h1 className="pl-[30px] md:pl-[50px] pt-3 md:pt-5 text-[20px] md:text-[23px] font-bold">
              {item.title}
            </h1>
            <p className="pl-[30px] md:pl-[50px] pt-3 md:pt-[15px] text-left text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutValueSection;
