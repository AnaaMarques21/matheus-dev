
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  className?: string;
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  image, 
  technologies,
  className = '' 
}: ProjectCardProps) => {
  return (
    <AnimatedText className={`glass-panel rounded-lg overflow-hidden group ${className}`}>
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-muted-foreground line-clamp-3 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-purple-800/30 text-purple-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/projects/${id}`}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
        >
          Ver detalhes <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </AnimatedText>
  );
};

export default ProjectCard;
