"use client";

export const SkillsIcons = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: '⚛️', title: 'React Expert', description: 'Building performant UIs with React and Next.js. I specialize in creating reusable components with proper TypeScript typing and accessibility considerations.' },
            { icon: '📦', title: 'TypeScript', description: 'Type-safe code for better maintainability and developer experience. I leverage advanced TypeScript features to catch bugs at compile time and improve code quality.' },
            { icon: '☁️', title: 'Cloud Native', description: 'Scalable cloud architectures using AWS, GCP or Azure. I design systems that are resilient, cost-effective and can handle variable workloads.' },
            { icon: '🧪', title: 'Testing', description: 'Quality through comprehensive automated testing at all levels - unit, integration and end-to-end. I ensure test coverage while maintaining test maintainability.' },
            { icon: '🚢', title: 'DevOps', description: 'Experience building CI/CD pipelines and infrastructure as code. I automate deployments and monitoring to enable rapid, reliable software delivery.' },
            { icon: '🔄', title: 'Agile', description: 'Iterative development approach, delivering value early and often is core to how I build software. I facilitate effective collaboration through ceremonies like sprint planning and retrospectives.' }
          ].map((skill, index) => (
            <div key={index} className="card w-72 bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-20 h-20 rounded-full bg-base-200 flex items-center justify-center text-3xl mb-2">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold">{skill.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};