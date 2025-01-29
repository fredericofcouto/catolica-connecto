import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export const Events = () => {
  const events = [
    {
      title: "Festa do Padroeiro",
      date: "15 de Agosto",
      description: "Celebração especial com procissão e quermesse",
    },
    {
      title: "Retiro Espiritual",
      date: "20-22 de Agosto",
      description: "Momento de reflexão e oração para jovens",
    },
    {
      title: "Catequese",
      date: "Todo Sábado",
      description: "Formação para crianças e adolescentes",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-church-blue mb-12">
          Próximos Eventos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card
              key={event.title}
              className="border-church-gold/20 hover:border-church-gold/40 transition-colors"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-church-gold mb-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <CardTitle className="text-xl text-church-blue">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};