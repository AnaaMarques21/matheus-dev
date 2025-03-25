
import { Calendar, Code, Eye, FileText, GraduationCap, Heart, User } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16">
          <AnimatedText className="text-center">
            <h1 className="mb-4">Sobre Mim</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça um pouco mais sobre minha jornada, formação e paixão pelo desenvolvimento de software.
            </p>
          </AnimatedText>
        </section>
        
        {/* Profile Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedText className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-4">Programador Full-Stack</h2>
              <p className="text-muted-foreground mb-6">
                Sou um desenvolvedor full-stack apaixonado por criar soluções tecnológicas que impactam positivamente negócios e pessoas. Atualmente estou no terceiro semestre de Análise e Desenvolvimento de Sistemas na Universidade Católica de Brasília.
              </p>
              <p className="text-muted-foreground mb-6">
                Além da formação em tecnologia, concluí um curso profissionalizante de Administração com 2 anos de duração em 2021, o que me proporciona uma visão única que combina conhecimentos técnicos e de gestão.
              </p>
              <p className="text-muted-foreground">
                Com 21 anos, ofereço soluções tecnológicas personalizadas para empresas de diversos segmentos, com foco em melhorar processos, aumentar o tráfego de pessoas e otimizar o atendimento comercial.
              </p>
              
              <div className="mt-8">
                <Button 
                  href="/contact" 
                  size="lg"
                >
                  Entre em Contato
                </Button>
              </div>
            </AnimatedText>
            
            <AnimatedText className="order-1 md:order-2 flex justify-center">
              <div className="photo-frame w-64 h-64 md:w-80 md:h-80">
                <img 
                  src="https://i.imgur.com/Cc5wXNh.png" 
                  alt="Foto de perfil"
                  className="w-full h-full object-cover"
                />
                
                {/* Decorative elements around the photo */}
                <div className="absolute -top-3 -right-3 bg-purple-600 rounded-full p-2 shadow-lg animate-pulse">
                  <Code size={20} className="text-white" />
                </div>
                <div className="absolute -bottom-3 -left-3 bg-purple-600 rounded-full p-2 shadow-lg animate-pulse">
                  <Eye size={20} className="text-white" />
                </div>
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 bg-purple-600 rounded-full p-2 shadow-lg animate-pulse">
                  <Heart size={20} className="text-white" />
                </div>
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 bg-purple-600 rounded-full p-2 shadow-lg animate-pulse">
                  <User size={20} className="text-white" />
                </div>
              </div>
            </AnimatedText>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="mb-20">
          <AnimatedText className="text-center mb-12">
            <h2 className="text-3xl font-bold">Minha Jornada</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Um pouco da minha trajetória acadêmica e profissional.
            </p>
          </AnimatedText>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-purple-600/30 transform md:-translate-x-px"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <AnimatedText className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold">Análise e Desenvolvimento de Sistemas</h3>
                  <p className="text-purple-400 mb-2">2025 - Atual</p>
                  <p className="text-muted-foreground">
                    Cursando o terceiro semestre na Universidade Católica de Brasília, com foco em desenvolvimento web e sistemas.
                  </p>
                </div>
                
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-0 md:left-0 top-3 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center transform -translate-x-1/2 md:-translate-x-full md:-translate-x-4">
                    <GraduationCap size={16} className="text-white" />
                  </div>
                  <div className="pl-12 md:pl-0">
                    <div className="glass-panel p-6 rounded-lg">
                      <p className="font-medium">
                        Aprendendo tecnologias modernas de desenvolvimento, metodologias ágeis, banco de dados e boas práticas de programação.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedText>
              
              {/* Item 2 */}
              <AnimatedText className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="relative order-1">
                  <div className="absolute left-0 md:right-0 top-3 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center transform -translate-x-1/2 md:translate-x-1/2 md:translate-x-4">
                    <FileText size={16} className="text-white" />
                  </div>
                  <div className="pl-12 md:pl-0">
                    <div className="glass-panel p-6 rounded-lg">
                      <p className="font-medium">
                        Concluí o curso Assistente em Administrativo, adquirindo conhecimentos em gestão, finanças e marketing.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="order-2">
                  <h3 className="text-xl font-bold">Curso Técnico em Administração</h3>
                  <p className="text-purple-400 mb-2">2020 - 2022</p>
                  <p className="text-muted-foreground">
                    Formação técnica com duração de 2 anos, com foco em gestão empresarial e processos administrativos.
                  </p>
                </div>
              </AnimatedText>
              
              {/* Item 3 */}
              <AnimatedText className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold">Início da Carreira como Desenvolvedor</h3>
                  <p className="text-purple-400 mb-2">2024 - Atual</p>
                  <p className="text-muted-foreground">
                    Desenvolvimento de projetos para pequenos negocios de diversos segmentos, como CRMs, ERPs e landing pages.
                  </p>
                </div>
                
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-0 md:left-0 top-3 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center transform -translate-x-1/2 md:-translate-x-full md:-translate-x-4">
                    <Calendar size={16} className="text-white" />
                  </div>
                  <div className="pl-12 md:pl-0">
                    <div className="glass-panel p-6 rounded-lg">
                      <p className="font-medium">
                        Já desenvolvi mais de 30 projetos, utilizando tecnologias modernas como React, Node.js, React Native e muito mais.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section>
          <AnimatedText className="text-center mb-12">
            <h2 className="text-3xl font-bold">Habilidades</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Tecnologias e ferramentas que utilizo no dia a dia.
            </p>
          </AnimatedText>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "JavaScript", "TypeScript", "React", "Node.js", 
              "React Native", "HTML/CSS", "Tailwind CSS", "Express",
              "PostgreSQL", "MongoDB", "Firebase", "Git",
              "REST API", "GraphQL", "Docker", "AWS"
            ].map((skill, index) => (
              <AnimatedText 
                key={skill} 
                className={`glass-panel p-4 rounded-lg text-center hover:shadow-lg transition-all hover:-translate-y-1 animate-delay-${index % 5 * 100}`}
              >
                <span className="font-medium">{skill}</span>
              </AnimatedText>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
