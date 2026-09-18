"use client"

import { motion } from "framer-motion"
import { FaGithub, FaTerminal } from "react-icons/fa"
import { FiArrowUpRight } from "react-icons/fi"
import { SiStackoverflow } from "react-icons/si"
import { SectionHeading } from "components/SectionHeading"

const STACK_OVERFLOW_USER_ID = "10019394"
const STACK_OVERFLOW_PROFILE_URL = `https://stackoverflow.com/users/${STACK_OVERFLOW_USER_ID}`
const GITHUB_URL = "https://github.com/missmilo"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

const places = [
  {
    icon: SiStackoverflow,
    label: "Stack Overflow",
    description: "Answers and questions, mostly around Node, AWS, and tooling.",
    href: STACK_OVERFLOW_PROFILE_URL,
    external: true,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    description: "Open source packages, experiments, and the source for this site.",
    href: GITHUB_URL,
    external: true,
  },
  {
    icon: FaTerminal,
    label: "Interactive terminal",
    description: "This site, but as a shell. Type help to get started.",
    href: "/terminal",
    external: true,
  },
]

export const DeveloperPresenceSection = () => {
  return (
    <section id="around-the-web" className="hairline border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="06 / Around the web"
          title="Around the web"
          intro="Contributing code, answering questions, and building open tooling that helps others ship better software."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {places.map(({ icon: Icon, label, description, href, external }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="panel panel-hover group flex flex-col p-6"
              initial="hidden"
              whileInView="visible"
              custom={0.1 + i * 0.08}
              variants={fadeInUp}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="mb-5 flex items-center justify-between">
                <Icon className="muted group-hover:text-primary text-2xl transition-colors" aria-hidden />
                <FiArrowUpRight className="muted group-hover:text-base-content transition-colors" aria-hidden />
              </div>
              <h3 className="font-semibold tracking-tight">{label}</h3>
              <p className="muted mt-2 text-sm leading-relaxed">{description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
