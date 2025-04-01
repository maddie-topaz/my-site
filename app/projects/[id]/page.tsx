"use client"

import { motion } from "framer-motion"
import Image from "next/image"
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
        {/* Hero */}
        <motion.div className="space-y-4 text-center" initial="hidden" whileInView="visible" variants={fadeInUp}>
          <h1 className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-4xl font-extrabold text-transparent">
            Securing Access at Scale
          </h1>
          <p className="mx-auto max-w-xl text-lg text-gray-400">
            Designing resilient, low-friction phone verification for Chumba using AWS, DynamoDB, and observability
            tooling.
          </p>
        </motion.div>

        {/* Tech stack bar */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
          <span className="badge badge-outline">Next.js</span>
          <span className="badge badge-outline">AWS Lambda</span>
          <span className="badge badge-outline">DynamoDB</span>
          <span className="badge badge-outline">SNS</span>
          <span className="badge badge-outline">Framer Motion</span>
        </div>

        {/* Section: Phone Verification */}
        <div className="mt-16 flex flex-col items-center space-y-6 space-x-0 md:flex-row md:space-y-0 md:space-x-6">
          <div className="flex-shrink-0">
            <Image
              src="/images/phone-verify.png"
              alt="Phone Verification"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold text-white">📱 Phone Number Verification</h2>
            <p className="text-base text-gray-400">
              Phone verification was re-architected to minimize friction and maximize compliance, while maintaining
              tight observability.
            </p>
            <div className="grid gap-6 text-left md:grid-cols-2">
              <div className="bg-neutral rounded-xl p-4 shadow">
                <h3 className="font-semibold text-white">🔒 Secure OTP Workflow</h3>
                <p className="text-gray-400">
                  Built with AWS SNS, Lambda, and DynamoDB, ensuring minimal latency and strong observability.
                </p>
              </div>
              <div className="bg-neutral rounded-xl p-4 shadow">
                <h3 className="font-semibold text-white">✅ Full UX Cycle</h3>
                <p className="text-gray-400">
                  Frontend validations, retries, and clear error states for high success rates.
                </p>
              </div>
              <div className="bg-neutral rounded-xl p-4 shadow">
                <h3 className="font-semibold text-white">📊 Real-Time Monitoring</h3>
                <p className="text-gray-400">
                  Custom alerting and metrics pipelines to flag degraded experience in real-time.
                </p>
              </div>
              <div className="bg-neutral rounded-xl p-4 shadow">
                <h3 className="font-semibold text-white">📋 GDPR & KYC Compliance</h3>
                <p className="text-gray-400">
                  Verification flow passed audit for personal data handling and security requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section: Architecture Diagram Placeholder */}
        <motion.div
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-center text-2xl font-bold text-white">🧩 System Architecture (Placeholder)</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-gray-400">
            Diagram or visual showcasing the OTP verification flow, service integrations, and observability hooks.
          </p>
          <div className="bg-base-200 relative mx-auto h-[600px] w-full max-w-5xl overflow-hidden rounded-xl">
            <Image
              src="/images/pv-diagram.png"
              alt="Phone Verification Flow Diagram"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </motion.div>

        {/* Section: Outcomes */}
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
              <h3 className="text-xl font-bold text-white">📈 13% Higher Completion Rate</h3>
              <p className="text-gray-400">Reduced user drop-off by simplifying the retry and error handling UX.</p>
            </div>
            <div className="bg-base-200 rounded-lg p-6 text-left shadow">
              <h3 className="text-xl font-bold text-white">🧠 What I'd Try Next</h3>
              <p className="text-gray-400">
                Passkey integration or SIM-swap detection to tighten auth while keeping it seamless.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button href="/projects" className="btn btn-primary">
            ← Back to Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
