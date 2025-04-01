"use client"

import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

const funProjects = [
  {
    title: "CLI Mood Generator",
    description: "A terminal tool that suggests synthwave playlists based on your mood.",
    link: "https://github.com/yourname/mood-cli",
  },
  {
    title: "ASCII Animator",
    description: "Render animated waveforms in ASCII. Because why not.",
    link: "https://github.com/yourname/ascii-animator",
  },
  {
    title: "Synthwave Sticker Picker",
    description: "Randomly selects one of your 80s-style glitter sticker concepts with die-cut preview.",
    link: "https://github.com/yourname/sticker-picker",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

const FunProjects = () => {
  return (
    <section className="bg-base-200 dark:bg-base-300 py-20 text-center">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h2
          className="mb-6 text-4xl font-bold dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Side Quests
        </motion.h2>

        <motion.p
          className="mb-12 text-lg text-gray-700 dark:text-gray-300"
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Experimental tools, weird CLI utilities, and synthwave side quests.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          {funProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="bg-base-100 rounded-xl p-6 text-left shadow-md hover:shadow-lg dark:bg-black"
              initial="hidden"
              whileInView="visible"
              custom={0.2 + idx * 0.1}
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <h3 className="mb-2 text-xl font-semibold dark:text-white">{project.title}</h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-500 hover:underline"
              >
                <FaGithub /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FunProjects
