import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/Sunil_img.jpeg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        >
          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Hi, I am
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Sunil Vishwakarma
          </motion.h2>

          <motion.h3
            variants={item}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec]"
          >
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={["UI/UX Designer", "& Creative Designer"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </motion.h3>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
          >
            UI/UX Designer with hands-on experience in designing responsive
            websites and mobile applications. Skilled in user research,
            wireframing, prototyping, and creating clean, user-friendly
            interfaces. Experienced in live projects, internships, and startup
            products with a strong focus on usability, accessibility, and visual
            hierarchy.
          </motion.p>

          <motion.a
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1RF_ABWMbFuw8UAMARefcK-tjOmmwRqV7/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 5px #8245ec, 0 0 20px #8245ec, 0 0 40px #8245ec",
            }}
          >
            VIEW RESUME
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <motion.img
              src={profileImage}
              alt="Sunil Vishwakarma"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
