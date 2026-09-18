"use client"

import { motion } from "framer-motion"

const rise = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

type Props = {
  eyebrow: string
  title: string
  intro?: string
  align?: "left" | "center"
}

/* Eyebrow + title + optional intro, shared by every section so they read as one system. */
export const SectionHeading = ({ eyebrow, title, intro, align = "left" }: Props) => {
  const centered = align === "center"
  return (
    <motion.div
      className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={rise}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="muted mt-4 text-lg leading-relaxed">{intro}</p>}
    </motion.div>
  )
}
