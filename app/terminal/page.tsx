"use client"

import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { SkillsIcons } from "components/SkillsIcons"

function Help() {
  return (
    <div className="mt-4 text-green-300">
      Available commands:
      <ul className="mt-1 list-inside list-disc">
        {allCommands.map((cmd, index) => (
          <li key={index}>
            <kbd className="kbd kbd-sm border border-green-500 bg-black text-green-400">{cmd.command}</kbd> —{" "}
            {cmd.description}
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

const allCommands = [helpCommand, ethosCommand, experienceCommand, contactCommand, aboutMeCommand, clearCommand]

type Command =
  | typeof ethosCommand.command
  | typeof helpCommand.command
  | typeof experienceCommand.command
  | typeof contactCommand.command
  | typeof aboutMeCommand.command
  | typeof clearCommand.command

export default function TerminalHero() {
  const [typedLine, setTypedLine] = useState("")
  const [lines, setLines] = useState<string[]>([])
  const [input, setInput] = useState("")
  const [isIntroDone, setIsIntroDone] = useState(false)
  const [activeComponent, setActiveComponent] = useState<Command | null>(null)

  const fullText = "> yarn maddie-dev --launch"
  const introLines = [
    "📦 Installing portfolio dependencies...",
    "⚙️ Initializing dev environment...",
    "🔍 Fetching project highlights...",
    "✨ Deploying to DOM...",
    "✅ Site successfully launched! Welcome to Maddie's Portfolio!",
    "💡Tip: type help to see a list of available commands.",
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
    const cmd = input.trim().toLowerCase() as Command
    setLines((prev) => [...prev, `> ${input}`])

    if (cmd === "ethos --show" || cmd === "help") {
      setActiveComponent(cmd)
    } else {
      setLines((prev) => [...prev, `Command not recognized: '${cmd}'`, 'Try typing "help".', ""])
      setActiveComponent(null)
    }
    setInput("")
  }

  return (
    <>
      <section className="flex h-screen w-screen items-center justify-center bg-black font-mono text-green-400">
        <div className="daisyui-box w-full max-w-4xl rounded-lg border border-green-600 bg-black shadow-lg">
          {/* Terminal Header */}
          <div className="flex items-center justify-between rounded-t-lg border-b border-green-600 bg-neutral-900 p-3">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-gray-300">maddie@portfolio: ~</span>
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
            <form onSubmit={handleInput} className="flex items-center border-t border-green-600 p-4">
              <span className="mr-2">&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow border-none bg-transparent text-green-400 placeholder-green-600 focus:outline-none"
                autoFocus
                placeholder="Type a command..."
              />
            </form>
          )}
        </div>
      </section>
      {activeComponent == ethosCommand.command && <SkillsIcons />}
    </>
  )
}
