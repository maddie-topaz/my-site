"use client"

import Image from "next/image"
import { SiAmazon, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si"
import { Button } from "components/Button/Button"

const projects = [
  {
    id: "chumba-phone-verify",
    title: "Seamless Phone Verification for Chumba Casino",
    description:
      "Built a secure and frictionless phone verification system to enhance user trust and boost verified signups.",
    image: "/images/chumba.webp",
    tech: [SiAmazon, SiTypescript, SiNodedotjs],
  },
  {
    id: "atlassian-experiments",
    title: "Experimentation at Scale: Rolling out the Statsig Platform At Atlassian",
    description:
      "Built and published Node.js packages to standardize Statsig integration across backend services. Enabled safer, faster experimentation with feature flags, robust analytics tagging, and platform-wide consistency.",
    image: "/images/statsig.png",
    tech: [SiTypescript, SiNodedotjs, SiReact],
  },
  /*{
    id: "adr",
    title: "Petabyte-Scale Disaster Recovery for User-Generated Content",
    description:
      "Built a disaster recovery pipeline in AWS to ensure backup integrity across S3, Lambda, and DynamoDB for millions of assets, with observability and alerting baked in.",
    image: "/images/notifications.png",
    tech: [SiAmazon, SiAmazondynamodb, SiTypescript],
  },*/
]

export const Projects = () => {
  return (
    <section id="projects" className="bg-base-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Featured Projects</h2>
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map(({ id, image, description, title, tech }) => (
            <div key={id} className="card bg-base-100 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <figure className="bg-base-200 relative h-[400px] overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-opacity duration-300 hover:opacity-90"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </figure>
              <div className="card-body p-6">
                <h3 className="card-title text-lg font-semibold">{title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-400 dark:text-gray-300">{description}</p>
                <div className="mt-4 flex gap-2">
                  {tech.map((Icon, index) => (
                    <Icon key={index} className="h-5 w-5 text-gray-500 dark:text-gray-300" />
                  ))}
                </div>
                <div className="card-actions mt-4 justify-end">
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
