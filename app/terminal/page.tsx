"use client"

import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { AboutMe } from "components/AboutMe"
import Contact from "components/Contact"
import FunProjects from "components/FunProjects"
import { Projects } from "components/Projects"
import { SkillsIcons } from "components/SkillsIcons"

function Help() {
  return (
    <div className="mt-4">
      Available commands:
      <ul className="mt-1 list-inside list-disc">
        {allCommands.map((cmd, index) => (
          <li key={index}>
            <kbd className="kbd kbd-sm hairline bg-base-100 text-success">{cmd.command}</kbd>{" "}
            <span className="muted">{cmd.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const ethosCommand = {
  command: "ethos --show",
  description: "Learn about my technical philosophy",
}

const helpCommand = {
  command: "help",
  description: "Show available commands",
}

const experienceCommand = {
  command: "experience --show",
  description: "View a curated list of my past projects",
}

const contactCommand = {
  command: "contact",
  description: "Get in touch with me",
}

const aboutMeCommand = {
  command: "about",
  description: "Learn more about me",
}

const clearCommand = {
  command: "clear",
  description: "Clear the terminal",
}

const funProjectsCommand = {
  command: "developer detours --show",
  description: "View my late night engineering detours",
}

const allCommands = [
  helpCommand,
  ethosCommand,
  experienceCommand,
  contactCommand,
  aboutMeCommand,
  clearCommand,
  funProjectsCommand,
]

type Command =
  | typeof ethosCommand.command
  | typeof helpCommand.command
  | typeof experienceCommand.command
  | typeof contactCommand.command
  | typeof aboutMeCommand.command
  | typeof clearCommand.command
  | typeof funProjectsCommand.command

export default function TerminalHero() {
  const [typedLine, setTypedLine] = useState("")
  const [lines, setLines] = useState<string[]>([])
  const [input, setInput] = useState("")
  const [isIntroDone, setIsIntroDone] = useState(false)
  const [activeComponent, setActiveComponent] = useState<Command | null>(null)

  useEffect(() => {
    if (activeComponent === clearCommand.command) {
      setLines([])
      setActiveComponent(null)
    }
  }, [activeComponent])

  const fullText = "> yarn maddie-dev --launch"
  const introLines = [
    "[1/4] Installing portfolio dependencies...",
    "[2/4] Initializing dev environment...",
    "[3/4] Fetching project highlights...",
    "[4/4] Deploying to DOM...",
    "ok    Site launched. Welcome to Maddie's portfolio.",
    "tip   Type help to see the available commands.",
  ]

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTypedLine(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) {
        clearInterval(interval)
        setTimeout(() => {
          setTypedLine("")
          setLines([fullText])
          runIntroSequence()
        }, 400)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const runIntroSequence = async () => {
    for (let i = 0; i < introLines.length; i++) {
      await new Promise((res) => {
        setTimeout(() => {
          setLines((prev) => [...prev, introLines[i] as string])
          res(true)
        }, 500)
      })
    }
    setIsIntroDone(true)
  }

  const handleInput = (e: React.FormEvent) => {
    e.preventDefault()

    setLines((prev) => [...prev, `> ${input}`])

    const matchedCommand = allCommands.find((cmd) => cmd.command === input)
    if (matchedCommand) {
      setActiveComponent(matchedCommand.command as Command)
    } else {
      setLines((prev) => [...prev, `Command not recognized: '${input}'`, 'Try typing "help".', ""])
      setActiveComponent(null)
    }
    setInput("")
  }

  return (
    <>
      <section className="bg-base-100 text-success flex h-screen w-screen items-center justify-center px-6 font-mono text-sm">
        <div className="panel w-full max-w-4xl overflow-hidden">
          {/* Terminal Header */}
          <div className="hairline bg-base-200 flex items-center justify-between border-b p-3">
            <div className="flex space-x-2">
              <div className="bg-base-300 h-3 w-3 rounded-full" />
              <div className="bg-base-300 h-3 w-3 rounded-full" />
              <div className="bg-base-300 h-3 w-3 rounded-full" />
            </div>
            <span className="muted text-xs">maddie@portfolio: ~</span>
            <div className="w-6" />
          </div>

          {/* Terminal Body */}
          <div className="max-h-[75vh] overflow-y-auto p-4">
            <AnimatePresence>
              {typedLine && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {typedLine}
                </motion.div>
              )}
              {lines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="whitespace-pre-wrap"
                >
                  {line}
                </motion.div>
              ))}
            </AnimatePresence>
            {activeComponent === helpCommand.command && <Help />}
          </div>

          {isIntroDone && (
            <form onSubmit={handleInput} className="hairline flex items-center border-t p-4">
              <span className="mr-2">&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="text-success placeholder:muted flex-grow border-none bg-transparent focus:outline-none"
                autoFocus
                placeholder="Type a command..."
              />
            </form>
          )}
        </div>
      </section>
      {activeComponent === ethosCommand.command && <SkillsIcons />}
      {activeComponent === aboutMeCommand.command && <AboutMe />}
      {activeComponent === experienceCommand.command && <Projects />}
      {activeComponent === funProjectsCommand.command && <FunProjects />}
      {activeComponent === contactCommand.command && <Contact />}
    </>
  )
}
