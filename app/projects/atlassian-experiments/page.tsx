"use client"

import { motion } from "framer-motion"
import { FaChartLine, FaCubes, FaFlask, FaHandsHelping, FaRocket, FaToolbox } from "react-icons/fa"
import { SiNodedotjs, SiReact, SiTypescript } from "react-icons/si"
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
        <section className="bg-base-100 py-10 text-gray-800 dark:bg-black dark:text-gray-100">
            <div className="container mx-auto max-w-screen-xl px-4">
                {/* Hero Section */}
                <motion.div id="atlassian-hero" className="text-center" initial="hidden" whileInView="visible" variants={fadeInUp}>
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
                    id="background-and-challenges"
                    className="mt-12"
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

                {/* Project Goals Section */}
                <motion.div
                    className="mt-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.1}
                    variants={fadeInUp}
                >
                    <h2 className="mb-4 text-center text-2xl font-bold text-white">🎯 Project Goals</h2>
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

                {/*  How It Works */}
                <motion.div className="mt-12 bg-base-100 text-gray-800 dark:bg-black dark:text-gray-100 mt-12">
                    <h2 className="mb-6 text-center text-2xl font-bold text-white">⚙️ How It Works</h2>
                    <p className="text-sm text-gray-400 text-center">
                        Running an  experiment using statsig involves the following steps.
                    </p>
                    <br />

                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white">
                        {experimentTimelineSteps.map((step, index) => (
                            <li key={index}>
                                {index !== 0 && <hr />}
                                <div className="timeline-middle">
                                    <div className="bg-base-200 rounded-full p-4 text-2xl text-white shadow-md">{step.icon}</div>
                                </div>
                                <div
                                    className={`${index % 2 === 0 ? "timeline-start mx-8 mb-12 md:text-end" : "timeline-end mx-8 mb-12"
                                        }`}
                                >
                                    <div className="text-lg font-black">{step.title}</div>
                                    {typeof step.desc === "string" ? <p className="text-sm text-gray-400">{step.desc}</p> : step.desc}
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
                    <h2 className="mb-6 text-center text-2xl font-bold text-white">⚙️ Implementation</h2>
                    <div className="mx-auto max-w-5xl space-y-10">
                        {/* Statsig Node.js Wrapper */}
                        <motion.div
                            className="card bg-base-200 p-8 rounded-2xl shadow-lg"
                            custom={0.2}
                            variants={fadeInUp}
                        >
                            <h3 className="text-xl font-bold text-indigo-300 mb-4">
                                Statsig Node.js Wrapper
                            </h3>
                            <p className="text-gray-400 mb-4">
                                I developed a reusable Node.js wrapper for Statsig to ensure consistent feature evaluation across services. The wrapper integrates deeply with TAP (Traits and Attributes Platform), enabling the enrichment of <code className="text-white font-mono text-xs">StatsigUser</code> objects with user and organizational traits.
                            </p>
                            <p className="text-gray-400 mb-4">
                                It supports both sidecar-based and API-based TAP trait retrieval methods with graceful fallback logic. For developer ergonomics, I introduced helper methods like <code className="text-white font-mono text-xs">buildStatsigUser</code>, <code className="text-white font-mono text-xs">checkGate</code>, and <code className="text-white font-mono text-xs">getExperiment</code>.
                            </p>
                            <p className="text-gray-400">
                                The implementation also supports bootstrapping for latency-sensitive services, reducing P99 latency and eliminating runtime dependencies. Merge conflicts are resolved through a structured hierarchy, and the wrapper exposes <code className="text-white font-mono text-xs">initializeStatsig()</code> and <code className="text-white font-mono text-xs">shutdownStatsig()</code> lifecycle hooks.
                            </p>
                        </motion.div>

                        {/* Feature Flag Management */}
                        <motion.div
                            className="card bg-base-200 p-8 rounded-2xl shadow-lg"
                            custom={0.3}
                            variants={fadeInUp}
                        >
                            <h3 className="text-xl font-bold text-indigo-300 mb-4">
                                Feature Flag Management
                            </h3>
                            <p className="text-gray-400 mb-4">
                                To support robust experimentation, I implemented standardized naming conventions for feature flags and designed a consistent framework for targeting rules and user segmentation. This ensured cross-team clarity and reduced risk of misconfiguration.
                            </p>
                            <p className="text-gray-400">
                                I also built out systems for automatic cleanup of deprecated or stale flags, alongside alerting mechanisms to track flag status changes — helping teams stay informed and avoid feature creep.
                            </p>
                        </motion.div>

                        {/* Analytics Integration */}
                        <motion.div
                            className="card bg-base-200 p-8 rounded-2xl shadow-lg"
                            custom={0.4}
                            variants={fadeInUp}
                        >
                            <h3 className="text-xl font-bold text-indigo-300 mb-4">
                                Analytics Integration
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Analytics were tightly integrated throughout the feature flag lifecycle. I automated event tracking to capture flag exposure and usage metrics without manual tagging. This data feeds into dashboards that monitor experiment performance in real time.
                            </p>
                            <p className="text-gray-400">
                                Custom metrics were introduced for deeper insights, and I built automated reporting pipelines to generate statistical summaries — enabling fast, data-driven decision-making for product experiments.
                            </p>
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
                            {
                                icon: "📊",
                                title: "Improved XXX",
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
