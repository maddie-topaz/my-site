"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FiArrowRight } from "react-icons/fi"
import { SiAmazon, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si"
import { Button } from "components/Button/Button"
import { SectionHeading } from "components/SectionHeading"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

const projects = [
  {
    id: "chumba-phone-verify",
    company: "VGW",
    title: "Seamless Phone Verification for Chumba Casino",
    description:
      "Built a secure and frictionless phone verification system to enhance user trust and boost verified signups.",
    image: "/images/chumba.webp",
    tech: [
      { name: "AWS", icon: SiAmazon },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    id: "atlassian-experiments",
    company: "Atlassian",
    title: "Experimentation at Scale: Rolling out the Statsig Platform At Atlassian",
    description: "Built and published Node.js packages to standardize Statsig integration across Atlassian services.",
    image: "/images/statsig.png",
    tech: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "React", icon: SiReact },
    ],
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
    <section id="projects" className="hairline border-t py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 / Projects"
          title="Featured work"
          intro="Two case studies with the problem, the architecture, and what shipped."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map(({ id, company, image, description, title, tech }, i) => (
            <motion.article
              key={id}
              className="panel panel-hover flex flex-col overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i * 0.1}
              variants={fadeInUp}
            >
              <figure className="hairline bg-base-200 relative aspect-[16/10] overflow-hidden border-b">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className="text-secondary mb-2 font-mono text-xs tracking-wide">{company}</p>
                <h3 className="text-lg font-semibold tracking-tight text-balance">{title}</h3>
                <p className="muted mt-3 text-sm leading-relaxed">{description}</p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <div className="flex gap-3">
                    {tech.map(({ name, icon: Icon }) => (
                      <span key={name} className="tooltip" data-tip={name}>
                        <Icon className="muted hover:text-primary h-5 w-5 transition-colors" />
                      </span>
                    ))}
                  </div>
                  <Button href={`/projects/${id}`} intent="secondary" size="sm">
                    Read case study
                    <FiArrowRight aria-hidden />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
