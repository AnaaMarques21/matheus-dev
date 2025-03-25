
import { Code, Database, Globe, LineChart, Smartphone, Zap } from 'lucide-react';

export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    icon: <Globe size={24} />,
    title: "Websites & Landing Pages",
    description: "Desenvolvimento de sites institucionais e landing pages de alta conversão, otimizados para SEO e com design responsivo."
  },
  {
    icon: <Database size={24} />,
    title: "Sistemas CRM & ERP",
    description: "Desenvolvimento de sistemas de gestão personalizados para automatizar e otimizar processos empresariais."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Banco de Dados",
    description: "Modelagem, otimização e gestão de bancos de dados escaláveis e seguros, garantindo alta performance e integridade dos dados."
  },
  {
    icon: <LineChart size={24} />,
    title: "Consultoria em TI",
    description: "Análise e recomendação das melhores soluções tecnológicas para otimizar processos e reduzir custos."
  },
  {
    icon: <Code size={24} />,
    title: "Desenvolvimento Full-Stack",
    description: "Criação completa de soluções web, do back-end ao front-end, utilizando as tecnologias mais modernas do mercado."
  },
  {
    icon: <Zap size={24} />,
    title: "Automação de Processos",
    description: "Implementação de soluções para automatizar tarefas repetitivas, aumentando a produtividade e reduzindo erros."
  }
];
