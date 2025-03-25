
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import AnimatedText from './AnimatedText';
import { projectsData } from '../data/projects';
import Button from './Button';
import { Link } from 'react-router-dom';

const ProjectCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      setCanScrollLeft(carouselRef.current.scrollLeft > 0);
      setCanScrollRight(
        carouselRef.current.scrollLeft <
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      checkScrollButtons();
      
      return () => {
        carousel.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const amount = carouselRef.current.clientWidth * 0.7;
      const scrollAmount = direction === 'left' ? -amount : amount;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
        <AnimatedText>
          <h2 className="text-3xl font-bold">Projetos Recentes</h2>
          <p className="text-muted-foreground mt-2">
            Alguns dos meus trabalhos mais recentes
          </p>
        </AnimatedText>
        
        <Link to="/projects">
          <Button variant="outline" size="sm">
            Ver todos
          </Button>
        </Link>
      </div>
      
      <div className="relative group">
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-none gap-6 pb-4 scroll-smooth snap-x snap-mandatory"
        >
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="min-w-[300px] sm:min-w-[360px] md:min-w-[400px] snap-start"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <button 
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-card rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-0 ${!canScrollLeft ? 'hidden' : ''}`}
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-label="Scrollar para esquerda"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-card rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-0 ${!canScrollRight ? 'hidden' : ''}`}
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          aria-label="Scrollar para direita"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
