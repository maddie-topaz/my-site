"use client"

import { motion } from "framer-motion"

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
    icon: "🧩",
    title: "Composability over Complexity",
    description:
      "I favor modular, composable design — breaking problems down into reusable, testable parts to reduce complexity and increase clarity.",
  },
  {
    icon: "🔐",
    title: "Types That Tell the Truth",
    description:
      "I treat types as clear contracts — building predictable, resilient systems through type-safe code that boosts maintainability, developer experience, and early bug detection.",
  },
  {
    icon: "🧪",
    title: "Test with Purpose, Ship with Confidence",
    description:
      "I use TDD to drive clarity, ensure stability, and enable fearless iteration — letting tests shape design and catch issues before they reach production.",
  },
]

const operationsEthos = [
  {
    icon: "🚢",
    title: "Built to Ship, Built to Scale",
    description:
      "DevOps isn’t a separate phase — it’s embedded into everything I build. From CI/CD pipelines to IAC, I automate the full delivery lifecycle — deployment, testing, monitoring, and analytics — to enable rapid, resilient, and fault-tolerant software delivery.",
  },
  {
    icon: "🔄",
    title: "Feedback-Driven Development",
    description:
      "I build iteratively — testing assumptions early, learning fast, and refining features based on real feedback, not guesswork.",
  },
  {
    icon: "🩺",
    title: "DevOps as a Diagnostic Lens",
    description:
      "I use DevOps as more than automation — it's a lens for understanding systems end-to-end. With observability, logging, and continuous feedback loops, I get to the root cause of issues fast and build solutions that last.",
  },
]

const deliveryEthos = [
  {
    icon: "🎯",
    title: "Idea to Impact",
    description:
      "I guide features from discovery to delivery, focusing on solving the right problems, not just shipping code. I lead features with a focus on delivering measurable business and user outcomes — not just checking off tasks.",
  },
  {
    icon: "🛠️",
    title: "Built to Last, Built to Adapt",
    description:
      "I design cloud systems that are built to scale, stay reliable under pressure, stay secure by design, and optimize performance and cost — all guided by the AWS Well-Architected Framework.",
  },
  {
    icon: "⛓️",
    title: "No Broken Links",
    description:
      "I see delivery as a full-stack responsibility — from database migrations to UI polish — ensuring nothing gets dropped between handoffs.",
  },
]

const EthosSection = ({ ethos, title }: { ethos: typeof developerEthos; title: string }) => {
  return (
    <section className="bg-base-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {title}
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {ethos.map((skill, index) => (
            <motion.div
              key={index}
              className="card bg-base-200 w-96 shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.1}
              variants={fadeInUp}
            >
              <div className="card-body items-center text-center">
                <div className="bg-base-200 mb-4 flex h-24 w-24 items-center justify-center rounded-full text-4xl">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="mb-4 text-base text-gray-400">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const SkillsIcons = () => {
  return (
    <div className="bg-black">
      <EthosSection ethos={developerEthos} title="Developer Ethos" />
      <EthosSection ethos={operationsEthos} title="Operations Ethos" />
      <EthosSection ethos={deliveryEthos} title="Delivery Ethos" />
    </div>
  )
}
