"use client"
import { AboutMe } from "components/AboutMe"
import Contact from "components/Contact"
import { DeveloperPresenceSection } from "components/DeveloperPresenceSection"
import FunProjects from "components/FunProjects"
import { Hero } from "components/Hero"
import { Projects } from "components/Projects"
import { SkillsIcons } from "components/SkillsIcons"

export default function Web() {
  return (
    <div className="bg-base-100 flex min-h-screen flex-col">
      <Hero />
      <AboutMe />
      <SkillsIcons />
      <Projects />
      <FunProjects />
      <DeveloperPresenceSection />
      <Contact />
    </div>
  )
}
