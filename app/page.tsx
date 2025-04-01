"use client"
import { AboutMe } from "components/AboutMe"
import Contact from "components/Contact"
import { Hero } from "components/Hero"
import { Projects } from "components/Projects"
import { SkillsIcons } from "components/SkillsIcons"
import { DeveloperPresenceSection } from "components/StackOverflowCard"

export default function Web() {
  return (
    <div className="bg-base-100 flex min-h-screen flex-col">
      <Hero />
      <AboutMe />
      <SkillsIcons />
      <Projects />
      <DeveloperPresenceSection />
      <Contact />
    </div>
  )
}
