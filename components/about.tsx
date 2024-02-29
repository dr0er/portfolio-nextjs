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
      <SectionHeading>about me</SectionHeading>
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
          For past <b>three years</b>, I've been captivated by the art of
          <b> Front-End Development 🎨</b>, pouring my creativity into crafting
          seamless user experiences. However, my journey doesn't stop there as
          I'm eagerly gearing up to transition into a{" "}
          <b>Full-Stack Developer ⚒️</b> in the following year.
        </p>
        <br />
        <p>
          {" "}
          Beyond the coding realm, my life is a mosaic of diverse interests 🤩.
          Delving into the intricacies of psychology through reading is a
          constant joy, providing a fascinating complement to my technical
          pursuits 📚. When not immersed in lines of code, I'm out exploring on
          my gravel bike 🚵🏻, seeking the thrill of new adventures. On a digital
          quest, you'll find me engrossed in MMORPG and hack-n-slash games,
          where I conquer virtual universes 🎮.
        </p>
        <br />
        <p>
          {" "}
          At home, I wear the hat of a dog lover 🐶💖, dedicating time to train
          my lovely Jack Russell <s>Terrier</s> Terror, named Kluseczka.
          Additionally, I find joy in the meticulous art of building, bringing{" "}
          <i>LEGO</i> creations to life.
        </p>
        <br />
        <p>
          Join me on this multifaceted journey as I navigate the realms of
          technology, psychology, outdoor escapades, gaming, pet companionship,
          and the intricate world of construction. Welcome to my corner of the
          digital universe! 🙋🏻‍♂️🌍
        </p>
      </article>
    </motion.section>
  );
}
