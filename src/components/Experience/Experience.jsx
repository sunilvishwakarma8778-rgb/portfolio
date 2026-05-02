import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          Experience & Training
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My professional journey through internships and UI/UX training programs.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Experience Cards */}
        {experiences.map((exp) => (
          <div key={exp.id} className="mb-16 flex justify-center">
            <div className="w-full sm:max-w-3xl p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 transition-transform duration-300">
              
              {/* Header */}
              <div className="flex items-center gap-6">
                {/* Logo */}
                <div className="w-20 h-16 bg-white rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {exp.company}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {exp.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;