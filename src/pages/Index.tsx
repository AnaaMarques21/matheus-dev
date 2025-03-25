
import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Code, Database, Smile } from 'lucide-react';
import Button from '../components/Button';
import AnimatedText from '../components/AnimatedText';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services';
import ProjectCarousel from '../components/ProjectCarousel';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <AnimatedText 
            className={`transition-all duration-1000 delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h1 className="text-center max-w-4xl mx-auto leading-tight">
              Desenvolvimento de <span className="text-gradient">Soluções Tecnológicas</span> para o seu negócio
            </h1>
          </AnimatedText>
          
          <AnimatedText 
            className={`mt-6 text-center text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Transformo ideias em soluções tecnológicas que impulsionam o crescimento da sua empresa, com foco em usabilidade, performance e resultados.
          </AnimatedText>
          
          <AnimatedText 
            className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <Button 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              size="lg"
            >
              Agendar Reunião <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToContent()}
            >
              Conhecer Serviços
            </Button>
          </AnimatedText>
          
          {/* Scroll Indicator */}
          <div 
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => scrollToContent()}
          >
            <ChevronDown size={32} className="text-purple-400" />
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-3xl font-bold">Meus Serviços</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Desenvolvimento de soluções tecnológicas personalizadas para atender às necessidades específicas do seu negócio.
            </p>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                className={`animate-delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="glass-panel rounded-xl p-8 md:p-12">
            <AnimatedText className="text-center mb-12">
              <h2 className="text-3xl font-bold">Experiência & Resultados</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Desenvolvimento de soluções que geram resultados para empresas de diversos segmentos.
              </p>
            </AnimatedText>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedText className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <Code size={32} className="text-purple-400" />
                </div>
                <div className="text-4xl font-bold text-gradient">2+ Anos</div>
                <div className="text-muted-foreground mt-2">De experiência em desenvolvimento</div>
              </AnimatedText>
              
              <AnimatedText className="text-center animate-delay-200">
                <div className="flex justify-center items-center mb-4">
                  <Database size={32} className="text-purple-400" />
                </div>
                <div className="text-4xl font-bold text-gradient">30+</div>
                <div className="text-muted-foreground mt-2">Projetos entregues</div>
              </AnimatedText>
              
              <AnimatedText className="text-center animate-delay-400">
                <div className="flex justify-center items-center mb-4">
                  <Smile size={32} className="text-purple-400" />
                </div>
                <div className="text-4xl font-bold text-gradient">25+</div>
                <div className="text-muted-foreground mt-2">Clientes satisfeitos</div>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ProjectCarousel />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-violet-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <AnimatedText className="text-center">
                <h2 className="text-3xl font-bold max-w-2xl mx-auto">
                  Pronto para transformar sua ideia em realidade?
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Vamos discutir seu projeto e encontrar a melhor solução tecnológica para o seu negócio.
                </p>
                
                <div className="mt-10 flex justify-center">
                  <Button 
                    href="https://wa.me/5561981576975" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    size="lg"
                  >
                    Agendar uma Reunião <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
