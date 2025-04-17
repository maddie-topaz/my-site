"use client"

import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"

interface SocialButtonProps {
  href?: string
  icon: React.ReactNode
  ariaLabel: string
  onClick?: () => void
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

const SocialButton = ({ href, icon, ariaLabel, onClick }: SocialButtonProps) => {
  const baseClass = "btn btn-circle btn-ghost hover:bg-base-300"

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass} aria-label={ariaLabel}>
      {icon}
    </a>
  ) : (
    <button onClick={onClick} className={baseClass} aria-label={ariaLabel}>
      {icon}
    </button>
  )
}

const Contact = () => {
  return (
    <section id="contact" className="bg-base-200 py-20 text-center dark:bg-black">
      <div className="container mx-auto max-w-2xl px-4">
        <motion.h2
          className="mb-6 text-4xl font-bold dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="mb-10 text-lg leading-relaxed text-gray-400 dark:text-gray-400"
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Want to work together, chat dev tools, or just say hi? I’m always open to thoughtful messages.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <SocialButton
            href="https://www.linkedin.com/in/maddisen-topaz-sw-developer/"
            icon={<FaLinkedin className="h-8 w-8 text-gray-700 dark:text-gray-200" />}
            ariaLabel="LinkedIn"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
