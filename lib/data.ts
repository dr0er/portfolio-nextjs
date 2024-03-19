import React from "react";
import {
  TbBrandReact,
  TbBrandTypescript,
  TbDatabaseHeart,
  TbCpu,
} from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import gymComp from "@/public/gymComp.png";
import hearme from "@/public/hearme.png";
import campsite from "@/public/campsite.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "College",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-end Developer (freelance)",
    location: "Remote",
    description:
      "For several months I served as a contractor, successfully participating in multiple projects and collaborating with professionals across the US and EU. I adeptly utilized a robust tech stack encompassing React, Next.js, both JavaScript and Typescript while creating outstanding layouts using Tailwind CSS and Figma in the execution of these assignments.",
    icon: React.createElement(TbBrandTypescript),
    date: "08/2023 - 03/2024",
  },
  {
    title: "Full-stack Developer (HearMe & Emplomind UK)",
    location: "Warsaw, Poland",
    description:
      "As a developer chosen by the CTO, my initial focus was on re-branding company's core application. Subsequently, I shifted to full-stack responsibilities, where I developed new services and integrated them into the existing solution. My role involved independent problem-solving, tool selection and implementation. Efficiently managing time, I balanced code development, database monitoring, system testing, yet creating both technical documentation and client-focused video announcements.",
    icon: React.createElement(IoLogoNodejs),
    date: "12/2021 - 07/2023",
  },
  {
    title: "Front-end Developer (Apprenticeship)",
    location: "Remote",
    description:
      "Among many other activities, my role was based on: building responsive front-end interface delivered by our UI/UX designer, helping with team management, technological stack optimization, JIRA issue tracking and administrating project's repository on GitHub.",
    icon: React.createElement(TbBrandReact),
    date: "04/2021 - 11/2021",
  },
] as const;

export const projectsData = [
  {
    title: "HearMe PWA",
    description:
      "Application for anonymous therapy sessions that has features including video calls, chats, webinars and much more. I took a part building it as a full-stack developer.",
    tags: ["React", "Typescript", "Node.js", "PostgreSQL", "GraphQL"],
    imageUrl: hearme,
    demoLink: "https://hearme.pl",
  },
  {
    title: "Campsite",
    description:
      "Production-ready frontend layer of a camping website, that helps users to find and book their dream sheltering ground.",
    tags: ["Next.js", "Typescript", "Tailwind CSS"],
    imageUrl: campsite,
    demoLink: "https://camping-layer.vercel.app/",
  },
  {
    title: "Exercise Compendium",
    description:
      "Innovative application designed to empower users in searching for exercises across all muscle groups, providing comprehensive guidance.",
    tags: ["React", "JavaScript", "CSS", "Material UI", "REST API"],
    imageUrl: gymComp,
    demoLink: "https://gym-exercise-compendium.vercel.app/",
  },
] as const;

export const skillsData = [
  "Semantic HTML",
  "CSS (Sass/Tailwind)",
  "JavaScript",
  "TypeScript",
  "React (with various libraries)",
  "Redux",
  "Next.js",
  "Node.js (Express)",
  "NoSQL databases (MongoDB)",
  "SQL databases (PostgreSQL)",
  "Design (Figma/Canva)",
  "Version control (GIT/GitHub Actions)",
  "Working with REST APIs",
  "Containerization (Docker)",
  "Software architecture (UML)",
  "Atlassian (Jira/Confluence)",
  "Agile management (Scrum/Kanban)",
] as const;

export const educationData = [
  {
    title:
      "Master's Degree in Information Management, Architecture of IT Systems",
    location: "Polish-Japanese Academy of Information Technology",
    description:
      "In pursuit of advancing my professional expertise, I have embarked on a journey of master's studies. During this period, I am dedicated to cultivating a multifaceted skill set encompassing project management, software testing, database design and implementation, and proficiency in conflict resolution. Additionally, I am immersing myself in the principles of Scrum culture to further enrich my knowledge and contribute effectively to complex project environments.",
    icon: React.createElement(TbDatabaseHeart),
    date: "10/2023 - PRESENT",
  },
  {
    title: "Bachelor of Engineering in Computer Science, Software Engineering",
    location: "Warsaw School of Information Technology",
    description:
      "I have earned a Bachelor of Engineering in Computer Science, specializing in Software Engineering. The extensive curriculum covered crucial subjects, including: data structures, algorithms, database management systems, web development, data science, architecture of computers, and operating systems. This educational experience has endowed me with a substantial knowledge, providing exposure to a diverse range of subjects, thereby contributing to a comprehensive understanding of principles in computer science.",
    icon: React.createElement(TbCpu),
    date: "12/2021 - 07/2023",
  },
] as const;
