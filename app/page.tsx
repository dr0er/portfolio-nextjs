"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import useMediaQuery from "@/lib/useMediaQuery";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      {isDesktop && <Skills />}
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
