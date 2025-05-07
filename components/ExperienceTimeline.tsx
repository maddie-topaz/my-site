import { FaBriefcase } from "react-icons/fa"

export const ExperienceTimeline = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <FaBriefcase className="h-5 w-5 text-current" />
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">Nov 2017 – Feb 2019</time>
          <div className="text-lg font-black">Hexagon Mining</div>
          Developed and optimized features for the OpenGL rendering engine powering MinePlan 3D, enhancing visualization
          performance and reliability.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <FaBriefcase className="h-5 w-5 text-current" />
        </div>
        <div className="timeline-end md:mb-10">
          <time className="font-mono italic">Feb 2019 – Dec 2020</time>
          <div className="text-lg font-black">VGW – Associate Engineer</div>
          Worked on Chumba Casino’s marketing site and later joined the platform team. Delivered major features using
          React, TypeScript, and Docker.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <FaBriefcase className="h-5 w-5 text-current" />
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">Dec 2020 – Jul 2021</time>
          <div className="text-lg font-black">VGW – Engineer</div>
          Led feature development for Chumba Casino, managing full project lifecycles and cloud infrastructure using
          AWS, Pulumi, and CI/CD pipelines.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <FaBriefcase className="h-5 w-5 text-current" />
        </div>
        <div className="timeline-end md:mb-10">
          <time className="font-mono italic">Aug 2021 – Nov 2022</time>
          <div className="text-lg font-black">Atlassian – Software Engineer (P3)</div>
          Automated recovery for critical AWS data. Ensured compliance with RTOs and RPOs, safeguarding over 20PB of
          user-generated content.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <FaBriefcase className="h-5 w-5 text-current" />
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">Nov 2022 – Mar 2024</time>
          <div className="text-lg font-black">Atlassian – Software Engineer (P4)</div>
          Built scalable experimentation tooling for Statsig/Switcheroo. Improved product analytics, empowered
          data-driven decision-making across teams.
        </div>
      </li>
    </ul>
  )
}
