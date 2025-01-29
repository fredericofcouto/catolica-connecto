import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, BookOpen } from "lucide-react";

export const Events = () => {
  const events = [
    {
      title: "Festa do Padroeiro",
      date: "15 de Agosto",
      description: "Celebração especial com procissão e quermesse",
      icon: Users,
    },
    {
      title: "Retiro Espiritual",
      date: "20-22 de Agosto",
      description: "Momento de reflexão e oração para jovens",
      icon: BookOpen,
    },
    {
      title: "Catequese",
      date: "Todo Sábado",
      description: "Formação para crianças e adolescentes",
      icon: Calendar,
    },
  ];

  return (
    <section className="py-24 bg-church-blue text-white">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <Calendar className="h-12 w-12 text-church-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Próximos Eventos
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Participe de nossas atividades e faça parte de nossa comunidade
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <Card
                key={event.title}
                className="bg-white/10 border-church-gold/20 hover:border-church-gold/40 transition-all hover:scale-105 backdrop-blur"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-church-gold mb-4">
                    <Icon className="h-6 w-6" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <CardTitle className="text-2xl text-white" style={{ fontFamily: 'Cinzel, serif' }}>
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg">{event.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};