"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { SectionHeading } from "components/SectionHeading"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

const books = [
  {
    id: "the-pheonix-project",
    title: "The Phoenix Project",
    author: "Gene Kim, George Spafford, and Kevin Behr",
    cover: "/images/tpp.jpg",
    status: "Favorite",
  },
  {
    id: "unicorn-project",
    title: "The Unicorn Project",
    author: "Nicolas Zumbrunn",
    cover: "/images/unicorn.jpg",
  },
  {
    id: "the-devops-handbook",
    title: "The DevOps Handbook",
    author: "Gene Kim, Patrick Debois, John Willis",
    cover: "/images/devops.jpg",
  },
  {
    id: "accelerate",
    title: "Accelerate: Building and Scaling High Performing Technology Organizations",
    author: "Nicole Forsgren, Jez Humble, and Gene Kim",
    cover: "/images/accelerate.jpg",
    status: "Favorite",
  },
  {
    id: "apprent-patterns",
    title: "Apprenticeship Patterns",
    author: "David H. Hoover and Adewale Oshineye",
    cover: "/images/patterns.jpg",
    status: "Read",
  },
  {
    id: "clean-code",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    cover: "/images/clean-code.jpg",
    status: "Read",
  },
  {
    id: "pragmatic-programmer",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    cover: "/images/prag.jpg",
    status: "Read",
  },
  {
    id: "building-microservices",
    title: "Building Microservices: Designing Fine-Grained Systems",
    author: "Sam Newman",
    cover: "/images/microservices.jpg",
  },
  {
    id: "delicate-art",
    title: "The (Delicate) Art of Bureaucracy",
    author: "Mark Schwartz",
    cover: "/images/delicate.jpg",
    status: "Favorite",
  },
  {
    id: "grokking-algorithms",
    title: "Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People",
    author: "Aditya Y. Bhargava",
    cover: "/images/grokking.jpg",
  },
]

export const BookshelfWithBoard = () => {
  const shelfRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (shelfRef.current) {
      shelfRef.current.scrollBy({
        left: dir === "left" ? -250 : 250,
        behavior: "smooth",
      })
    }
  }

  const arrowClass = "panel panel-hover muted-strong hover:text-base-content flex h-9 w-9 items-center justify-center"

  return (
    <section id="bookshelf" className="hairline border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="07 / Bookshelf"
            title="Bookshelf"
            intro="Stuff I’ve read so you don’t have to. (But you should.)"
          />
          <div className="mb-12 hidden shrink-0 gap-2 sm:flex">
            <button onClick={() => scroll("left")} className={arrowClass} aria-label="Scroll left">
              <FiChevronLeft aria-hidden />
            </button>
            <button onClick={() => scroll("right")} className={arrowClass} aria-label="Scroll right">
              <FiChevronRight aria-hidden />
            </button>
          </div>
        </div>

        {/* Scrollable bookshelf */}
        <div
          ref={shelfRef}
          className="scrollbar-hide -mx-6 cursor-grab snap-x snap-mandatory overflow-x-auto scroll-smooth px-6 pb-4 active:cursor-grabbing"
        >
          <div className="inline-flex gap-5">
            {books.map((book, i) => (
              <motion.figure
                key={book.id}
                className="group relative w-36 shrink-0 snap-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={Math.min(i, 6) * 0.05}
                variants={fadeInUp}
              >
                <div className="hairline h-[216px] w-full overflow-hidden rounded-sm border shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={144}
                    height={216}
                    className="h-full w-full object-cover"
                  />
                </div>
                {book.status === "Favorite" && (
                  <figcaption className="text-accent mt-3 font-mono text-[0.65rem] tracking-widest uppercase">
                    Favourite
                  </figcaption>
                )}
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
