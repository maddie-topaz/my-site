"use client";

import { Button } from "components/Button/Button"
import { AnimatedTerminal } from "components/AnimatedTerminal";
import { SkillsIcons } from "components/SkillsIcons";
import { AboutMe } from "components/AboutMe";

export default function Web() {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200 px-4">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 flex justify-center">
            <AnimatedTerminal />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-primary">Hi</span> 👋 I'm Maddie
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium text-primary-content animate-fade-in-up opacity-0">
              Full-stack engineer with a <span className="font-bold">platform mindset</span> and a <span className="font-bold">DevOps heart</span>.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="btn btn-primary btn-lg">View Projects</button>
              <button className="btn btn-outline btn-lg">Contact Me</button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Icons Section */}
      <SkillsIcons />

      {/* About Section */}
      <AboutMe />

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
