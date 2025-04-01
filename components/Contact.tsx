"use client";

import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { ContactFormModal } from "./ContactFormModal";
import { motion } from "framer-motion";

interface SocialButtonProps {
  href?: string;
  icon: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const SocialButton = ({ href, icon, ariaLabel, onClick }: SocialButtonProps) => {
  const baseClass = "btn btn-circle btn-ghost hover:bg-base-300";

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClass}
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  ) : (
    <button onClick={onClick} className={baseClass} aria-label={ariaLabel}>
      {icon}
    </button>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-base-200 dark:bg-black text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h2
          className="text-4xl font-bold mb-6 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 dark:text-gray-400 leading-relaxed mb-10"
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Want to work together, chat dev tools, or just say hi? I’m always open to thoughtful messages.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <SocialButton
            href="https://www.linkedin.com/in/maddisen-topaz-sw-developer/"
            icon={<FaLinkedin className="h-8 w-8 text-gray-700 dark:text-gray-200" />}
            ariaLabel="LinkedIn"
          />
           <ContactFormModal />
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
