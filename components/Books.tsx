"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

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

  return (
    <section className="bg-base-100 border-base-300 relative border-t py-16 dark:border-gray-800 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-4xl font-bold dark:text-white">Bookshelf</h2>

        <motion.p
          className="mb-12 text-center text-lg leading-relaxed text-gray-400 dark:text-gray-200"
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Stuff I’ve read so you don’t have to. (But you should.)
        </motion.p>

        {/* Arrow Buttons with inline SVGs */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white shadow-lg backdrop-blur-md transition hover:bg-white/20 dark:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white shadow-lg backdrop-blur-md transition hover:bg-white/20 dark:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Bookshelf */}
        <div
          ref={shelfRef}
          className="scrollbar-hide cursor-grab snap-x snap-mandatory overflow-x-auto scroll-smooth pb-6 [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        >
          <div className="inline-flex gap-6 px-2">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-[216px] w-36 flex-shrink-0 transform cursor-pointer snap-start transition duration-300 hover:-translate-y-2"
              >
                <div className="h-full w-full overflow-hidden rounded-sm border bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={144}
                    height={216}
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
