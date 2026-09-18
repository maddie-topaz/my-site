"use client"

import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { SectionHeading } from "components/SectionHeading"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

const Contact = () => {
  return (
    <section id="contact" className="hairline border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="08 / Contact"
          title="Get in touch"
          intro="Want to work together, chat dev tools, or just say hi? I’m always open to thoughtful messages."
          align="center"
        />

        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <a
            href="https://www.linkedin.com/in/maddisen-topaz-sw-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gap-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" aria-hidden />
            Message me on LinkedIn
          </a>
        </motion.div>

        <footer className="muted mt-32 flex flex-col items-center justify-between gap-2 font-mono text-xs sm:flex-row">
          <span>© {new Date().getFullYear()} Maddie Topaz</span>
          <span>Built with Next.js and Tailwind.</span>
        </footer>
      </div>
    </section>
  )
}

export default Contact
