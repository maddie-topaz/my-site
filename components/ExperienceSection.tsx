import { FaBriefcase } from "react-icons/fa";
import type { ReactElement } from "react";

type Experience = {
  date: string;
  title: string;
  image: string;
  description: ReactElement;
};

export const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      date: "May 2025 – Current",
      title: "Elastik – Senior Software Engineer",
      image: "/images/elastik.png",
      description: (
        <div>
          <p>
            Automated recovery for critical AWS data. Ensured compliance with RTOs and RPOs, safeguarding over{" "}
            <strong>20PB</strong> of user-generated content.
          </p>
        </div>
      ),
    },
    {
      date: "Nov 2022 – Mar 2024",
      title: "Atlassian – Software Engineer ",
      image: "/images/atlassian.jpg",
      description: (
        <div>
          <ul className="list-disc pl-4">
            <li>Built scalable experimentation tooling for Statsig/Switcheroo.</li>
            <li>Improved product analytics across teams.</li>
          </ul>
        </div>
      ),
    },
    {
      date: "Feb 2019 – Jul 2021",
      title: "VGW – Software Engineer",
      image: "/images/vgw.jpg",
      description: (
        <div>
          <p>
            Led feature development for <strong>Chumba Casino</strong>, managing full project lifecycles and cloud infrastructure using:
          </p>
          <ul className="list-disc pl-4">
            <li>AWS</li>
            <li>Pulumi</li>
            <li>CI/CD pipelines</li>
          </ul>
        </div>
      ),
    },
    {
      date: "Nov 2017 – Feb 2019",
      title: "Hexagon Mining - Junior Software Engineer",
      image: "/images/hexagon_featured.webp",
      description: (
        <div>
          <p>
            Developed and optimized features for the OpenGL rendering engine powering <strong>MinePlan 3D</strong>, enhancing
            visualization performance and reliability.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="flex flex-col items-center space-y-10 py-10 bg-base-200">
      {experiences.map((exp, index) => (
        <div key={index} className="w-full max-w-5xl">
          <div className="flex items-center justify-center mb-2">
            <FaBriefcase className="h-6 w-6 text-primary" />
          </div>
          <time className="block text-center font-mono italic mb-1">{exp.date}</time>
          <div className="text-center text-lg font-black mb-4">{exp.title}</div>
          <div className="card card-side bg-base-100 shadow-sm w-full">
            <figure className="w-48 h-48 shrink-0">
              <img src={exp.image} alt={exp.title} className="object-cover w-full h-full" />
            </figure>
            <div className="card-body">{exp.description}</div>
          </div>
        </div>
      ))}
    </section>
  );
};
