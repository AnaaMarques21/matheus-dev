
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink, Globe, Users } from 'lucide-react';
import { projectsData, Project } from '../data/projects';
import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call with a timeout
    const timer = setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === Number(id));
      setProject(foundProject || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-muted rounded mb-4"></div>
          <div className="h-4 w-32 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Projeto não encontrado</h1>
          <p className="text-muted-foreground mb-8">
            O projeto que você está procurando não existe.
          </p>
          <Link to="/projects" className="btn-animated">
            Voltar para Projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/projects" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft size={16} className="mr-2" /> Voltar para Projetos
        </Link>
        
        <div className="glass-panel rounded-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-80 md:h-96 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
              <AnimatedText>
                <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
              </AnimatedText>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project Info */}
              <div className="md:col-span-2">
                <AnimatedText>
                  <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
                  <p className="text-muted-foreground mb-6">
                    {project.fullDescription}
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4">Principais Funcionalidades</h3>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold mb-4">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-sm bg-purple-800/30 text-purple-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.demoUrl && (
                    <Button 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Ver Demonstração <ExternalLink size={16} className="ml-2" />
                    </Button>
                  )}
                </AnimatedText>
              </div>
              
              {/* Project Details Sidebar */}
              <div>
                <AnimatedText className="glass-panel rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-6">Detalhes do Projeto</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Calendar size={18} className="mr-2 text-purple-400" />
                        <span className="text-sm uppercase tracking-wider">Ano</span>
                      </div>
                      <p>{project.year}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Users size={18} className="mr-2 text-purple-400" />
                        <span className="text-sm uppercase tracking-wider">Cliente</span>
                      </div>
                      <p>{project.clientType}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Globe size={18} className="mr-2 text-purple-400" />
                        <span className="text-sm uppercase tracking-wider">Tipo</span>
                      </div>
                      <p>{project.title.split(' ')[0]}</p>
                    </div>
                  </div>
                </AnimatedText>
                
                <AnimatedText className="mt-6">
                  <div className="glass-panel rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Interessado em um projeto similar?</h3>
                    <p className="text-muted-foreground mb-4">
                      Vamos discutir como posso ajudar a desenvolver uma solução personalizada para o seu negócio.
                    </p>
                    <Button 
                      href="/contact" 
                      variant="outline"
                      className="w-full"
                    >
                      Entre em Contato
                    </Button>
                  </div>
                </AnimatedText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
