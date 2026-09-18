"use client"

import { motion } from "framer-motion"
import { AnimatedTerminal } from "components/AnimatedTerminal"

const rise = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
})

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

export const Hero = () => {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-16">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="bg-glow absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <motion.p className="eyebrow mb-5" initial="hidden" animate="visible" variants={rise(0)}>
            Full-stack engineer
          </motion.p>
          <motion.h1
            className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            initial="hidden"
            animate="visible"
            variants={rise(0.08)}
          >
            Maddie Topaz
          </motion.h1>
          <motion.p
            className="muted-strong mt-6 max-w-xl text-xl leading-relaxed text-pretty sm:text-2xl"
            initial="hidden"
            animate="visible"
            variants={rise(0.16)}
          >
            Full-stack engineer with a <span className="text-base-content font-medium">platform mindset</span> and a{" "}
            <span className="text-base-content font-medium">DevOps heart</span>.
          </motion.p>

          <motion.div className="mt-10 flex flex-wrap gap-3" initial="hidden" animate="visible" variants={rise(0.24)}>
            <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
              View projects
            </button>
            <button
              className="btn btn-outline hairline hover:border-base-content hover:bg-base-content hover:text-base-100 font-normal"
              onClick={() => scrollTo("contact")}
            >
              Get in touch
            </button>
          </motion.div>

          <motion.dl
            className="muted mt-12 grid max-w-md grid-cols-[auto_1fr] gap-x-6 gap-y-2 font-mono text-xs"
            initial="hidden"
            animate="visible"
            variants={rise(0.32)}
          >
            <dt className="text-secondary">currently</dt>
            <dd>FTP Solutions, Full Stack Software Engineer</dd>
            <dt className="text-secondary">previously</dt>
            <dd>Atlassian, VGW, Hexagon Mining</dd>
            <dt className="text-secondary">certified</dt>
            <dd>AWS Solutions Architect, Associate</dd>
          </motion.dl>
        </div>

        <div className="w-full">
          <AnimatedTerminal />
        </div>
      </div>
    </section>
  )
}
