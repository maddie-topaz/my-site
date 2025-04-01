"use client";
import { SkillsIcons } from "components/SkillsIcons";
import { AboutMe } from "components/AboutMe";
import { Projects } from "components/Projects";
import { Hero } from "components/Hero";
import Contact from "components/Contact";
import { DeveloperPresenceSection } from "components/StackOverflowCard";

export default function Web() {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Hero />
      <AboutMe />
      <SkillsIcons />
      <Projects />
      <DeveloperPresenceSection />
      <Contact />
    </div>
  )
}
