"use client"

import { motion } from "framer-motion"
import { BsDiagram3 } from "react-icons/bs"
import { FiMonitor, FiTool } from "react-icons/fi"
import { SiAmazon, SiDocker, SiNodedotjs, SiPostgresql, SiReact, SiTypescript } from "react-icons/si"
import { TbTestPipe } from "react-icons/tb"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

const skillItems = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: SiAmazon },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Test-Driven Development (TDD)", icon: TbTestPipe },
      { name: "CI/CD Pipelines", icon: BsDiagram3 },
      { name: "Infrastructure as Code (IaC)", icon: FiTool },
      { name: "Observability & Monitoring", icon: FiMonitor },
    ],
  },
]

export const AboutMe = () => {
  return (
    <section id="about" className="bg-base-300 py-8 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          About Me
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Text Content */}
          <div>
            {[
              `I'm Maddie — a software engineer with a background in full-stack development, cloud architecture, and real-time graphics programming. I always wanted to be a programmer, but for a long time I assumed you had to be a maths genius to make it in tech. I started in business admin, until I found myself constantly peeking over at the programming coursework. A tech lecturer noticed, handed me a brochure, and suggested I switch. I did — and I haven’t looked back since.`,
              `Since then, I’ve worked across the stack — from designing OpenGL rendering engines to building experimentation platforms and disaster recovery systems at Atlassian. I’ve led end-to-end feature development for high-traffic products like Chumba Casino and built systems to safeguard petabytes of user-generated content in AWS.`,
              `Over time, my passion has gravitated toward developer experience, tooling, and DevOps. Books like *Accelerate* and *The Phoenix Project* didn’t just teach me about delivery practices — they helped me rethink what great engineering looks like. I began to see software delivery as a living system: shaped by feedback, guided by data, and deeply influenced by the tools we adopt. I stopped seeing culture as a starting point and started seeing it as something we create through the systems we build together.`,
              `Today, I build with a platform mindset and a DevOps heart — focused on clarity, resilience, and full-stack responsibility from infrastructure to interface. My core stack includes TypeScript, Node.js, React, PostgreSQL, AWS, Docker, and Pulumi. Whether I’m building experimentation frameworks, automation pipelines, or UI tooling, I care deeply about enabling teams to ship software with confidence and purpose.`,
            ].map((text, i) => (
              <motion.p
                key={i}
                className="mb-6 leading-relaxed text-gray-400 dark:text-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                variants={fadeInUp}
              >
                {text.includes("*") ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: text.replace(/\*(.*?)\*/g, "<em>$1</em>"),
                    }}
                  />
                ) : (
                  text
                )}
              </motion.p>
            ))}
          </div>

          {/* Skills Section */}
          <div>
            <motion.h3
              className="mb-2 text-xl font-bold dark:text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Technical Stack
            </motion.h3>
            <motion.p
              className="mb-6 text-sm text-gray-400 dark:text-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              variants={fadeInUp}
            >
              Tools, languages, and systems I use to build reliable, scalable software.
            </motion.p>

            <div className="space-y-6">
              {skillItems.map((group, groupIdx) => (
                <div key={group.category} className="mb-6">
                  <h4 className="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    {group.category}
                  </h4>
                  <div
                    className={
                      group.category === "Practices" ? "grid grid-cols-1 gap-6" : "grid grid-cols-2 gap-x-6 gap-y-6"
                    }
                  >
                    {group.skills.map(({ name, icon: Icon }, i) => (
                      <motion.div
                        key={name}
                        className="mb-4 flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={(groupIdx + i) * 0.1}
                        variants={fadeInUp}
                      >
                        <Icon className="text-3xl text-blue-600 dark:text-blue-300" />
                        <span className="text-sm text-gray-400 dark:text-gray-100">{name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
