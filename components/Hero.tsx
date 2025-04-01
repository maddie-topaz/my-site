import { AnimatedTerminal } from "components/AnimatedTerminal"

export const Hero = () => {
  return (
    <section className="hero bg-base-200 min-h-screen px-4">
      <div className="hero-content flex-col gap-12 lg:flex-row-reverse lg:gap-24">
        <div className="flex w-full justify-center lg:w-1/2">
          <AnimatedTerminal />
        </div>
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h1 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
            <span className="text-primary">Hi</span> 👋 I'm Maddie
          </h1>
          <p className="text-primary-content animate-fade-in-up mb-8 text-xl font-medium opacity-0 md:text-2xl">
            Full-stack engineer with a <span className="font-bold">platform mindset</span> and a{" "}
            <span className="font-bold">DevOps heart</span>.
          </p>
          <div className="flex justify-center gap-4 lg:justify-start">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </button>
            <button
              className="btn btn-outline btn-lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
