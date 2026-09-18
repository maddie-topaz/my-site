"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaFingerprint, FaMobileAlt, FaRobot, FaUserCheck, FaUserLock, FaUserShield } from "react-icons/fa"
import { FiActivity, FiArrowLeft, FiPhone, FiRepeat, FiSearch, FiTrendingDown, FiTrendingUp } from "react-icons/fi"
import { SiAmazon, SiNodedotjs, SiPostgresql, SiReact, SiTwilio } from "react-icons/si"
import { Button } from "components/Button/Button"
import { FeatureCard } from "components/FeatureCard"
import { GoalCard } from "components/GoalCard"

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
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <motion.div className="space-y-6 text-center" initial="hidden" whileInView="visible" variants={fadeInUp}>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Text. Verify. Play: Securing Signups at Chumba Casino
          </h1>
          <p className="muted-strong mx-auto max-w-2xl text-xl">
            Scaling secure access with real-world identity checks, featuring Twilio integration, KYC readiness, and
            fraud prevention mechanisms for Chumba Casino.
          </p>

          <div className="muted mt-8 font-mono text-xs">
            <a href="#background" className="hover:text-base-content mx-2 transition-colors">
              Background
            </a>
            |
            <a href="#goals" className="hover:text-base-content mx-2 transition-colors">
              Goals
            </a>
            |
            <a href="#how-it-works" className="hover:text-base-content mx-2 transition-colors">
              How It Works
            </a>
            |
            <a href="#architecture" className="hover:text-base-content mx-2 transition-colors">
              Architecture
            </a>
            |
            <a href="#implementation" className="hover:text-base-content mx-2 transition-colors">
              Integration Challenges
            </a>
            |
            <a href="#outcomes" className="hover:text-base-content mx-2 transition-colors">
              Outcomes
            </a>
          </div>

          <div className="muted mt-8 flex justify-center gap-5 text-2xl">
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
          <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight">Background & Challenges</h2>
          <p className="muted-strong mx-auto max-w-3xl text-center">
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
          <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight">Project Goals</h2>
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
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight">How It Works</h2>
          <p className="muted-strong mx-auto mb-16 max-w-3xl text-center">
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
                    <div className="bg-base-300/60 text-primary rounded-md p-4 text-xl">{step.icon}</div>
                    <h3 className="text-sm font-semibold tracking-tight">{step.title}</h3>
                    <p className="muted-strong max-w-[160px] text-xs">{step.desc}</p>
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
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">Architecture Diagram</h2>
          <p className="muted-strong mb-6">Visual overview of service orchestration and API flows.</p>
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
            <h2 className="text-2xl font-semibold tracking-tight">Integration Challenges </h2>
            <p className="muted-strong text-base">
              The integration of phone verification into Chumba Casino's existing authentication system posed
              significant complexity due to multiple existing login flows, including Facebook OAuth and standard email
              verification. A complete overhaul of the existing verification logic was required to avoid conflicts
              between phone and email verification states.
            </p>
            <div className="grid gap-6 text-left">
              <FeatureCard
                title="Phone Verify Service Integration"
                problem="The product lacked a phone verification solution and proof of concept. Implementation was blocked by unclear ownership and no agreed-upon service provider."
                solution="Took ownership of the verification flow, proposed and implemented Twilio SMS as the provider, and documented the approach to unblock engineering and improve team clarity."
              />
              <FeatureCard
                title="UI/Logic Coupling"
                problem="The existing verification logic was tightly coupled with login flow UI, making it challenging to integrate and maintain additional verification logic."
                solution="Uncoupled verification logic from UI components by centralizing all user verification checks into a single utility function to handle mixed verification states across login flows, as well as canary rollout/feature flag states for controlled exposure of changes."
              />
              <FeatureCard
                title="Branch Complexity"
                problem="Feature flags, multiple login flows, canary release logic and feature flagging introduced a large amount of branching, making the system brittle and hard to maintain."
                solution="Reduced branching complexity by introducing dedicated utility functions for feature flag evaluation and login state handling, improving code clarity and maintainability across environments."
              />
              <FeatureCard
                title="Database Mutation"
                problem="Email verification logic prematurely set database flags indicating the user was fully verified, leading to inconsistent authentication states and security edge cases."
                solution="Extracted verification logic into a centralized utility function and deprecated unreliable flags, ensuring that user verification status accurately reflects completed steps across all flows."
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
          <h2 className="mb-16 text-center text-3xl font-semibold tracking-tight">Outcomes </h2>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FiSearch />,
                title: "Stronger Identity Assurance",
                desc: "Enabled phone verification to support KYC compliance and secure key user data.",
              },
              {
                icon: <FiTrendingDown />,
                title: "Fraud Rate Reduction",
                desc: "Noticed a significant drop in duplicate and bot signups post-deployment.",
              },
              {
                icon: <FiTrendingUp />,
                title: "Increased Verification Coverage",
                desc: "Achieved high opt-in rates for phone number collection across login types.",
              },
              {
                icon: <FiRepeat />,
                title: "Seamless Multi-Flow Handling",
                desc: "Authentication logic now smoothly supports Facebook, Email, and Phone logins without edge case regressions.",
              },
              {
                icon: <FiActivity />,
                title: "Robust Test Coverage",
                desc: "Test suite ensures safe iteration across authentication pathways with near-zero regressions.",
              },
              {
                icon: <FiPhone />,
                title: "Resilient SMS Delivery",
                desc: "Integrated fallback and retry logic to improve Twilio delivery success rates.",
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

        {/* CTA */}
        <div className="mt-24 text-center">
          <Button href="/#projects" intent="secondary">
            <FiArrowLeft aria-hidden />
            Back to projects
          </Button>
        </div>
      </div>
    </section>
  )
}
