"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaFingerprint, FaMobileAlt, FaRobot, FaUserCheck, FaUserLock, FaUserShield } from "react-icons/fa"
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
          <h1 className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-5xl font-extrabold text-transparent">
            Securing Access at Scale
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Integrating secure, low-friction phone verification with Twilio into Chumba Casino's login flows to reduce
            fraud and enhance identity assurance.
          </p>
          <div className="mt-6 flex justify-center gap-4 text-2xl text-white">
            <SiReact title="React" />
            <SiNodedotjs title="Node.js" />
            <SiPostgresql title="PostgreSQL" />
            <SiTwilio title="Twilio" />
            <SiAmazon title="AWS" />
          </div>
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

        {/* How It Works Section */}
        <motion.div
          className="mt-24 grid items-center gap-16 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          variants={fadeInUp}
        >
          <Image
            src="/images/phone-verify.png"
            alt="Phone Verification"
            width={500}
            height={500}
            className="rounded-xl"
          />
          <div className="space-y-6">
            <h2 className="mb-4 text-2xl font-bold text-white">⚙️ How It Works</h2>
            <p className="mx-auto max-w-3xl text-gray-400">
              When a user logs in, they are prompted to verify their phone number via Twilio. A secure OTP is delivered
              via SMS and validated through a Lambda function. Verification results are stored in DynamoDB, and
              observability hooks trigger real-time alerts in case of delivery or validation failure. Once verified, the
              user gains access and their mobile number is retained for marketing and compliance purposes.
            </p>
          </div>
        </motion.div>

        {/* Architecture Section */}
        <motion.div
          className="mt-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-2xl font-bold text-white">🧩 Architecture Diagram</h2>
          <p className="mb-6 text-gray-400">
            Visual overview of service orchestration, API flows, and observability hooks.
          </p>
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

        {/* Problem and Implementation Section */}
        <motion.div
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.25}
          variants={fadeInUp}
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">🔧 Integration Challenges & Implementation</h2>
            <p className="text-base text-gray-400">
              The integration of phone verification into Chumba Casino's existing auth system posed significant
              complexity due to multiple existing login flows — including Facebook OAuth and standard email
              verification. A complete overhaul of the existing verification logic was required to avoid conflicts
              between phone and email verification states.
            </p>
            <div className="grid gap-6 text-left md:grid-cols-2">
              <FeatureCard
                title="🧠 Logic Consolidation"
                desc="Centralized all user verification checks into a single function to handle mixed verification states across login flows."
              />
              <FeatureCard
                title="🕸️ Branch Complexity Reduction"
                desc="Reduced branching and mutation complexity by reworking how login flows interacted with verification flags in the database."
              />
              <FeatureCard
                title="📞 Twilio Integration"
                desc="Integrated Twilio for secure, reliable phone number verification with minimal latency and high deliverability."
              />
            </div>
          </div>
        </motion.div>

        {/* Outcomes Section */}
        <motion.div
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-center text-2xl font-bold text-white">🚀 Outcomes & Reflections</h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="bg-base-200 rounded-lg p-6 text-left shadow">
              <h3 className="text-xl font-bold text-white">✅ Improved Authentication Flow</h3>
              <p className="text-gray-400">
                Streamlined and unified the login experience across all user types with consistent verification
                behavior.
              </p>
            </div>
            <div className="bg-base-200 rounded-lg p-6 text-left shadow">
              <h3 className="text-xl font-bold text-white">🔍 Stronger Identity Assurance</h3>
              <p className="text-gray-400">
                Enabled phone verification to support KYC compliance, reduce account fraud, and secure valuable
                marketing contact data.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Button href="/projects" className="btn btn-primary">
            ← Back to Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-neutral rounded-xl p-4 shadow">
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  )
}

function GoalCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-base-200 flex items-center gap-4 rounded-lg p-6 shadow">
      <div className="text-primary flex-shrink-0 text-4xl">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-400">{desc}</p>
      </div>
    </div>
  )
}
