import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Sobre Mim
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Floating Image Card */}
          <div className="lg:w-1/3 relative">
            <Card className="variant-glass hover:shadow-glow transition-all duration-500 transform hover:scale-105 hover:rotate-1 floating-card">
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/ba715b38-9f99-4d91-a33b-f362b67ab6c2.png" 
                    alt="Luan Santos" 
                    className="w-full h-auto object-cover rounded-lg shadow-card"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg"></div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Content */}
          <div className="lg:w-2/3 space-y-6">
            <Card className="variant-glass p-8 floating-card">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-primary">Desenvolvedor Web & IA</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Olá! Sou Luan Santos, desenvolvedor web especializado em criar soluções inovadoras 
                  utilizando tecnologias modernas e inteligência artificial. Com experiência em 
                  desenvolvimento de aplicações web e mobile, busco sempre entregar projetos que 
                  combinam funcionalidade, design atrativo e performance otimizada.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Minha paixão está em transformar ideias em realidade digital, utilizando ferramentas 
                  como Bubble, FlutterFlow, Supabase e tecnologias de IA para criar experiências 
                  únicas e eficientes para os usuários.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-primary/10 px-4 py-2 rounded-full">
                    <span className="text-primary font-medium">Desenvolvimento Web</span>
                  </div>
                  <div className="bg-primary/10 px-4 py-2 rounded-full">
                    <span className="text-primary font-medium">Inteligência Artificial</span>
                  </div>
                  <div className="bg-primary/10 px-4 py-2 rounded-full">
                    <span className="text-primary font-medium">Apps Mobile</span>
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

export default About;