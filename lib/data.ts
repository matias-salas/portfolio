import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import estratelImg from "@/public/estratel.png";
import trivialImg from "@/public/trivia.png";

import muchtekImg from "@/public/muchtek.png";
import willichImg from "@/public/willich.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Biomedical Engineering Studies",
    location: "Buenos Aires, AR",
    description:
      "Began studying Biomedical Engineering at UNSAM.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Full Stack Developer Bootcamp Graduate",
    location: "Buenos Aires, AR",
    description:
      "Graduated from a government bootcamp as a Full Stack Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Django Specialist Developer Bootcamp Graduate",
    location: "Buenos Aires, AR",
    description:
      "Graduated from a government bootcamp as a Django Specialist Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Data Science Degree",
    location: "Buenos Aires, AR",
    description:
      "Currently pursuing a Bachelor's degree in Data Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "Certified Tech Developer",
    location: "Buenos Aires, AR",
    description:
      "Finalizing the Certified Tech Developer career at Digital House.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Diploma in Data Science",
    location: "Buenos Aires, AR",
    description:
      "Pursuing a diploma in Data Science with a focus on Machine Learning and Artificial Intelligence at UNSAM.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Data Analyst to Full Stack Developer",
    location: "Buenos Aires, AR",
    description:
      "Working at the city government, started as a Data Analyst, now a Full Stack Developer. Also freelancing on various projects and running a startup focused on software development.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - present",
  },
] as const;


export const projectsData = [
  {
    title: "TriviaMega",
    description:
      "TriviaMega was a freelance project I undertook for two prominent companies, Accenture and Megatlon, during the course of the 2023 World Cup.",
    tags: ["Django", "MySQL", "Tailwind", "AWS-Lambda"],
    imageUrl: trivialImg,
  },
  {
    title: "Estratel",
    description:
      "I worked on this project for the government of the city of Buenos Aires for 2 years as a full-stack developer and data analyst.",
    tags: ["Django", "MySQL", "Bootstrap", "AWS-Lambda"],
    imageUrl: estratelImg,
  },
  {
    title: "Willich Ar.",
    description:
      "Willich is a freelance project for a private company, where I handled the end-to-end management, covering both commercial and administrative aspects.",
    tags: ["Django", "PostgreSQL", "MUI", "AWS-Lambda"],
    imageUrl: willichImg,
  },
  {
    title: "MuchTek",
    description:
      "MuchTeck, a project from my startup Quantum4 for a global PVC profile firm, is ongoing with my main role being the API and web interface development",
    tags: ["Django", "React-Native", "React", "MySQL", "MUI", "AWS-Lambda"],
    imageUrl: muchtekImg,
  },

] as const;

export const skillsData = [
  "Python",
  "Django",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "AWS",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Framer Motion",
] as const;