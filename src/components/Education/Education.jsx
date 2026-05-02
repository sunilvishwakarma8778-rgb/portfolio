import { education } from "../../constants";

// Icons
const collegeIcon = "https://cdn-icons-png.flaticon.com/512/3135/3135755.png";
const schoolIcon = "https://cdn-icons-png.flaticon.com/512/3135/3135789.png";

const getEducationIcon = (degree) => {
  const text = degree.toLowerCase();

  if (
    text.includes("bachelor") ||
    text.includes("degree") ||
    text.includes("b.a") ||
    text.includes("bsc")
  ) {
    return collegeIcon;
  }

  return schoolIcon;
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-gradient-to-b from-[#050414] to-[#0a061f]"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg">
          My academic journey and qualifications
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-12 items-center">

        {education.map((edu) => (
          <div
            key={edu.id}
            className="w-full max-w-3xl p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:scale-105 transition duration-300"
          >
            {/* Glass Card */}
            <div className="bg-[#0b0a1a]/80 backdrop-blur-xl rounded-2xl p-6 flex items-center gap-6">

              {/* Icon */}
              <div className="w-20 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                <img
                  src={edu.img || getEducationIcon(edu.degree)}
                  alt={edu.school}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-sm text-gray-300">
                  {edu.school}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {edu.date}
                </p>

                {edu.grade && (
                  <p className="text-sm text-gray-400 mt-2">
                    <span className="font-semibold">Grade:</span> {edu.grade}
                  </p>
                )}

                {edu.desc && (
                  <p className="text-sm text-gray-400 mt-1">
                    {edu.desc}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Education;