"use client";

import { Button } from "components/Button/Button";

export const Projects = () => {
  return (
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
  );
};