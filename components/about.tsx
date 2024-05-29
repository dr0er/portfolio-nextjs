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
      <SectionHeading>Welcome to my digital corner! 🙋🏻‍♂️🌍</SectionHeading>
      <article className="mb-3">
        <p>
          I'm a technology enthusiast with a{" "}
          <b>Bachelor of Engineering degree </b>
          in Computer Science 🧑🏻‍💻. Currently, I'm immersed in the dynamic world
          of IT as I pursue my <b>Master's degree</b> at the{" "}
          <i>Polish-Japanese Academy of Information Technology 🎓.</i>
        </p>
        <br />
        <p>
          For recent years, I've been captivated by the art of
          <b> Front-End Development 🎨</b>, pouring my creativity into crafting
          seamless user experiences. However, my journey doesn't stop there as
          I'm eagerly gearing up to transition into a{" "}
          <b>Full-Stack Developer ⚒️</b> in the following year.
        </p>
        <br />
        <p>
          {" "}
          At home, I wear the hat of a dog lover 🐶💖, dedicating time to train
          my lovely Jack Russell <s>Terrier</s> Terror, named Klusia.
          Additionally, I find joy in the meticulous art of working out 🏋🏻‍♂️.
        </p>
      </article>
    </motion.section>
  );
}
