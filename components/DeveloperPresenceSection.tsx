"use client"

import { motion } from "framer-motion"
import { FaGithub, FaTerminal } from "react-icons/fa"
import { SiStackoverflow } from "react-icons/si"

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

export const DeveloperPresenceSection = () => {
  return (
    <section className="bg-base-100 border-base-300 border-t py-20 text-center dark:border-gray-800 dark:bg-black">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.h2
          className="mb-6 text-4xl font-bold dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Developer Presence
        </motion.h2>

        <motion.p
          className="mb-12 text-lg leading-relaxed text-gray-400 dark:text-gray-200"
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          I’m active across the dev community — contributing code, answering questions, and building open tooling that
          helps others ship better software.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Stack Overflow */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            variants={fadeInUp}
            viewport={{ once: true }}
            className="bg-base-200 dark:bg-base-300 rounded-xl p-6 shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            <SiStackoverflow className="mx-auto mb-3 text-4xl text-orange-500 dark:text-orange-400" />
            <a
              href={STACK_OVERFLOW_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-500 hover:underline"
            >
              View My Stack Overflow Profile
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            variants={fadeInUp}
            viewport={{ once: true }}
            className="bg-base-200 dark:bg-base-300 rounded-xl p-6 shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            <FaGithub className="mx-auto mb-3 text-4xl" style={{ color: "#8257e5" }} />
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-500 hover:underline"
            >
              Explore My GitHub
            </a>
          </motion.div>

          {/* Dev Terminal UI */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            variants={fadeInUp}
            viewport={{ once: true }}
            className="bg-base-200 dark:bg-base-300 rounded-xl p-6 shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            <FaTerminal className="mx-auto mb-3 text-4xl" style={{ color: "#00ff87" }} />
            <a
              href={"DEV_PORTFOLIO_URL"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-500 hover:underline"
            >
              Launch Interactive Terminal
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
