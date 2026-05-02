// Skills Section Logo's
import figma from "./assets/tech_logo/figma.png";
import xd from "./assets/tech_logo/xd.png";
import framer from "./assets/tech_logo/framer.png";
import aftereffects from "./assets/tech_logo/after.png";
import ps from "./assets/tech_logo/ps.png";
import vscode from "./assets/tech_logo/vscode.png";
import react from "./assets/tech_logo/react.png";
import github from "./assets/tech_logo/github.png";
import gpt from "./assets/tech_logo/gpt.png";
import miro from "./assets/tech_logo/miro.png";
import vercel from "./assets/tech_logo/vercel.png";
// import canva from "./assets/tech_logo/canva.png"; // Add canva.png to tech_logo folder

// Experience Section Logo's
import HCLogo from "./assets/company_logo/HC_logo.png";
import PWskills from "./assets/company_logo/PWskills.png"; // Add PWskills.png logo to company_logo folder

// Education Section Logo's
// Note: education logos need to be created in work_logo folder


// ================= SKILLS =================
export const SkillsInfo = [
  {
    title: "Software Skills",
    skills: [
      { name: "Figma", logo: figma },
      { name: "Adobe XD", logo: xd },
      { name: "Framer", logo: framer },
      { name: "After Effects", logo: aftereffects },
      { name: "Photoshop", logo: ps },
      { name: "Canva", logo: figma }, // Using figma logo as placeholder - replace with canva logo
      { name: "VS Code", logo: vscode },
      { name: "React", logo: react },
      { name: "GitHub", logo: github },
      { name: "ChatGPT", logo: gpt },
      { name: "Miro", logo: miro },
      { name: "Vercel", logo: vercel },
    ],
  },
];

// ================= EXPERIENCE =================
export const experiences = [
  {
    id: 0,
    img: HCLogo,
    role: "Creative Designer",
    company: "Hyper Cloud Digital Solutions",
    date: "June 2025 - Present",
    desc: "Worked on real-world design projects including UI screens, social media creatives, and branding assets while collaborating with developers.",
  },
  {
    id: 1,
    img: PWskills,
    role: "UI/UX Design Trainee",
    company: "PW Skills",
    date: "October 2025 - Present",
    desc: "Completed an intensive UI/UX design program covering user research, user flows, wireframing, prototyping, and design systems. Worked on real-world projects using Figma, focusing on usability, accessibility, and user-centered design principles.",
  },
  {
    id: 2,
    img: "https://www.pngkey.com/png/detail/177-1777568_maac-logo-maya-academy-of-advanced-cinematics.png",
    role: "UI/UX Instructor",
    company: "MAAC Institute",
    date: "2025 - Present",
    desc: "Teaching UI/UX design with a focus on user research, wireframing, prototyping, and design systems. Mentoring students on real-world projects and helping them build industry-ready portfolios using Figma and modern design practices.",
  },
];

// ================= EDUCATION =================
export const education = [
  {
    id: 0,
    img: null,
    school: "Surya College Of Education Miraganj, Khalilabad",
    date: "2021 - 2023",
    degree: "Bachelor of Arts",
  },
  {
    id: 1,
    img: null,
    school: "National Kala Academy, Gorakhpur",
    date: "2020 - 2021",
    degree: "Intermediate (Science)",
  },
  {
    id: 2,
    img: null,
    school: "National Kala Academy, Gorakhpur",
    date: "2018 - 2019",
    degree: "Matriculation (10th)",
  },
];

// ================= PROJECTS =================
export const projects = [];