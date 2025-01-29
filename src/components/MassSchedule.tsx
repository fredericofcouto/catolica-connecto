import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

export const MassSchedule = () => {
  const schedules = [
    { day: "Domingo", times: ["08:00", "10:00", "19:00"] },
    { day: "Segunda", times: ["19:30"] },
    { day: "Quarta", times: ["19:30"] },
    { day: "Sexta", times: ["19:30"] },
    { day: "Sábado", times: ["19:00"] },
  ];

  return (
    <section id="horarios" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <Bell className="h-12 w-12 text-church-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-church-blue mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Horários das Missas
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Venha participar de nossas celebrações e fortalecer sua fé em comunidade
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {schedules.map((schedule) => (
            <Card
              key={schedule.day}
              className="border-church-gold/20 hover:border-church-gold transition-colors duration-300 bg-white/80 backdrop-blur"
            >
              <CardHeader>
                <CardTitle className="text-xl text-church-blue" style={{ fontFamily: 'Cinzel, serif' }}>
                  {schedule.day}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {schedule.times.map((time) => (
                  <p
                    key={time}
                    className="text-lg text-gray-600 font-medium mb-2 hover:text-church-gold transition-colors"
                  >
                    {time}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};