"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  FaExclamationTriangle,
  FaFingerprint,
  FaMobileAlt,
  FaRobot,
  FaUserCheck,
  FaUserLock,
  FaUserShield,
  FaWrench,
} from "react-icons/fa"
import { SiAmazon, SiNodedotjs, SiPostgresql, SiReact, SiTwilio } from "react-icons/si"
import { Button } from "components/Button/Button"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

export default function ChumbaCaseStudy() {
  return (
    <section className="bg-base-100 py-20 text-gray-800 dark:bg-black dark:text-gray-100">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Hero Section */}
        <motion.div className="space-y-6 text-center" initial="hidden" whileInView="visible" variants={fadeInUp}>
          <h1 className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-5xl leading-normal font-extrabold text-transparent">
            Securing Access at Scale
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            A case study on scaling secure access with real-world identity checks — featuring Twilio integration, KYC
            readiness, and fraud prevention mechanisms for Chumba Casino.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            <a href="#background" className="mx-2 hover:underline">
              Background
            </a>
            |
            <a href="#goals" className="mx-2 hover:underline">
              Goals
            </a>
            |
            <a href="#how-it-works" className="mx-2 hover:underline">
              How It Works
            </a>
            |
            <a href="#architecture" className="mx-2 hover:underline">
              Architecture
            </a>
            |
            <a href="#implementation" className="mx-2 hover:underline">
              Integration Challenges
            </a>
            |
            <a href="#outcomes" className="mx-2 hover:underline">
              Outcomes
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-4 text-2xl text-white">
            <SiReact title="React" />
            <SiNodedotjs title="Node.js" />
            <SiPostgresql title="PostgreSQL" />
            <SiTwilio title="Twilio" />
            <SiAmazon title="AWS" />
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
          <h2 className="mb-4 text-center text-2xl font-bold text-white">🧨 Background & Challenges</h2>
          <p className="mx-auto max-w-3xl text-center text-gray-400">
            Chumba Casino faced increasing challenges around account fraud, duplicate signups, and inconsistent
            verification across multiple login pathways like Facebook OAuth and email/password. To comply with evolving
            KYC regulations and reduce friction for legitimate users, we set out to build a secure, scalable phone
            verification system powered by Twilio.
          </p>
        </motion.div>

        {/* Project Goals Section */}
        <motion.div
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-center text-2xl font-bold text-white">🎯 Project Goals</h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <GoalCard
              icon={<FaUserLock />}
              title="Prevent Duplicates"
              desc="Blocked repeated account creation to maintain fair promotional use."
            />
            <GoalCard
              icon={<FaUserShield />}
              title="Reduce Fraud"
              desc="Minimized abusive behaviors and improved platform integrity."
            />
            <GoalCard
              icon={<FaMobileAlt />}
              title="Capture Mobile Numbers"
              desc="Enabled future marketing engagement through SMS campaigns."
            />
            <GoalCard
              icon={<FaUserCheck />}
              title="Strengthen Trust"
              desc="Increased identity confidence across login types."
            />
            <GoalCard
              icon={<FaFingerprint />}
              title="KYC Compliance"
              desc="Enhanced verification standards to support regulatory requirements."
            />
            <GoalCard
              icon={<FaRobot />}
              title="Block Bots"
              desc="Prevent automated signups and scripted abuse with real-world identity checks."
            />
          </div>
        </motion.div>

        {/* How It Works - Steps Timeline using DaisyUI */}
        <motion.div
          id="how-it-works"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          variants={fadeInUp}
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-white">⚙️ How It Works</h2>
          <p className="mx-auto mb-16 max-w-3xl text-center text-gray-400">
            A step-by-step walkthrough of how users verify their identity using a secure SMS-based flow.
          </p>

          <div className="flex justify-center px-4">
            <ul className="steps steps-horizontal [--step-line:theme(colors.gray.900)]">
              {[
                {
                  title: "Enter Phone Number",
                  desc: "User provides their mobile number during signup.",
                  icon: <FaMobileAlt />,
                },
                {
                  title: "OTP Sent",
                  desc: "Twilio delivers the one-time password via SMS.",
                  icon: <SiTwilio />,
                },
                {
                  title: "Submit Code",
                  desc: "User enters the code and Twilio validates it.",
                  icon: <FaFingerprint />,
                },
                {
                  title: "Verified",
                  desc: "Results are logged for compliance and future use.",
                  icon: <SiPostgresql />,
                },
              ].map((step, index) => (
                <li key={index} className="step items-center">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="bg-base-200 rounded-full p-4 text-2xl text-white shadow-md">{step.icon}</div>
                    <h3 className="text-sm font-bold text-white">{step.title}</h3>
                    <p className="max-w-[160px] text-xs text-gray-400">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div
          id="architecture"
          className="mt-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-2xl font-bold text-white">🧩 Architecture Diagram</h2>
          <p className="mb-6 text-gray-400">Visual overview of service orchestration and API flows.</p>
          <div className="bg-base-200 relative mx-auto h-[600px] w-full max-w-5xl overflow-hidden rounded-xl">
            <Image
              src="/images/pv-diagram.png"
              alt="Verification Architecture"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </motion.div>

        {/* Implementation */}
        <motion.div
          id="implementation"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.25}
          variants={fadeInUp}
        >
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-semibold text-white">🔧 Integration Challenges </h2>
            <p className="text-base text-gray-400">
              The integration of phone verification into Chumba Casino's existing auth system posed significant
              complexity due to multiple existing login flows — including Facebook OAuth and standard email
              verification. A complete overhaul of the existing verification logic was required to avoid conflicts
              between phone and email verification states.
            </p>
            <div className="grid gap-6 text-left md:grid-cols-2">
              <FeatureCard
                title="🧠 Logic Complexity"
                problem="The existing verification logic was tightly coupled with login flow logic, making it challenging to refactor and maintain."
                solution="Centralized all user verification checks into a single function to handle mixed verification states across login flows."
              />
              <FeatureCard
                title="🕸️ Branch Complexity "
                problem="Feature flags, multiple login flows, and canary release logic introduced excessive branching and database mutation paths, making the system brittle and hard to maintain."
                solution=" Consolidated login flow variants and isolated feature flag logic to reduce conditional complexity and mutation overhead across environments."
              />

              <FeatureCard
                title="🧬 Database Mutation "
                problem="Email verification logic prematurely set database flags indicating the user was fully verified, leading to inconsistent auth states and security edge cases."
                solution="Introduced explicit verification stages and restructured mutation logic to reflect true verification status across flows."
              />
              <FeatureCard
                title="📞 Phone Verify Servive Integration"
                problem="No service was integrated for PV, and there was no team-wide clarity on how to implement it or which service to use."
                solution="Integrated Twilio for secure, reliable phone number verification with minimal latency and high deliverability."
              />
            </div>
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          id="outcomes"
          className="mt-24 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          variants={fadeInUp}
        >
          <h2 className="mb-16 text-center text-3xl font-semibold text-white">🚀 Outcomes </h2>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "✅",
                title: "Improved Authentication Flow",
                desc: "Unified the login experience across all user types with consistent verification behavior.",
              },
              {
                icon: "🔍",
                title: "Stronger Identity Assurance",
                desc: "Enabled phone verification to support KYC compliance and secure key user data.",
              },
              {
                icon: "📉",
                title: "Fraud Rate Reduction",
                desc: "Noticed a significant drop in duplicate and bot signups post-deployment.",
              },
              {
                icon: "📈",
                title: "Increased Verification Coverage",
                desc: "Achieved high opt-in rates for phone number collection across login types.",
              },
              {
                icon: "📊",
                title: "Compliance Audit Readiness",
                desc: "System architecture now supports fast reporting and audit logging for regulatory needs.",
              },
              {
                icon: "🔁",
                title: "Seamless Multi-Flow Handling",
                desc: "Auth logic now smoothly supports Facebook, Email, and Phone logins without edge case regressions.",
              },
              {
                icon: "🧪",
                title: "Robust Test Coverage",
                desc: "Test suite ensures safe iteration across auth pathways with near-zero regressions.",
              },
              {
                icon: "📞",
                title: "Resilient SMS Delivery",
                desc: "Integrated fallback and retry logic to improve Twilio delivery success rates.",
              },
              {
                icon: "🔧",
                title: "Simplified DevOps Maintenance",
                desc: "Unified verification logic made future iterations easier and less error-prone.",
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

        {/* CTA */}
        <div className="mt-24 text-center">
          <Button href="/#projects" className="btn btn-primary">
            ← Back to Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, problem, solution }: { title: string; problem: string; solution: string }) {
  return (
    <div className="bg-neutral space-y-4 rounded-xl p-4 shadow">
      <h3 className="border-b border-gray-700 pb-2 font-semibold text-white">{title}</h3>

      <div className="bg-base-200 rounded p-3">
        <p className="mb-1 flex items-center gap-2 text-xs font-bold text-pink-300 uppercase">
          <FaExclamationTriangle className="text-pink-400" />
          The Challenge
        </p>
        <p className="text-gray-400">{problem}</p>
      </div>

      <div className="bg-base-300 rounded p-3">
        <p className="mb-1 flex items-center gap-2 text-xs font-bold text-green-300 uppercase">
          <FaWrench className="text-green-400" />
          The Fix
        </p>
        <p className="text-gray-400">{solution}</p>
      </div>
    </div>
  )
}

function GoalCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-base-200 flex items-center gap-4 rounded-lg p-6 shadow">
      <div className="flex-shrink-0 text-4xl text-gray-600">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-400">{desc}</p>
      </div>
    </div>
  )
}
