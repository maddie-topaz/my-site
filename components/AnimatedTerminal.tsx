"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const taglines = [
  "Building scalable systems",
  "Shipping without friction",
  "Creating elegant solutions",
  "Optimizing developer experience",
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 40;
const DELAY_BEFORE_DELETE = 1200;

export const AnimatedTerminal = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = taglines[taglineIndex] || "";
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(currentTagline.slice(0, displayedText.length + 1));
      }, TYPING_SPEED);

      if (displayedText === currentTagline) {
        setTimeout(() => setIsDeleting(true), DELAY_BEFORE_DELETE);
      }
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentTagline.slice(0, displayedText.length - 1));
      }, DELETING_SPEED);

      if (displayedText === "") {
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, taglineIndex]);

  return (
    <div className="py-6">
      <motion.div
        className="mockup-code bg-neutral-900 text-green-400 text-left p-4 max-w-md mx-auto border-2 border-neutral-700 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <pre data-prefix="$" className="text-pink-500">
          <motion.span
            className="text-lg inline-block font-mono"
            key={taglineIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </motion.span>
        </pre>
      </motion.div>
    </div>
  );
};