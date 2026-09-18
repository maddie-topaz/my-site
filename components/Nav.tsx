"use client"

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
]

export const Nav = () => {
  const { scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // The /terminal page is a full-screen easter egg with its own chrome.
  if (pathname === "/terminal") return null

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base-100/80 hairline border-b backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm tracking-tight">
          <span className="text-primary">~</span>/maddie-topaz
        </Link>
        <ul className="hidden items-center gap-8 text-sm sm:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="muted-strong hover:text-base-content transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://www.linkedin.com/in/maddisen-topaz-sw-developer/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline hairline hover:border-base-content hover:bg-base-content hover:text-base-100 font-normal"
        >
          LinkedIn
        </a>
      </nav>
      <motion.div
        aria-hidden
        className="bg-primary absolute inset-x-0 bottom-0 h-px origin-left"
        style={{ scaleX: reduceMotion ? scrollYProgress : progress }}
      />
    </header>
  )
}
