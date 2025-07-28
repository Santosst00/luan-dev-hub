import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Telefone",
      value: "(11) 94744-3796",
      action: "tel:11947443796",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "luanfelipers12@gmail.com",
      action: "mailto:luanfelipers12@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Localização",
      value: "São Paulo, SP",
      action: null,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      label: "Horário",
      value: "Seg - Sex: 9h às 18h",
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Vamos Conversar?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato e vamos discutir seu próximo projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} variant="elevated" className="group">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-gradient-accent rounded-lg text-primary group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          {item.action ? (
                            <a
                              href={item.action}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card variant="gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Por que escolher nossos serviços?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Soluções personalizadas para suas necessidades específicas</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Integração de IA para automatização inteligente</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Suporte contínuo e manutenção dos projetos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Entrega rápida e comunicação transparente</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <Card variant="glass" className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Pronto para começar?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Transforme suas ideias em soluções digitais poderosas. Entre em contato agora 
                  e receba uma consultoria gratuita sobre seu projeto.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    variant="gradient" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/5511947443796', '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Conversar no WhatsApp
                  </Button>
                  
                  <Button 
                    variant="outline_gradient" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('mailto:luanfelipers12@gmail.com', '_blank')}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar Email
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold mb-3">Tipos de Projeto:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="px-3 py-2 bg-accent/50 rounded-md text-center">Sites & Apps</span>
                    <span className="px-3 py-2 bg-accent/50 rounded-md text-center">E-commerce</span>
                    <span className="px-3 py-2 bg-accent/50 rounded-md text-center">Automação</span>
                    <span className="px-3 py-2 bg-accent/50 rounded-md text-center">Agentes IA</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;