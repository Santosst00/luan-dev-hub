import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO da TechStart",
      content: "O Luan desenvolveu nossa plataforma e-commerce com uma eficiência impressionante. A integração com IA para recomendações de produtos aumentou nossas vendas em 40%.",
      rating: 5,
      project: "E-commerce Inteligente",
    },
    {
      name: "Carlos Oliveira",
      role: "Diretor de Operações",
      content: "A automação de processos criada pelo Luan revolucionou nossa empresa. Conseguimos reduzir tempo de trabalho manual em 60% e eliminar erros operacionais.",
      rating: 5,
      project: "Sistema de Automação",
    },
    {
      name: "Ana Costa",
      role: "Fundadora da DataInsights",
      content: "O dashboard de análise desenvolvido é fantástico! Interface intuitiva e insights poderosos que nos ajudam a tomar decisões estratégicas baseadas em dados.",
      rating: 5,
      project: "Sistema de Análise",
    },
    {
      name: "Pedro Santos",
      role: "Product Manager",
      content: "Trabalhar com o Luan foi uma experiência excepcional. Ele entende profundamente as necessidades do negócio e entrega soluções que realmente fazem a diferença.",
      rating: 5,
      project: "App Mobile",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Depoimentos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O que nossos clientes dizem sobre nossos projetos e soluções
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="glass" className="relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary mt-1">{testimonial.project}</p>
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {renderStars(testimonial.rating)}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                15+
              </div>
              <p className="text-muted-foreground">Projetos Concluídos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-muted-foreground">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                2 Anos
              </div>
              <p className="text-muted-foreground">de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;