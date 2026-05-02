import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zlnjjz9",
        "template_s4ef9j8",
        form.current,
        "Q5AiZyU7T1kkpYX0h"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Premium 3D Contact Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-16"
      >
        <ContactIcon
          href="mailto:sunilvishwakarma8778@gmail.com?subject=Contact from Portfolio"
          gradient="from-purple-600 to-pink-500"
          shadow="shadow-purple-500/40"
          icon={<HiOutlineMail />}
          label="Email Me"
        />

        <ContactIcon
          href="tel:+917355757848"
          gradient="from-green-500 to-emerald-600"
          shadow="shadow-green-500/40"
          icon={<HiOutlinePhone />}
          label="Call Me"
        />

        <ContactIcon
          href="https://wa.me/917355757848"
          gradient="from-green-600 to-lime-500"
          shadow="shadow-green-600/40"
          icon={<FaWhatsapp />}
          label="WhatsApp"
        />

        <ContactIcon
          href="https://www.linkedin.com/in/sunil-vishwakarma-a20923284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          gradient="from-blue-600 to-sky-500"
          shadow="shadow-blue-500/40"
          icon={<FaLinkedinIn />}
          label="LinkedIn"
        />
      </motion.div>
    </section>
  );
};

/* 🔥 REUSABLE 3D CONTACT ICON COMPONENT */
const ContactIcon = ({ href, gradient, shadow, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex flex-col items-center gap-3"
    initial={{ y: 0 }}
    animate={{ y: [-6, 6, -6] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    {/* 🔮 3D Animated Glow */}
    <motion.div
      className="absolute w-24 h-24 rounded-full blur-2xl opacity-60"
      animate={{ scale: [1, 1.3, 1], rotate: [0, 360] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      style={{
        background:
          "linear-gradient(135deg, rgba(168,85,247,0.8), rgba(236,72,153,0.8))",
      }}
    />

    {/* 🔮 Floating Blob */}
    <motion.div
      className="absolute w-20 h-20 rounded-full blur-2xl opacity-40"
      animate={{ scale: [1.2, 1, 1.2], rotate: [360, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      style={{
        background:
          "linear-gradient(135deg, rgba(34,197,94,0.7), rgba(14,165,233,0.7))",
      }}
    />

    {/* 🔥 Icon Card */}
    <div
      className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient}
      flex items-center justify-center text-white text-4xl shadow-2xl ${shadow}
      hover:scale-110 transition-transform duration-300`}
    >
      {icon}
    </div>

    <span className="relative z-10 text-sm text-gray-300 font-medium">
      {label}
    </span>
  </motion.a>
);

export default Contact;
