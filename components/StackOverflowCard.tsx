"use client";

import { FaGithub, FaTerminal } from "react-icons/fa";
import { SiStackoverflow } from "react-icons/si";
import { motion } from "framer-motion";

const STACK_OVERFLOW_USER_ID = "YOUR_USER_ID";
const STACK_OVERFLOW_PROFILE_URL = `https://stackoverflow.com/users/${STACK_OVERFLOW_USER_ID}`;
const GITHUB_URL = "https://github.com/YOUR_GITHUB_USERNAME";
const DEV_PORTFOLIO_URL = "https://yourdomain.com/dev";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export const DeveloperPresenceSection = () => {
  return (
    <section className="py-20 bg-base-100 dark:bg-black text-center border-t border-base-300 dark:border-gray-800">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-4xl font-bold mb-6 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Developer Presence
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 dark:text-gray-200 leading-relaxed mb-12"
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          I’m active across the dev community — contributing code, answering questions, and building open tooling that helps others ship better software.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Stack Overflow */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            variants={fadeInUp}
            viewport={{ once: true }}
            className="bg-base-200 dark:bg-base-300 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <SiStackoverflow className="mx-auto text-4xl mb-3 text-orange-500 dark:text-orange-400" />
            <a
              href={STACK_OVERFLOW_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              View My Stack Overflow Profile
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            variants={fadeInUp}
            viewport={{ once: true }}
            className="bg-base-200 dark:bg-base-300 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <FaGithub className="mx-auto text-4xl mb-3" style={{ color: "#8257e5" }} />
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              Explore My GitHub
            </a>
          </motion.div>

          {/* Dev Terminal UI */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            variants={fadeInUp}
            viewport={{ once: true }}
            className="bg-base-200 dark:bg-base-300 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <FaTerminal className="mx-auto text-4xl mb-3" style={{ color: "#00ff87" }} />
            <a
              href={DEV_PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              Launch Interactive Terminal

            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
