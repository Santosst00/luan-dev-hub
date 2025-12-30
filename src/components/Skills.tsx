import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  Layers, 
  Smartphone, 
  Database, 
  Workflow, 
  Code, 
  Github,
  Globe,
  Link,
  BarChart3
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "Bubble",
      icon: <Layers className="h-8 w-8" />,
      description: "Desenvolvimento no-code para aplicações web complexas",
      level: 90,
    },
    {
      name: "FlutterFlow",
      icon: <Smartphone className="h-8 w-8" />,
      description: "Criação de apps mobile nativos de forma visual",
      level: 85,
    },
    {
      name: "Supabase",
      icon: <Database className="h-8 w-8" />,
      description: "Backend-as-a-Service com PostgreSQL e autenticação",
      level: 88,
    },
    {
      name: "n8n",
      icon: <Workflow className="h-8 w-8" />,
      description: "Automação de workflows e integrações entre sistemas",
      level: 92,
    },
    {
      name: "Javscript",
      icon: <Code className="h-8 w-8" />,
      description: "Linguagem de programação",
      level: 80,
    },
    {
      name: "Python",
      icon: <Github className="h-8 w-8" />,
      description: "Desenvolvimento backend, automações e análise de dados",
      level: 85,
    },
    {
      name: "Agno",
      icon: <Globe className="h-8 w-8" />,
      description: "Plataforma para desenvolvimento de agentes inteligentes",
      level: 75,
    },
    {
      name: "Langchain",
      icon: <Link className="h-8 w-8" />,
      description: "Framework para aplicações com Large Language Models",
      level: 78,
    },
    {
      name: "Streamlit",
      icon: <BarChart3 className="h-8 w-8" />,
      description: "Criação rápida de aplicações web para ciência de dados",
      level: 82,
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Competências Técnicas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Domínio de tecnologias modernas para desenvolvimento completo de soluções digitais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} variant="elevated" className="group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-accent rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <CardTitle className="text-lg">{skill.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Proficiência</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card variant="gradient" className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Agentes de Inteligência Artificial
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Especializado no desenvolvimento de agentes IA personalizados para automação 
                de processos, análise de dados e experiências de usuário inteligentes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-semibold">Processamento de Linguagem</h4>
                  <p className="text-muted-foreground">Chatbots e assistentes virtuais</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Análise Preditiva</h4>
                  <p className="text-muted-foreground">Modelos de machine learning</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Automação Inteligente</h4>
                  <p className="text-muted-foreground">Workflows com tomada de decisão</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;