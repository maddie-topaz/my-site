"use client";

import { Button } from "components/Button/Button"
import { AnimatedTerminal } from "components/AnimatedTerminal";
import { SkillsIcons } from "components/SkillsIcons";

export default function Web() {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Hi 👋 I'm Maddie </h1>
            <AnimatedTerminal />
          </div>
        </div>
      </section>

      {/* Skills Icons Section */}
      <SkillsIcons />

      {/* About Section */ }
      <section id="about" className="dark:bg-gray-900 py-8 sm:py-16">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 lg:px-6">
          <h2 className="mb-8 text-3xl font-bold text-center dark:text-white">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                I'm a passionate engineer with 5+ years of experience building web applications.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                My expertise includes React, Node.js, and cloud infrastructure.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold dark:text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'AWS', 'Docker'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <div key={project} className="card bg-base-100 shadow-xl">
                <figure className="h-48 bg-base-200"></figure>
                <div className="card-body">
                  <h3 className="card-title">Project {project}</h3>
                  <p>Brief description of project {project} and technologies used.</p>
                  <div className="card-actions justify-end">
                    <Button href={`/projects/${project}`} className="btn btn-sm btn-primary">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com" className="btn btn-circle btn-ghost">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="mailto:example@email.com" className="btn btn-circle btn-ghost">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
