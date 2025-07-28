import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Bot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Inteligente",
      description: "Plataforma de vendas online com IA para recomendações personalizadas",
      tech: ["Bubble", "Supabase", "n8n"],
      category: "E-commerce",
      features: ["Pagamentos automatizados", "Chatbot IA", "Analytics avançados"],
      hasAI: true,
    },
    {
      title: "App de Produtividade",
      description: "Aplicativo mobile para gestão de tarefas com automações inteligentes",
      tech: ["FlutterFlow", "Dart", "Supabase"],
      category: "Mobile App",
      features: ["Sincronização em tempo real", "Notificações inteligentes", "UI/UX moderna"],
      hasAI: false,
    },
    {
      title: "Sistema de Análise de Dados",
      description: "Dashboard interativo para análise de métricas de negócio",
      tech: ["Python", "Streamlit", "Langchain"],
      category: "Data Analytics",
      features: ["Visualizações dinâmicas", "Relatórios automáticos", "Integração IA"],
      hasAI: true,
    },
    {
      title: "Automação de Processos",
      description: "Sistema de automação para workflows empresariais",
      tech: ["n8n", "Python", "Agno"],
      category: "Automation",
      features: ["Workflows visuais", "Integrações múltiplas", "Monitoramento"],
      hasAI: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções digitais inovadoras desenvolvidas com as mais modernas tecnologias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} variant="glass" className="group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.hasAI && (
                        <Bot className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {project.category}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Funcionalidades:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline_gradient" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button variant="gradient" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;