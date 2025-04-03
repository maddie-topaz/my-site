"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const taglines = [
  "$ git commit -m 'automate everything'",
  "$ nuke clickops --from orbit",
  "$ deploy --env=production --safe",
  "✔ Tests: 213 passed, 0 failed",
  "$ rm -rf manual-tasks",
  "types !== suggestions; types === contracts;",
  "🚧 red → green → refactor",
  "$ secure && scale && serve",
  "$ ./migrate.sh --safe --no-downtime",
  "$ mkdir -p /systems/composable",
  "📈 metrics > intuition",
]

const TYPING_SPEED = 60
const DELETING_SPEED = 40
const DELAY_BEFORE_DELETE = 1200

export const AnimatedTerminal = () => {
  const [displayedText, setDisplayedText] = useState("")
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTagline = taglines[taglineIndex] || ""
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(currentTagline.slice(0, displayedText.length + 1))
      }, TYPING_SPEED)

      if (displayedText === currentTagline) {
        setTimeout(() => setIsDeleting(true), DELAY_BEFORE_DELETE)
      }
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentTagline.slice(0, displayedText.length - 1))
      }, DELETING_SPEED)

      if (displayedText === "") {
        setIsDeleting(false)
        setTaglineIndex((prev) => (prev + 1) % taglines.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, taglineIndex])

  return (
    <div className="w-full py-6">
      <motion.div
        className="mockup-code mx-auto w-full rounded-lg border-2 border-neutral-700 bg-neutral-900 p-4 text-left text-green-400 sm:w-[300px] md:w-[500px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <pre className="overflow-hidden pl-4 break-words whitespace-pre-wrap text-pink-500">
          <motion.span
            className="inline-block font-mono text-lg"
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
  )
}
