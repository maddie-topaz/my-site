"use client"

import { motion } from "framer-motion"
import { FaChartBar, FaCheckCircle, FaCode, FaComments, FaEye, FaLightbulb, FaSlidersH } from "react-icons/fa"
import { SiNodedotjs, SiReact, SiTypescript } from "react-icons/si"
import { FeatureCard } from "components/FeatureCard"

const steps = [
  {
    title: "Define A Hypothesis",
    desc: (
      <div>
        <p className="text-sm text-gray-400">
          Clearly define what you want to learn. Formulate a{" "}
          <span className="font-medium text-blue-400">testable hypothesis</span> with a measurable outcome that helps
          you decide what success or failure looks like.
        </p>
        <br />
        <p className="text-sm text-gray-400">
          🔍 Example Scenario
          <br />
          You’re working on a SaaS app and want to test whether changing the primary CTA button from “Start Free Trial”
          to “Get Started Now” improves sign-up conversion.
        </p>
      </div>
    ),
    icon: <FaLightbulb />,
  },
  {
    title: "Create Experiment",
    desc: (
      <p className="text-sm text-gray-400">
        Set up your experiment using <span className="font-medium text-blue-400">Statsig</span>. Define control and
        variant groups, target the appropriate user segments, and identify the key metrics you'll analyze.
      </p>
    ),
    icon: <FaSlidersH />,
  },
  {
    title: "Instrument in Code",
    desc: (
      <p className="text-sm text-gray-400">
        Use Statsig's SDK to integrate the experiment. Call{" "}
        <code className="bg-base-200 rounded px-1 py-0.5 text-blue-400">{"getExperiment()"}</code> or{" "}
        <code className="bg-base-200 rounded px-1 py-0.5 text-blue-400">{"getConfig()"}</code> to control logic in your
        product based on user assignment.
      </p>
    ),
    icon: <FaCode />,
  },
  {
    title: "Track Metrics",
    desc: (
      <p className="text-sm text-gray-400">
        Ensure all <span className="font-medium text-blue-400">exposure events</span> and relevant metrics are properly
        logged. This provides the data needed to evaluate your experiment's impact.
      </p>
    ),
    icon: <FaChartBar />,
  },
  {
    title: "Monitor Results",
    desc: (
      <p className="text-sm text-gray-400">
        Use Statsig's dashboard to watch experiment performance. Compare metrics between variants, look for{" "}
        <span className="font-medium text-blue-400">significant differences</span>, and assess impact.
      </p>
    ),
    icon: <FaEye />,
  },
  {
    title: "Make a Decision",
    desc: (
      <p className="text-sm text-gray-400">
        Interpret the results. Decide whether to ship the change, roll it back, or iterate. Back your decision with{" "}
        <span className="font-medium text-blue-400">data from the experiment</span>.
      </p>
    ),
    icon: <FaCheckCircle />,
  },
  {
    title: "Share Learnings",
    desc: (
      <p className="text-sm text-gray-400">
        Document the experiment's outcomes, insights, and decisions. Share findings with your team to support{" "}
        <span className="font-medium text-blue-400">collective learning</span> and future initiatives.
      </p>
    ),
    icon: <FaComments />,
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

export default function StatsigCaseStudy() {
  return (
    <section className="bg-base-100 py-20 text-gray-800 dark:bg-black dark:text-gray-100">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Hero Section */}
        <motion.div className="space-y-6 text-center" initial="hidden" whileInView="visible" variants={fadeInUp}>
          <h1 className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-5xl leading-normal font-extrabold text-transparent">
            Driving Scalable Experimentation at Atlassian
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Unlocking experimentation at scale with Statsig—driving rapid innovation and smarter, data-informed product
            decisions.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            <a href="#background" className="mx-2 hover:underline">
              Background
            </a>{" "}
            |
            <a href="#goals" className="mx-2 hover:underline">
              Goals
            </a>{" "}
            |
            <a href="#implementation" className="mx-2 hover:underline">
              Implementation
            </a>{" "}
            |
            <a href="#challenges" className="mx-2 hover:underline">
              Challenges
            </a>{" "}
            |
            <a href="#outcomes" className="mx-2 hover:underline">
              Outcomes
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-4 text-2xl text-white">
            <SiTypescript title="TypeScript" />
            <SiNodedotjs title="Node.js" />
            <SiReact title="React" />
          </div>
        </motion.div>

        {/* Background */}
        <motion.div
          id="background"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.05}
          variants={fadeInUp}
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-white">🎯 Background & Challenges</h2>

          <div className="mx-auto max-w-3xl space-y-6 text-center text-gray-400">
            <p>
              Atlassian lacked a scalable and intuitive experimentation platform. While most products had migrated to
              the cloud, the legacy of on-prem infrastructure left significant gaps in our ability to run controlled
              experiments effectively. Experimentation was unintuitive, difficult to configure, and poorly
              supported—resulting in low adoption of feature flags and minimal experimentation across teams. UI tooling
              was fragmented and lacked usability, limiting experimentation velocity.
            </p>
            <p>
              Compared to industry leaders like Facebook, Atlassian’s experimentation culture and tooling were lagging.
              Teams lacked confidence, and iteration was often driven by instinct instead of data.
            </p>
            <p className="font-medium text-white">
              This project embraced a <span className="font-semibold text-indigo-400">cloud-native mindset</span> to
              introduce standardized, developer-friendly tools—enabling fast, safe, and scalable experimentation.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <section className="bg-base-100 py-20 text-gray-800 dark:bg-black dark:text-gray-100">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-base-100 py-20 text-gray-800 dark:bg-black dark:text-gray-100"
          >
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white">
              {steps.map((step, index) => (
                <li key={index}>
                  {index !== 0 && <hr />}
                  <div className="timeline-middle">
                    <div className="bg-base-200 rounded-full p-4 text-2xl text-white shadow-md">{step.icon}</div>
                  </div>
                  <div
                    className={`${
                      index % 2 === 0 ? "timeline-start mx-8 mb-12 md:text-end" : "timeline-end mx-8 mb-12"
                    }`}
                  >
                    <div className="text-lg font-black">{step.title}</div>
                    {typeof step.desc === "string" ? <p className="text-sm text-gray-400">{step.desc}</p> : step.desc}
                  </div>
                  {index !== steps.length - 1 && <hr />}
                </li>
              ))}
            </ul>
          </motion.section>
        </section>

        {/* Implementation Details */}
        <motion.div
          id="implementation"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-center text-2xl font-bold text-white">⚙️ Implementation</h2>
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="card bg-base-200 p-6">
              <h3 className="mb-4 text-xl font-bold text-white">Statsig Node.js Wrapper</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-400">
                <li>Designed a reusable Node.js wrapper for Statsig to enable consistent evaluation across services</li>
                <li>
                  Integrated TAP (Traits and Attributes Platform) to enrich StatsigUser objects with org/user traits
                </li>
                <li>Supported both sidecar-based and API-based TAP trait retrieval with fallback logic</li>
                <li>Implemented `buildStatsigUser`, `checkGate`, and `getExperiment` helpers for ease of use</li>
                <li>
                  Enabled bootstrapping for latency-sensitive services to reduce P99 latency and avoid runtime
                  dependencies
                </li>
                <li>
                  Handled merge conflicts between request headers, tokens, and developer overrides using a structured
                  resolution order
                </li>
                <li>Provided clean lifecycle methods: `initializeStatsig()` and `shutdownStatsig()`</li>
              </ul>
            </div>

            <div className="card bg-base-200 p-6">
              <h3 className="mb-4 text-xl font-bold text-white">Feature Flag Management</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-400">
                <li>Designed consistent feature flag naming conventions</li>
                <li>Implemented targeting rules and user segmentation</li>
                <li>Created automated cleanup for stale flags</li>
                <li>Built monitoring and alerting for flag status changes</li>
              </ul>
            </div>

            <div className="card bg-base-200 p-6">
              <h3 className="mb-4 text-xl font-bold text-white">Analytics Integration</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-400">
                <li>Set up automatic event tracking for feature flag usage</li>
                <li>Implemented custom metrics collection</li>
                <li>Created dashboards for experiment monitoring</li>
                <li>Built automated statistical analysis reports</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div
          id="challenges"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.25}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-center text-2xl font-bold text-white">🧩 Key Challenges</h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6">
            <FeatureCard
              title="🔀 TAP Trait Resolution"
              problem="Conflicts arose between public and private TAP traits coming from multiple sources like headers and JWTs, making it difficult to determine the correct trait values."
              solution="Implemented a structured resolution order and clear precedence rules to handle trait conflicts consistently across all services."
            />

            <FeatureCard
              title="⚡ Service Performance"
              problem="High-throughput environments suffered from latency due to cross-service hops when accessing TAP sidecar."
              solution="Abstracted TAP sidecar access patterns and implemented caching strategies to minimize service-to-service communication."
            />

            <FeatureCard
              title="♻️ Service Lifecycle"
              problem="Long-running services needed proper initialization and shutdown handling to prevent memory leaks and ensure clean state management."
              solution="Developed custom lifecycle hooks with clear initializeStatsig() and shutdownStatsig() methods for proper resource management."
            />

            <FeatureCard
              title="🛠️ Bootstrapping Flexibility"
              problem="Some services couldn't use bootstrapping due to specific requirements, risking feature flag evaluation failures."
              solution="Implemented graceful fallback evaluation mechanisms for non-bootstrapped services while maintaining feature consistency."
            />
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          id="outcomes"
          className="mt-24 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeInUp}
        >
          <h2 className="mb-16 text-center text-3xl font-semibold text-white">📈 Outcomes</h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Development Speed",
                desc: "50% reduction in feature deployment time with controlled rollouts",
              },
              {
                icon: "🛡️",
                title: "Risk Reduction",
                desc: "90% decrease in rollback incidents through gradual releases",
              },
              {
                icon: "👥",
                title: "Developer Adoption",
                desc: "100+ teams actively using the platform for feature releases",
              },
              {
                icon: "🔄",
                title: "Experiment Velocity",
                desc: "3x increase in the number of concurrent experiments run",
              },
              {
                icon: "📊",
                title: "Improved Observability",
                desc: "Unified trait handling and logging improved debuggability and transparency",
              },
            ].map(({ icon, title, desc }, index) => (
              <motion.div
                key={title}
                custom={index * 0.1}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-base-200 flex flex-col items-center rounded-xl p-6 text-center shadow transition hover:shadow-lg"
              >
                <div className="from-primary to-secondary relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br text-2xl text-white shadow-md group-hover:scale-110 group-hover:shadow-xl">
                  {icon}
                  <div className="absolute inset-0 rounded-full border-4 border-white/20 transition-all duration-300 group-hover:border-white/40"></div>
                </div>
                <h3 className="mb-1 text-lg font-bold text-white">{title}</h3>
                <p className="text-sm text-gray-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
