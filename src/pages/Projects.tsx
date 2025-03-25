
import { useState } from 'react';
import AnimatedText from '../components/AnimatedText';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

const technologies = [
  "Todos",
  "React",
  "Node.js",
  "React Native",
  "Angular",
  "Next.js",
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("Todos");
  
  const filteredProjects = filter === "Todos" 
    ? projectsData 
    : projectsData.filter(project => project.technologies.includes(filter));

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16">
          <AnimatedText className="text-center">
            <h1 className="mb-4">Meus Projetos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore alguns dos projetos que desenvolvi para clientes de diversos segmentos.
            </p>
          </AnimatedText>
        </section>
        
        {/* Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === tech
                    ? 'bg-purple-600 text-white'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </section>
        
        {/* Projects Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum projeto encontrado com essa tecnologia.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
