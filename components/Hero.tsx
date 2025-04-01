import { AnimatedTerminal } from "components/AnimatedTerminal";

export const Hero = () => {
  return (
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
            <button 
  className="btn btn-primary btn-lg" 
  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
>
  View Projects
</button>
            <button 
  className="btn btn-outline btn-lg" 
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
>
  Contact Me
</button>
          </div>
        </div>
      </div>
    </section>
  );
};