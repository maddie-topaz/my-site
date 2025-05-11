import { motion } from "framer-motion"
import type { ReactElement } from "react"
import {
  SiAmazon,
  SiAmazondynamodb,
  SiAwslambda,
  SiC,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiGoogleanalytics,
  SiGraphql,
  SiJest,
  SiNodedotjs,
  SiOpengl,
  SiPostgresql,
  SiPulumi,
  SiReact,
  SiRedux,
  SiRocket,
  SiSass,
  SiSharp,
  SiSubversion,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si"

type Experience = {
  date: string
  title: string
  image: string
  description: ReactElement
  featured?: {
    name: string
    link: string
  }
  tech?: IconWithTitle[]
  footer?: ReactElement
}

type IconWithTitle = ReactElement<{ title?: string }>

const TechIcons = ({ icons }: { icons?: IconWithTitle[] }) => {
  if (!icons || icons.length === 0) return null
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {icons.map((icon, i) => (
        <span key={i} className="tooltip" data-tip={icon.props.title}>
          <span className="text-primary text-xl">{icon}</span>
        </span>
      ))}
    </div>
  )
}

export const ExperienceSection = () => {
  const experiences: Experience[] = [
    /*{
      date: "May 2025 – Current",
      title: "Elastik – Senior Software Engineer",
      image: "/images/elastik.png",
      description: (
        <div>
          <h1>Hello</h1>
        </div>
      ),
      tech: [
        <SiAmazon title="AWS" />,
        <SiAwsamplify title="AWS Amplify" />,
        <SiAmazondynamodb title="DynamoDB" />,
        <SiGraphql title="GraphQL" />,
        <SiAwslambda title="AWS Lambda" />,
        <SiNodedotjs title="NodeJS" />,
        <SiTypescript title="TypeScript" />,
        <SiReact title="React" />,
        <SiTailwindcss title="Tailwind" />,
        <SiRedux title="Redux" />,
        <SiJest title="Jest" />,
        <SiGit title="Git" />
      ],
    },*/
    {
      date: "Mar 2024 - May 2025",
      title: "Personal Sabbatical – Self-directed",
      description: (
        <div className="space-y-4 leading-relaxed text-gray-300">
          <p>
            <span className="font-semibold text-white">Following a personal loss</span>, I took intentional time away
            from work to travel and reconnect with life.
          </p>
          <p>
            I visited Nepal, hiking to <span className="font-bold">Everest Base Camp</span> — a high-altitude journey
            through remote Himalayan villages, suspension bridges, and snow-covered trails. Later, I continued to Europe
            and walked the <span className="font-bold">French Camino de Santiago</span>, a 780 km pilgrimage from
            Saint-Jean-Pied-de-Port in France to Santiago de Compostela in Spain.
          </p>
          <p>
            The break gave me time to reflect and recharge. I came back with a sharper mindset and renewed energy for
            creative and technical challenges.
          </p>
        </div>
      ),
      footer: (
        <div>
          <span className="text-gray-300 italic">
            That’s me at Everest Base Camp — 5,364m above sea level and a long way from JavaScript.{" "}
          </span>
        </div>
      ),
      image: "/images/ebc.jpg",
    },
    {
      date: "Aug 2021 – Mar 2024",
      title: "Atlassian – Software Engineer",
      image: "/images/atlassian.jpg",
      description: (
        <div className="space-y-4">
          <div>
            <h3 className="text-md font-bold text-gray-300">Measurement & Experimentation Platform (MEP)</h3>
            <p className="text-gray-400">
              I helped build scalable <span className="font-medium text-blue-400">experimentation tooling</span> that
              enabled product teams to make <span className="font-medium text-blue-400">data-driven decisions</span>{" "}
              across Atlassian. Integrating with <span className="font-medium text-blue-400">Statsig</span> and internal
              systems like Switcheroo, we streamlined the rollout, tracking, and analysis of feature flags and
              experiments across frontend and backend services.
            </p>
          </div>

          <div>
            <h2 className="text-md font-bold text-gray-300">Atlassian Disaster Recovery (ADR)</h2>
            <p className="text-gray-400">
              I led automation efforts for disaster recovery across AWS, securing over{" "}
              <span className="font-medium text-blue-400">20 petabytes</span> of media data and more than{" "}
              <span className="font-medium text-blue-400">20 billion objects</span> in Amazon S3. I developed automated
              systems using AWS Lambda to enforce recovery settings such as point-in-time recovery and continuous
              backups for services like DynamoDB and RDS, remediating misconfigurations in real time.
            </p>
          </div>
        </div>
      ),
      tech: [
        <SiAmazon title="AWS" />,
        <SiDocker title="Docker" />,
        <SiPostgresql title="PostgreSQL" />,
        <SiAmazondynamodb title="DynamoDB" />,
        <SiGraphql title="GraphQL" />,
        <SiAwslambda title="AWS Lambda" />,
        <SiNodedotjs title="NodeJS" />,
        <SiGoogleanalytics title="Statsig" />,
        <SiRocket title="Launch Darkly" />,
        <SiTypescript title="TypeScript" />,
        <SiReact title="React" />,
        <SiTailwindcss title="Tailwind" />,
        <SiJest title="Jest" />,
        <SiGit title="Git" />,
      ],
    },
    {
      date: "Feb 2019 – Jul 2021",
      title: "VGW – Software Engineer",
      image: "/images/vgw.jpg",
      description: (
        <div>
          <p className="text-gray-400">
            At VGW, I led end-to-end feature development for{" "}
            <span className="font-medium text-blue-400">Chumba Casino</span>, a high-traffic social gaming platform
            generating millions in daily revenue. My role required close collaboration with stakeholders and a strong
            understanding of domain-driven design and{" "}
            <span className="font-medium text-blue-400">microservice architecture</span>, supporting the company’s shift
            away from a monolithic system.
          </p>
          <p className="text-gray-400">
            I implemented key features such as <span className="font-medium text-blue-400">phone verification</span> to
            improve platform security, and an <span className="font-medium text-blue-400">in-product messaging</span>{" "}
            system that empowered the marketing team to deliver targeted user notifications.
          </p>
        </div>
      ),
      tech: [
        <SiAmazon title="AWS" />,
        <SiWordpress title="Wordpress" />,
        <SiPulumi title="Pulumi" />,
        <SiPostgresql title="PostgreSQL" />,
        <SiNodedotjs title="NodeJS" />,
        <SiTypescript title="TypeScript" />,
        <SiReact title="React" />,
        <SiTailwindcss title="Tailwind" />,
        <SiSass title="Sass" />,
        <SiRedux title="Redux" />,
        <SiJest title="Jest" />,
        <SiGit title="Git" />,
      ],
    },
    {
      date: "Nov 2017 – Feb 2019",
      title: "Hexagon Mining – Junior Software Engineer",
      image: "/images/hexagon_featured.webp",
      description: (
        <div>
          <p className="text-gray-400">
            At Hexagon Mining, I contributed to the{" "}
            <span className="font-medium text-blue-400">in-house OpenGL rendering engine</span> powering the xViewer in
            MinePlan 3D, a flagship geological modeling tool. I implemented multiple viewers to render different
            geometry perspectives simultaneously — a feature that significantly improved usability for geologists and
            engineers. Alongside this, I collaborated with senior developers to{" "}
            <span className="font-medium text-blue-400">optimize rendering performance</span> and enhance the overall
            user experience.
          </p>
        </div>
      ),
      tech: [
        <SiOpengl title="OpenGL" />,
        <SiCplusplus title="C++" />,
        <SiC title="C" />,
        <SiSharp title="C#" />,
        <SiSubversion title="Subversion" />,
      ],
    },
  ]

  return (
    <section className="bg-base-200 flex flex-col items-center space-y-10 py-10">
      <motion.h2
        className="mb-2 text-4xl font-bold dark:text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Experience
      </motion.h2>

      <motion.p
        className="mt-6 mb-12 text-lg text-gray-400 dark:text-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          },
        }}
      >
        From building software to hiking across continents — here’s my journey so far.
      </motion.p>

      {experiences.map((exp, index) => (
        <div key={index} className="w-full max-w-7xl px-4">
          <div className="card md:card-side bg-base-100 flex w-full flex-col shadow-sm">
            <figure className="h-64 w-full shrink-0 md:h-auto md:w-64">
              <img src={exp.image} alt={exp.title} className="h-full w-full object-cover" />
            </figure>
            <div className="card-body p-4 md:p-6">
              <div className="mb-3">
                <div className="text-md text-base-content font-bold">{exp.title}</div>
                <time className="block text-sm text-gray-500">{exp.date}</time>
              </div>
              {exp.description}
              <TechIcons icons={exp.tech} />
            </div>
            {exp.footer && <div className="card-footer bg-base-100 border-t-0 p-4 md:p-6">{exp.footer}</div>}
          </div>
        </div>
      ))}
    </section>
  )
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}
