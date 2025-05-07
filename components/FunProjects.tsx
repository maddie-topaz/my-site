"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaBox, FaGithub, FaYoutube } from "react-icons/fa"

const funProjects = [
  {
    title: "Tetris Tournament",
    description: "A Tetris Bot Using Genetic Algorithms and Evolutionary Programming",
    gh: "https://github.com/missmilo/tetris",
    yt: "https://www.youtube.com/embed/BFX26GQ9bAE",
    image: "/images/tetris.png", // Add image path here
  },
  {
    title: "Fennex: A 2D Monogame Platformer",
    description: "A simple 2D platformer made using the Monogame API Version 3.6 and Visual Studio 2015.",
    gh: "https://github.com/yourname/ascii-animator",
    yt: "https://www.youtube.com/embed/BqbTJuIhbj0",
  },
  {
    title: "OpenGL Graphics Engine",
    description: "A 3D graphics engine built from scratch written in C++ / OpenGL.",
    gh: "https://github.com/missmilo/Lemon-Engine",
    yt: "https://www.youtube.com/embed/OhkzZtGIYBA",
  },
  /*{
    title: "Spotify Music Analyzer",
    description:
      "A site integrated with the Spotify API and Lyrics Genius API that allows users to search for songs and view their track analysis.",
    gh: "https://github.com/missmilo/music-trends-subscription",
    yt: "www.youtube.com/embed/OhkzZtGIYBA",
  },*/
  {
    title: "🚀 Rocketdata",
    description:
      "Rocketdata is a modern, lightweight Node.js wrapper for NASA's public APIs. Easily fetch data from the Astronomy Picture of the Day (APOD), Mars Rover imagery, and more.",
    gh: "https://github.com/missmilo/rocketdata/blob/main/API.md",
    npm: "https://www.npmjs.com/package/rocketdata#-rocketdata",
    image: "/images/artemis2core.jpg",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

const FunProjects = () => {
  return (
    <section className="bg-base-200 dark:bg-base-300 py-20 text-center">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h2
          className="mb-6 text-4xl font-bold dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Side Quests
        </motion.h2>

        <motion.p
          className="mb-12 text-lg text-gray-400 dark:text-gray-300"
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Graphics engines, rogue game ideas, the occasional computer vision rabbit hole and other late-night
          engineering detours.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2">
          {funProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="bg-base-100 flex h-full flex-col rounded-xl p-6 text-left shadow-md transition-transform duration-300 hover:scale-[1.02]"
              initial="hidden"
              whileInView="visible"
              custom={0.2 + idx * 0.1}
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <h3 className="mb-2 text-xl font-semibold dark:text-white">{project.title}</h3>

              <div className="mb-4 min-h-[6rem] flex-1">
                <p className="text-sm text-gray-400 dark:text-gray-400">{project.description}</p>
              </div>

              <div className="mt-auto space-y-2">
                {project.gh && (
                  <p>
                    <a
                      href={project.gh}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-500 hover:underline"
                    >
                      <FaGithub /> View on GitHub
                    </a>
                  </p>
                )}
                {project.yt && (
                  <p>
                    <a
                      href={project.yt}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-500 hover:underline"
                    >
                      <FaYoutube /> View on YouTube
                    </a>
                  </p>
                )}
                {project.npm && (
                  <p>
                    <a
                      href={project.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-500 hover:underline"
                    >
                      <FaBox /> View on NPM
                    </a>
                  </p>
                )}
              </div>

              {project.yt ? (
                <div className="mt-4">
                  <iframe
                    className="h-48 w-full rounded-md"
                    src={project.yt}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : project.image ? (
                <div className="relative mt-4 h-48 w-full overflow-hidden rounded-md">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FunProjects
