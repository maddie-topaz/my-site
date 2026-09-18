"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaBookOpen, FaBox, FaGithub, FaYoutube } from "react-icons/fa"
import { SectionHeading } from "components/SectionHeading"

const funProjects = [
  {
    title: "Tetris Tournament",
    description: "A Tetris Bot Using Genetic Algorithms and Evolutionary Programming",
    gh: "https://github.com/missmilo/tetris",
    yt: "https://www.youtube.com/embed/BFX26GQ9bAE",
    image: "/images/tetris.png", // Add image path here
    report: "/resources/TetrisReport.pdf",
  },
  {
    title: "Fennex: A 2D Monogame Platformer",
    description: "A simple 2D platformer made using the Monogame API Version 3.6 and Visual Studio 2015.",
    gh: "https://github.com/yourname/ascii-animator",
    yt: "https://www.youtube.com/embed/BqbTJuIhbj0",
    report: "/resources/FennexReport.pdf",
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
    title: "Rocketdata",
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

const linkClass = "muted-strong hover:text-primary inline-flex items-center gap-2 text-sm transition-colors"

const FunProjects = () => {
  return (
    <section id="side-projects" className="hairline border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="05 / Side projects"
          title="Side projects"
          intro="Graphics engines, rogue game ideas, the occasional computer vision rabbit hole and other late-night engineering detours."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {funProjects.map((project, idx) => (
            <motion.article
              key={project.title}
              className="panel panel-hover flex h-full flex-col overflow-hidden"
              initial="hidden"
              whileInView="visible"
              custom={idx * 0.08}
              variants={fadeInUp}
              viewport={{ once: true, margin: "-40px" }}
            >
              {project.yt ? (
                <div className="hairline aspect-video w-full border-b">
                  <iframe
                    className="h-full w-full"
                    src={project.yt}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : project.image ? (
                <div className="hairline relative aspect-video w-full overflow-hidden border-b">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
              ) : null}

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                <p className="muted mt-2 text-sm leading-relaxed">{project.description}</p>

                <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
                  {project.report && (
                    <a href={project.report} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      <FaBookOpen aria-hidden /> Report
                    </a>
                  )}
                  {project.gh && (
                    <a href={project.gh} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      <FaGithub aria-hidden /> GitHub
                    </a>
                  )}
                  {project.yt && (
                    <a href={project.yt} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      <FaYoutube aria-hidden /> YouTube
                    </a>
                  )}
                  {project.npm && (
                    <a href={project.npm} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      <FaBox aria-hidden /> npm
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FunProjects
