"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const taglines = [
  "git commit -m 'automate everything'",
  "nuke clickops --from orbit",
  "deploy --env=production --safe",
  "test  # 213 passed, 0 failed",
  "rm -rf manual-tasks",
  "echo 'types are contracts, not suggestions'",
  "red, green, refactor",
  "secure && scale && serve",
  "./migrate.sh --safe --no-downtime",
  "mkdir -p /systems/composable",
  "metrics > intuition",
]

const TYPING_SPEED = 60
const DELETING_SPEED = 40
const DELAY_BEFORE_DELETE = 1400

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
    <motion.div
      className="panel mx-auto w-full max-w-lg overflow-hidden font-mono text-sm"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Window chrome */}
      <div className="hairline flex items-center gap-2 border-b px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="bg-base-300 h-3 w-3 rounded-full" />
          <span className="bg-base-300 h-3 w-3 rounded-full" />
          <span className="bg-base-300 h-3 w-3 rounded-full" />
        </span>
        <span className="muted ml-2 text-xs">maddie@ops: ~</span>
      </div>

      <div className="space-y-2 px-5 py-5">
        <p className="muted">
          <span className="text-primary">$</span> whoami
        </p>
        <p className="muted">maddie</p>
        <p className="min-h-[1.5rem] break-words whitespace-pre-wrap">
          <span className="text-primary">$</span> {displayedText}
          <span className="bg-base-content ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.15em] animate-pulse" />
        </p>
      </div>
    </motion.div>
  )
}
