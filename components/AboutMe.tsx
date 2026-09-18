"use client"

import { motion } from "framer-motion"
import { BsDiagram3 } from "react-icons/bs"
import { FiLayers, FiMonitor, FiTool } from "react-icons/fi"
import { LuBrain } from "react-icons/lu"
import { SiAmazon, SiDocker, SiNodedotjs, SiPostgresql, SiReact, SiTypescript } from "react-icons/si"
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
      { name: "Building with AI in the Loop", icon: LuBrain },
      { name: "CI/CD Pipelines", icon: BsDiagram3 },
      { name: "Infrastructure as Code (IaC)", icon: FiTool },
      { name: "Observability & Monitoring", icon: FiMonitor },
      { name: "End-to-End Ownership", icon: FiLayers },
    ],
  },
]

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-primary font-medium">{children}</span>
)

export const AboutMe = () => {
  return (
    <section id="about" className="hairline border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="01 / About" title="From curiosity to code" />

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          {/* Text Content */}
          <div className="max-w-prose">
            <motion.h3 className="mb-2 text-lg font-semibold">Getting started</motion.h3>
            <motion.p
              className="muted-strong mb-8 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.0}
              variants={fadeInUp}
            >
              I'm Maddie, a software engineer with a background in full stack development, cloud architecture, and real
              time graphics programming. I always wanted to be a programmer, but for a long time I assumed you had to be
              a maths genius to make it in tech. I started in business admin, until I found myself constantly peeking
              over at the programming coursework. A tech lecturer noticed, handed me a brochure, and suggested I switch.
              I did, and I haven’t looked back since.
            </motion.p>

            <motion.h3 className="mb-2 text-lg font-semibold">Engineering at scale</motion.h3>
            <motion.p
              className="muted-strong mb-8 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeInUp}
            >
              Since then, I’ve worked across the stack from designing <Highlight>OpenGL</Highlight> rendering engines to
              building experimentation platforms and disaster recovery systems at <Highlight>Atlassian</Highlight>. I’ve
              led end to end feature development for high-traffic products like <Highlight>Chumba Casino</Highlight> and
              built systems to safeguard <Highlight>petabytes</Highlight> of user generated content in{" "}
              <Highlight>AWS</Highlight>.
            </motion.p>

            <motion.h3 className="mb-2 text-lg font-semibold">How I build</motion.h3>
            <motion.p
              className="muted-strong mb-8 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              variants={fadeInUp}
            >
              Today, I build with a <Highlight>platform mindset</Highlight> and a <Highlight>DevOps heart</Highlight>{" "}
              focused on clarity, resilience, and full stack responsibility from infrastructure to interface. My core
              stack includes <Highlight>TypeScript</Highlight>, <Highlight>Node.js</Highlight>,{" "}
              <Highlight>React</Highlight>, <Highlight>PostgreSQL</Highlight>, <Highlight>AWS</Highlight>,{" "}
              <Highlight>Docker</Highlight>, and <Highlight>Pulumi</Highlight>.
            </motion.p>

            <motion.blockquote
              className="border-primary/60 muted-strong border-l-2 pl-5 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
              variants={fadeInUp}
            >
              Over time, my passion has gravitated toward developer experience, tooling, and DevOps. Books like{" "}
              <a
                href="https://itrevolution.com/accelerate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary decoration-primary/40 hover:decoration-primary underline underline-offset-4"
              >
                Accelerate
              </a>{" "}
              and{" "}
              <a
                href="https://itrevolution.com/the-phoenix-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary decoration-primary/40 hover:decoration-primary underline underline-offset-4"
              >
                The Phoenix Project
              </a>{" "}
              didn’t just teach me about delivery practices, they helped me rethink what great engineering looks like.
            </motion.blockquote>
          </div>

          {/* Skills Section */}
          <div>
            <motion.h3
              className="mb-1 text-lg font-semibold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Technical stack
            </motion.h3>
            <motion.p
              className="muted mb-8 text-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              variants={fadeInUp}
            >
              Tools, languages, and systems I use to build reliable, scalable software.
            </motion.p>

            <div className="space-y-8">
              {skillItems.map((group, groupIdx) => (
                <div key={group.category}>
                  <h4 className="eyebrow mb-3 text-[0.65rem]">{group.category}</h4>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {group.skills.map(({ name, icon: Icon }, i) => (
                      <motion.div
                        key={name}
                        className="panel panel-hover flex items-center gap-3 px-3 py-2.5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={(groupIdx + i) * 0.05}
                        variants={fadeInUp}
                      >
                        <Icon className="text-primary shrink-0 text-xl" />
                        <span className="muted-strong text-sm">{name}</span>
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
