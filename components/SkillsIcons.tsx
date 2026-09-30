"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  LuFlaskConical,
  LuLink,
  LuLock,
  LuPuzzle,
  LuRefreshCw,
  LuShip,
  LuStethoscope,
  LuTarget,
  LuWrench,
} from "react-icons/lu"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

const developerEthos = [
  {
    icon: <LuPuzzle />,
    title: "Composability over Complexity",
    description:
      "I favor modular, composable design. Breaking problems down into reusable, testable parts to reduce complexity.",
  },
  {
    icon: <LuLock />,
    title: "Types That Tell the Truth",
    description:
      "I treat types as clear contracts. Type safe code boosts maintainability, developer experience, and early bug detection.",
  },
  {
    icon: <LuFlaskConical />,
    title: "Test with Purpose, Ship with Confidence",
    description:
      "I use TDD to enable fearless iteration, using tests to shape design and catch issues early, before they reach production.",
  },
]

const operationsEthos = [
  {
    icon: <LuShip />,
    title: "Built to Ship, Built to Scale",
    description:
      "DevOps isn’t a separate phase. It’s embedded into everything I build. From CI/CD pipelines to IAC, I automate the full delivery lifecycle (deployment, testing, monitoring, and analytics) to enable rapid, resilient, and fault-tolerant software delivery.",
  },
  {
    icon: <LuWrench />,
    title: "Built to Last, Built to Adapt",
    description:
      "I design cloud systems that are built to scale, stay reliable under pressure, stay secure by design, and optimize performance and cost, all guided by the AWS Well-Architected Framework.",
  },
  {
    icon: <LuStethoscope />,
    title: "DevOps as a Diagnostic Lens",
    description:
      "I use DevOps as more than automation. It's a lens for understanding systems end-to-end. With observability, logging, and continuous feedback loops, I get to the root cause of issues fast and build solutions that last.",
  },
]

const deliveryEthos = [
  {
    icon: <LuTarget />,
    title: "Idea to Impact",
    description:
      "I guide features from discovery to delivery, focusing on solving the right problems, not just shipping code. I lead features with a focus on delivering measurable business and user outcomes, not just checking off tasks.",
  },
  {
    icon: <LuRefreshCw />,
    title: "Feedback-Driven Development",
    description:
      "I build iteratively: testing assumptions early, learning fast, and refining features based on real feedback, not guesswork.",
  },
  {
    icon: <LuLink />,
    title: "No Broken Links",
    description:
      "I see delivery as a full-stack responsibility (from database migrations to UI polish), ensuring nothing gets dropped between handoffs.",
  },
]

const hoverCard = {
  hover: {
    scale: 1.03,
    rotate: 0.2,
    transition: { type: "spring", stiffness: 300 },
  },
}

const ethosById = {
  developer: { label: "Developer", ethos: developerEthos },
  operations: { label: "Operations", ethos: operationsEthos },
  delivery: { label: "Delivery", ethos: deliveryEthos },
}

type EthosId = keyof typeof ethosById

const ethosIds = Object.keys(ethosById) as EthosId[]

export const SkillsIcons = () => {
  const [activeId, setActiveId] = useState<EthosId>("developer")
  const active = ethosById[activeId]

  return (
    <div className="bg-black">
      <section className="bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-8 text-center text-3xl font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Ethos
          </motion.h2>
          <div role="tablist" className="tabs tabs-border mb-8 justify-center">
            {ethosIds.map((id) => (
              <button
                key={id}
                role="tab"
                id={`ethos-tab-${id}`}
                aria-selected={id === activeId}
                aria-controls="ethos-panel"
                className={`tab text-base ${id === activeId ? "tab-active font-semibold text-white" : "text-gray-400"}`}
                onClick={() => setActiveId(id)}
              >
                {ethosById[id].label}
              </button>
            ))}
          </div>
          <div
            key={activeId}
            id="ethos-panel"
            role="tabpanel"
            aria-labelledby={`ethos-tab-${activeId}`}
            className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"
          >
            {active.ethos.map(({ icon, title, description }, index) => (
              <motion.div
                key={title}
                className="card bg-base-200 cursor-pointer shadow-md"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index * 0.1}
                variants={{ ...fadeInUp, ...hoverCard }}
              >
                <div className="card-body items-center gap-2 p-6 text-center">
                  <motion.div
                    className="bg-base-300 mb-2 flex h-16 w-16 items-center justify-center rounded-full text-3xl text-indigo-400"
                    whileHover={{ rotate: 8 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {icon}
                  </motion.div>
                  <h3 className="text-lg leading-snug font-semibold text-white">{title}</h3>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
