"use client";

export const AboutMe = () => {
    return (
        <section id="about" className="dark:bg-gray-900 py-8 sm:py-16">
            <div className="mx-auto max-w-(--breakpoint-xl) px-4 lg:px-6">
                <h2 className="mb-8 text-3xl font-bold text-center dark:text-white">About Me</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                            I'm Maddie — a software engineer with a background in full-stack development, cloud architecture, and real-time graphics programming.
                            I always wanted to be a programmer, but for a long time I assumed you had to be a maths genius to make it in tech.
                            I started in business admin, until I found myself constantly peeking over at the programming coursework.
                            A tech lecturer noticed, handed me a brochure, and suggested I switch. I did — and I haven’t looked back since.
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                            Since then, I’ve worked across the stack — from designing OpenGL rendering engines to building experimentation platforms and disaster recovery systems at Atlassian.
                            I’ve led end-to-end feature development for high-traffic products like Chumba Casino and built systems to safeguard petabytes of user-generated content in AWS.
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                            Over time, my passion has gravitated toward developer experience, tooling, and DevOps.
                            Books like <em>Accelerate</em> and <em>The Phoenix Project</em> didn’t just teach me about delivery practices — they helped me rethink what great engineering looks like.
                            I began to see software delivery as a living system: shaped by feedback, guided by data, and deeply influenced by the tools we adopt.
                            I stopped seeing culture as a starting point and started seeing it as something we create through the systems we build together.
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                            Today, I build with a platform mindset and a DevOps heart — focused on clarity, resilience, and full-stack responsibility from infrastructure to interface.
                            My core stack includes TypeScript, Node.js, React, PostgreSQL, AWS, Docker, and Pulumi.
                            Whether I’m building experimentation frameworks, automation pipelines, or UI tooling, I care deeply about enabling teams to ship software with confidence and purpose.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-xl font-bold dark:text-white">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'AWS', 'Docker'].map((skill) => (
                                <span key={skill} className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};