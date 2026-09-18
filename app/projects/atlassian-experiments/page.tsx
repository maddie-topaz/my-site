"use client"

import { motion } from "framer-motion"
import {
  FaChartLine,
  FaCubes,
  FaDatabase,
  FaFlask,
  FaHandsHelping,
  FaRocket,
  FaSeedling,
  FaToolbox,
} from "react-icons/fa"
import { FiArrowLeft, FiBarChart2, FiClock, FiCompass, FiRefreshCw, FiTrendingDown, FiUsers } from "react-icons/fi"
import { SiNodedotjs, SiReact, SiTypescript } from "react-icons/si"
import { TbArrowMerge } from "react-icons/tb"
import { Button } from "components/Button/Button"
import { experimentTimelineSteps } from "components/ExperimentTimeline"
import { GoalCard } from "components/GoalCard"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

export default function StatsigCaseStudy() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <motion.div
          id="atlassian-hero"
          className="text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Driving Scalable Experimentation at Atlassian
          </h1>
          <p className="muted-strong mx-auto max-w-2xl text-xl">
            Unlocking experimentation at scale with Statsig, driving rapid innovation and smarter, data-informed product
            decisions.
          </p>

          <div className="muted mt-8 font-mono text-xs">
            <a href="#background" className="hover:text-base-content mx-2 transition-colors">
              Background
            </a>{" "}
            |
            <a href="#goals" className="hover:text-base-content mx-2 transition-colors">
              Goals
            </a>{" "}
            |
            <a href="#implementation" className="hover:text-base-content mx-2 transition-colors">
              Implementation
            </a>{" "}
            |
            <a href="#challenges" className="hover:text-base-content mx-2 transition-colors">
              Challenges
            </a>{" "}
            |
            <a href="#outcomes" className="hover:text-base-content mx-2 transition-colors">
              Outcomes
            </a>
          </div>

          <div className="muted mt-8 flex justify-center gap-5 text-2xl">
            <SiTypescript title="TypeScript" />
            <SiNodedotjs title="Node.js" />
            <SiReact title="React" />
          </div>
        </motion.div>

        {/* Background */}
        <motion.div
          id="background-and-challenges"
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.05}
          variants={fadeInUp}
        >
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight">Background & Challenges</h2>

          <div className="muted-strong mx-auto max-w-3xl space-y-6 text-center">
            <p>
              Atlassian lacked a scalable and intuitive experimentation platform. While most products had migrated to
              the cloud, the legacy of on-prem infrastructure left significant gaps in our ability to run controlled
              experiments effectively. Experimentation was unintuitive, difficult to configure, and poorly supported,
              resulting in low adoption of feature flags and minimal experimentation across teams. UI tooling was
              fragmented and lacked usability, limiting experimentation velocity.
            </p>
            <p>
              Compared to industry leaders like Facebook, Atlassian’s experimentation culture and tooling were lagging.
              Teams lacked confidence, and iteration was often driven by instinct instead of data.
            </p>
            <p className="font-medium">
              This project embraced a <span className="text-primary font-semibold">cloud-native mindset</span> to
              introduce standardized, developer-friendly tools, enabling fast, safe, and scalable experimentation.
            </p>
          </div>
        </motion.div>

        {/* Project Goals Section */}
        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight">Project Goals</h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <GoalCard
              icon={<FaCubes />}
              title="Standardize Rollout"
              desc="Ensure consistent usage of libraries across platforms, products, and languages."
            />
            <GoalCard
              icon={<FaFlask />}
              title="Increase Experimentation"
              desc="Enable more robust A/B testing and rapid iteration across teams."
            />
            <GoalCard
              icon={<FaChartLine />}
              title="Support Data-Driven Decisions"
              desc="Provide clear insights to inform product development through integrated analytics."
            />
            <GoalCard
              icon={<FaRocket />}
              title="Drive Library Adoption"
              desc="Roll out reusable libraries and improve visibility across engineering teams."
            />
            <GoalCard
              icon={<FaHandsHelping />}
              title="Support Adopted Libraries"
              desc="Provide guidance, documentation, and maintenance as adoption scales."
            />
            <GoalCard
              icon={<FaToolbox />}
              title="Enable Scalable Tooling"
              desc="Develop internal tools that empower teams to adopt best practices with minimal friction."
            />
          </div>
        </motion.div>

        {/*  Moving to Statsig */}
        <motion.div className="mt-24">
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight">The Move to Statsig</h2>
          <p className="muted-strong text-center text-sm">
            To meet our goals around experimentation, we adopted Statsig, giving us a fast, reliable way to launch
            experiments with confidence.
          </p>

          <br />
        </motion.div>

        {/*  How It Works */}
        <motion.div className="mt-24">
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight">How It Works</h2>
          <p className="muted-strong text-center text-sm">
            Running an experiment using statsig involves the following steps.
          </p>
          <br />

          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {experimentTimelineSteps.map((step, index) => (
              <li key={index}>
                {index !== 0 && <hr />}
                <div className="timeline-middle">
                  <div className="bg-base-300/60 text-primary rounded-md p-4 text-xl">{step.icon}</div>
                </div>
                <div
                  className={`${index % 2 === 0 ? "timeline-start mx-8 mb-12 md:text-end" : "timeline-end mx-8 mb-12"}`}
                >
                  <div className="text-lg font-semibold tracking-tight">{step.title}</div>
                  {typeof step.desc === "string" ? (
                    <p className="muted text-sm leading-relaxed">{step.desc}</p>
                  ) : (
                    step.desc
                  )}
                </div>
                {index !== experimentTimelineSteps.length - 1 && <hr />}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Implementation */}
        <motion.div
          id="implementation"
          className="mt-12 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight">Implementation</h2>
          <div className="mx-auto max-w-5xl space-y-10">
            {/* Statsig Node.js Wrapper */}
            <motion.div className="panel p-8" custom={0.2} variants={fadeInUp}>
              <h3 className="text-primary mb-4 text-xl font-bold">Statsig Node.js Wrapper</h3>
              <p className="muted-strong mb-4">
                While Statsig provides robust SDKs for multiple platforms, we chose to develop our own internal wrappers
                to ensure consistent and scalable integration across ourS services.
              </p>
              <p className="muted-strong mb-4">
                By building these wrappers, we were able to embed native support for our internal Traits and Attributes
                Platform (TAP), allowing both sidecar-based and API-based trait resolution to integrate seamlessly into
                the experiment workflow. It also enabled us to enforce standardized evaluation logic across teams,
                reducing duplication and potential misconfigurations.
              </p>
              <p className="muted-strong mb-4">
                Furthermore, the wrappers offered a clean developer interface with utility functions such as
                buildStatsigUser, checkGate, and getExperiment, streamlining adoption and ensuring a unified developer
                experience regardless of the service or team implementing Statsig.
              </p>

              <div className="join join-vertical w-full space-y-4">
                {/* Support for Traits */}
                <div className="collapse-arrow panel muted-strong collapse">
                  <input type="checkbox" />
                  <div className="collapse-title text-lg font-medium">
                    <FaDatabase className="text-primary mr-2 inline-block h-5 w-5" />
                    Traits
                  </div>
                  <div className="collapse-content space-y-4">
                    <p>
                      In Statsig, the <code className="font-mono text-xs">StatsigUser</code> object includes traits for
                      targeting:
                    </p>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>userId</strong>: A unique identifier
                      </li>
                      <li>
                        <strong>customIDs</strong>: e.g. <code>companyID</code> for org-level rollouts
                      </li>
                      <li>
                        <strong>email</strong>: The user’s email
                      </li>
                      <li>
                        <strong>privateAttributes</strong>: For secure evaluation
                      </li>
                      <li>
                        <strong>country</strong>: User region
                      </li>
                      <li>
                        <strong>organization</strong>: Org or team context
                      </li>
                    </ul>
                    <p>
                      The wrappers support both sidecar-based and API-based TAP trait retrieval methods with graceful
                      fallback logic. For developer ergonomics, I introduced helper methods like
                      <code className="font-mono text-xs"> buildStatsigUser</code>,
                      <code className="font-mono text-xs"> checkGate</code>, and
                      <code className="font-mono text-xs"> getExperiment</code>.
                    </p>
                  </div>
                </div>

                {/* Support for Bootstrapping */}
                <div className="collapse-arrow panel muted-strong collapse">
                  <input type="checkbox" />
                  <div className="collapse-title text-lg font-medium">
                    <FaSeedling className="text-primary mr-2 inline-block h-5 w-5" />
                    Bootstrapping
                  </div>
                  <div className="collapse-content space-y-4">
                    <p>
                      Bootstrapping allows initializing Statsig with pre-evaluated flags before a network call. It
                      helps:
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Avoid UI flickers</li>
                      <li>Improve cold-start performance</li>
                      <li>Ensure consistent flag values across SSR and client</li>
                    </ul>
                  </div>
                </div>

                {/* Trait Merging */}
                <div className="collapse-arrow panel muted-strong collapse">
                  <input type="checkbox" />
                  <div className="collapse-title text-lg font-medium">
                    <TbArrowMerge className="text-primary mr-2 inline-block h-5 w-5" />
                    Trait Merging
                  </div>
                  <div className="collapse-content space-y-4">
                    <p>
                      Trait merging combines traits from multiple sources, auth, runtime, and environment, into a single
                      user object. This enables:
                    </p>
                    <ul className="list-disc pl-6">
                      <li>High-fidelity targeting in experiments and feature gates</li>
                      <li>Consistent identity resolution across services</li>
                      <li>Cleaner structure, less boilerplate, and fewer runtime errors</li>
                    </ul>
                    <p>
                      The wrappers also resolve merge conflicts deterministically and provides lifecycle methods like
                      <code className="font-mono text-xs"> initializeStatsig()</code> and
                      <code className="font-mono text-xs"> shutdownStatsig()</code>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          id="outcomes"
          className="mt-12 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeInUp}
        >
          <h2 className="mb-16 text-center text-3xl font-semibold tracking-tight">Outcomes</h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FiCompass />,
                title: "Data-Driven Culture",
                desc: "Empowered product teams to make release decisions based on experiment outcomes rather than intuition",
              },
              {
                icon: <FiTrendingDown />,
                title: "Reduced Experiment Setup Errors",
                desc: "Cut experiment configuration errors by 70%",
              },
              {
                icon: <FiUsers />,
                title: "Developer Adoption",
                desc: "100+ teams actively using the platform for experimentation",
              },
              {
                icon: <FiRefreshCw />,
                title: "Experiment Velocity",
                desc: "3x increase in the number of concurrent experiments run",
              },
              {
                icon: <FiClock />,
                title: "Time to Insight",
                desc: "Faster time to insight, enabling teams to iterate faster and make more informed decisions",
              },
              {
                icon: <FiBarChart2 />,
                title: "Simplified Experiment Setup",
                desc: "Significantly reduced experiment setup time by 80%",
              },
            ].map(({ icon, title, desc }, index) => (
              <motion.div
                key={title}
                custom={index * 0.1}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="panel panel-hover group flex flex-col items-center p-6 text-center"
              >
                <div className="bg-base-300/60 text-primary mb-5 flex h-12 w-12 items-center justify-center rounded-md text-xl">
                  {icon}
                </div>
                <h3 className="mb-1 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="muted text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* CTA */}
      <div className="mt-24 text-center">
        <Button href="/#projects" intent="secondary">
          <FiArrowLeft aria-hidden />
          Back to projects
        </Button>
      </div>
    </section>
  )
}
