"use client"

import { motion } from "framer-motion"
import type { IconType } from "react-icons"
import { FiActivity, FiAnchor, FiBox, FiCrosshair, FiLink, FiRefreshCw, FiSend, FiShield } from "react-icons/fi"
import { TbTestPipe } from "react-icons/tb"
import { SectionHeading } from "components/SectionHeading"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

type Principle = { icon: IconType; title: string; description: string }

const developerEthos: Principle[] = [
  {
    icon: FiBox,
    title: "Composability over Complexity",
    description:
      "I favor modular, composable design. Breaking problems down into reusable, testable parts to reduce complexity.",
  },
  {
    icon: FiShield,
    title: "Types That Tell the Truth",
    description:
      "I treat types as clear contracts. Type safe code boosts maintainability, developer experience, and early bug detection.",
  },
  {
    icon: TbTestPipe,
    title: "Test with Purpose, Ship with Confidence",
    description:
      "I use TDD to enable fearless iteration, using tests to shape design and catch issues early, before they reach production.",
  },
]

const operationsEthos: Principle[] = [
  {
    icon: FiSend,
    title: "Built to Ship, Built to Scale",
    description:
      "DevOps isn’t a separate phase, it’s embedded into everything I build. From CI/CD pipelines to IaC, I automate the full delivery lifecycle (deployment, testing, monitoring, and analytics) to enable rapid, resilient, and fault-tolerant software delivery.",
  },
  {
    icon: FiAnchor,
    title: "Built to Last, Built to Adapt",
    description:
      "I design cloud systems that are built to scale, stay reliable under pressure, stay secure by design, and optimize performance and cost, all guided by the AWS Well-Architected Framework.",
  },
  {
    icon: FiActivity,
    title: "DevOps as a Diagnostic Lens",
    description:
      "I use DevOps as more than automation. It's a lens for understanding systems end-to-end. With observability, logging, and continuous feedback loops, I get to the root cause of issues fast and build solutions that last.",
  },
]

const deliveryEthos: Principle[] = [
  {
    icon: FiCrosshair,
    title: "Idea to Impact",
    description:
      "I guide features from discovery to delivery, focusing on solving the right problems, not just shipping code. I lead features with a focus on delivering measurable business and user outcomes, not just checking off tasks.",
  },
  {
    icon: FiRefreshCw,
    title: "Feedback-Driven Development",
    description:
      "I build iteratively: testing assumptions early, learning fast, and refining features based on real feedback, not guesswork.",
  },
  {
    icon: FiLink,
    title: "No Broken Links",
    description:
      "I see delivery as a full-stack responsibility, from database migrations to UI polish, ensuring nothing gets dropped between handoffs.",
  },
]

const EthosGroup = ({ ethos, title, index }: { ethos: Principle[]; title: string; index: number }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-[12rem_1fr]">
      <motion.h3
        className="eyebrow pt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {title}
      </motion.h3>
      <div className="grid gap-4 md:grid-cols-3">
        {ethos.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            className="panel panel-hover flex flex-col p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={index * 0.05 + i * 0.08}
            variants={fadeInUp}
          >
            <span className="bg-base-300/60 text-primary mb-5 flex h-10 w-10 items-center justify-center rounded-md">
              <Icon className="text-lg" aria-hidden />
            </span>
            <h4 className="mb-2 font-semibold tracking-tight">{title}</h4>
            <p className="muted text-sm leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export const SkillsIcons = () => {
  return (
    <section id="ethos" className="hairline border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 / Ethos"
          title="How I work"
          intro="Nine working principles across three lenses: writing code, running systems, and getting work to users."
        />
        <div className="space-y-12">
          <EthosGroup ethos={developerEthos} title="Developer" index={0} />
          <EthosGroup ethos={operationsEthos} title="Operations" index={1} />
          <EthosGroup ethos={deliveryEthos} title="Delivery" index={2} />
        </div>
      </div>
    </section>
  )
}
