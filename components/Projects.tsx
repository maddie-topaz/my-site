"use client"

import Image from "next/image"
import { Button } from "components/Button/Button"

const projects = [
  {
    id: "chumba-notifications",
    title: "From Signup to Ping: Real-Time Notifications & Verification Systems at Chumba",
    description:
      "Led the design and implementation of a scalable notification system and phone verification flow to improve user engagement and platform trust. Built with AWS, feature flags, and real-time event triggers.",
    image: "/images/chumba.webp",
  },
  {
    id: "atlassian-experiments",
    title: "Experimentation at Scale: The Statsig Platform & Node.js Tooling",
    description:
      "Built and published Node.js packages to standardize Statsig integration across backend services. Enabled safer, faster experimentation with feature flags, robust analytics tagging, and platform-wide consistency.",
    image: "/images/statsig.png",
  },
  {
    id: "adr",
    title: "Petabyte-Scale Disaster Recovery for User-Generated Content",
    description:
      "Built a disaster recovery pipeline in AWS to ensure backup integrity across S3, Lambda, and DynamoDB for millions of assets, with observability and alerting baked in.",
    image: "/images/notifications.png",
  },
  {
    id: "ms3d",
    title: "Real-Time 3D Rendering Engine",
    description: "Real-Time 3D Rendering Engine",
    image: "/images/notifications.png",
  },
  {
    id: "aa",
    title: "Real-Time 3D Rendering Engine",
    description: "Real-Time 3D Rendering Engine",
    image: "/images/notifications.png",
  },
  {
    id: "ab",
    title: "Real-Time 3D Rendering Engine",
    description: "Real-Time 3D Rendering Engine",
    image: "/images/notifications.png",
  },
]

export const Projects = () => {
  return (
    <section id="projects" className="bg-base-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, image, description, title }) => (
            <div key={id} className="card bg-base-100 shadow-xl">
              <figure className="bg-base-200 h-48">
                <Image src={image} alt={title} fill className="object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="text-sm text-gray-400 dark:text-gray-300">{description}</p>
                <div className="card-actions justify-end">
                  <Button href={`/projects/${id}`} className="btn btn-sm btn-primary">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
