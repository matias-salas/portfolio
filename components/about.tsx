"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        While I was studying <span className="font-medium">Biomedical Engineering</span> and started to explore coding, I discovered my passion for
        <span className="font-medium"> programming</span>. I completed various courses and diplomas that equipped me
        with the skills I have today, like <span className="font-medium"> Certified Tech Developer </span> in <a href="https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer" className="font-medium underline"> Digital House</a>. Simultaneously, while studying
        <span className="font-medium"> development</span>, I specialized in <span className="font-medium">machine learning</span> and <span className="font-medium">artificial
        intelligence</span>. Currently, I am pursuing a degree in <span className="font-medium">Data Science</span> at <a href="https://www.unsam.edu.ar/escuelas/ecyt/661/ciencia/ciencia-de-datos" className="font-medium underline">UNSAM</a> <span className="italic">(Universidad Nacional de San Martín)</span>.
        My core stack includes <span className="font-medium">Django</span>, <span className="font-medium">React</span>, <span className="font-medium">React Native</span>,
        <span className="font-medium"> MySQL</span>, and <span className="font-medium">AWS</span>, and I am
        specialist in <span className="font-medium">Python</span> for <span className="font-medium">data analysis</span> and <span className="font-medium">machine learning</span>.
      </p>

      <p>
        When I'm not coding, I enjoy playing video games, watching movies, and
        spending time with my dog. I also have a strong interest in learning new
        things, which is why I'm always looking for new challenges.
      </p>
    </motion.section>
  );
}
