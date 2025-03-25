
import { useState } from 'react';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Here you would normally send the form data to a server
      console.log('Form submitted:', formData);
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16">
          <AnimatedText className="text-center">
            <h1 className="mb-4">Entre em Contato</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vamos discutir como posso ajudar a desenvolver a solução ideal para o seu negócio.
            </p>
          </AnimatedText>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedText>
            <div className="glass-panel rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-card border border-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-card border border-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                    placeholder="seu-email@exemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-card border border-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md bg-card border border-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all resize-none"
                    placeholder="Descreva seu projeto ou necessidade..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>Enviar Mensagem <Send size={16} className="ml-2" /></>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedText>
          
          {/* Contact Info */}
          <div>
            <AnimatedText>
              <div className="glass-panel rounded-lg p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-purple-800/30 p-3 text-purple-400 mr-4">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/5561981576975" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-purple-400 transition-colors"
                      >
                        (61) 98157-6975
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-purple-800/30 p-3 text-purple-400 mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Telefone</h3>
                      <a 
                        href="tel:+5500000000000" 
                        className="text-muted-foreground hover:text-purple-400 transition-colors"
                      >
                        (61) 98157-6975
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-purple-800/30 p-3 text-purple-400 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a 
                        href="mailto:contato@devportfolio.com" 
                        className="text-muted-foreground hover:text-purple-400 transition-colors"
                      >
                        matheus.vpereira@a.ucb.br
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedText>
            
            <AnimatedText className="animate-delay-200">
              <div className="glass-panel rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Agende uma Reunião</h2>
                <p className="text-muted-foreground mb-6">
                  Prefere conversar diretamente? Agende uma reunião comigo via WhatsApp para discutirmos seu projeto em detalhes.
                </p>
                <Button 
                  href="https://wa.me/5561981576975" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  Agendar Reunião <MessageSquare size={16} className="ml-2" />
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
