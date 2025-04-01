"use client"

import { motion } from "framer-motion"
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
    <section className="bg-base-100 py-16 text-gray-800 dark:bg-black dark:text-gray-100">
      <div className="container mx-auto max-w-screen-lg px-4">
        <motion.h1
          className="mb-6 text-center text-4xl font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          From Signup to Ping: Real-Time Notification & Verification Systems at Chumba
        </motion.h1>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-center text-lg leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          During my time at Chumba Casino, I led the development of a new in-app notification system and implemented a
          secure phone number verification flow — improving user engagement and platform trust.
        </motion.p>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold">🔔 In-App Notifications</h2>
            <ul className="list-inside list-disc space-y-3 text-gray-700 dark:text-gray-300">
              <li>Designed a scalable notification architecture supporting push and banner types.</li>
              <li>Integrated feature flags to enable A/B testing and incremental rollouts.</li>
              <li>Enabled real-time targeting through event-based triggers and segment rules.</li>
              <li>Instrumented telemetry to measure engagement and conversion performance.</li>
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold">📱 Phone Number Verification</h2>
            <ul className="list-inside list-disc space-y-3 text-gray-700 dark:text-gray-300">
              <li>Implemented a secure OTP verification workflow using AWS SNS and Lambda.</li>
              <li>Worked closely with product & compliance to ensure GDPR and KYC compliance.</li>
              <li>Integrated UI validation and re-verification for edge case scenarios.</li>
              <li>Added observability hooks to alert on failed delivery or long verification times.</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Button href="/projects" className="btn btn-primary">
            ← Back to Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
