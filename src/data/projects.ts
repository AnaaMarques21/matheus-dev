
export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  clientType: string;
  year: number;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "CRM para Imobiliária",
    description: "Sistema completo de gestão para imobiliárias, integrando atendimento, vendas e gestão de imóveis.",
    fullDescription: "Desenvolvimento de um sistema completo para gestão imobiliária, permitindo controle de leads, agendamentos, visitas e acompanhamento de vendas. O sistema inclui dashboards personalizados, relatórios detalhados e automações de tarefas para aumentar a produtividade da equipe.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
    features: [
      "Dashboard interativo com métricas de vendas",
      "Gestão de leads e funil de vendas",
      "Cadastro e busca de imóveis",
      "Agendamento de visitas",
      "Automação de e-mails e notificações",
      "Relatórios personalizados"
    ],
    clientType: "Imobiliária de médio porte",
    year: 2023,
    demoUrl: "https://demo.com/crm-imobiliaria"
  },
  {
    id: 2,
    title: "ERP para Distribuidora",
    description: "Sistema integrado para controle de estoque, vendas, logística e financeiro de uma distribuidora de alimentos.",
    fullDescription: "Desenvolvimento de um ERP completo para uma distribuidora de alimentos, integrando módulos de estoque, vendas, logística, financeiro e RH. O sistema permite um controle total da operação, reduzindo custos e aumentando a eficiência operacional.",
    image: "https://images.unsplash.com/photo-1566232392379-b30af98cc2a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    technologies: ["Angular", "Java Spring Boot", "MySQL", "Docker", "AWS"],
    features: [
      "Controle de estoque em tempo real",
      "Gestão de pedidos e faturamento",
      "Roteirização e logística",
      "Fluxo de caixa e DRE",
      "Gestão de fornecedores",
      "App mobile para vendedores externos"
    ],
    clientType: "Distribuidora de alimentos",
    year: 2022,
    demoUrl: "https://demo.com/erp-distribuidora"
  },
  {
    id: 3,
    title: "E-commerce para Loja de Móveis",
    description: "Loja virtual completa para uma empresa de móveis planejados, com sistema de orçamentos personalizados.",
    fullDescription: "Desenvolvimento de uma plataforma de e-commerce personalizada para uma loja de móveis planejados. O sistema inclui visualização 3D dos produtos, sistema de orçamentos personalizados e integração com meios de pagamento e logística.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    technologies: ["Next.js", "Strapi CMS", "Stripe", "MongoDB", "ThreeJS"],
    features: [
      "Catálogo de produtos com visualização 3D",
      "Sistema de orçamentos personalizados",
      "Pagamentos online",
      "Área do cliente",
      "Gestão de pedidos",
      "Integração com transportadoras"
    ],
    clientType: "Loja de móveis planejados",
    year: 2023,
    demoUrl: "https://demo.com/ecommerce-moveis"
  },
  {
    id: 4,
    title: "Aplicativo para Clínica Médica",
    description: "Sistema de agendamento online, prontuário eletrônico e gestão completa para uma clínica multiespecialidades.",
    fullDescription: "Desenvolvimento de um sistema completo para uma clínica médica multiespecialidades, integrando agendamento online, prontuário eletrônico, faturamento e gestão financeira. O sistema permite uma gestão eficiente da clínica, melhorando a experiência de pacientes e profissionais.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React Native", "Node.js", "Firebase", "MongoDB", "Express"],
    features: [
      "Agendamento online integrado ao Google Calendar",
      "Prontuário eletrônico personalizado por especialidade",
      "Prescrição digital",
      "Controle financeiro e faturamento",
      "App para pacientes",
      "Integração com laboratórios e convênios"
    ],
    clientType: "Clínica médica multiespecialidades",
    year: 2022
  }
];
