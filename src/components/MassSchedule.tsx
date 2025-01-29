import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MassSchedule = () => {
  const schedules = [
    { day: "Domingo", times: ["08:00", "10:00", "19:00"] },
    { day: "Segunda", times: ["19:30"] },
    { day: "Quarta", times: ["19:30"] },
    { day: "Sexta", times: ["19:30"] },
    { day: "Sábado", times: ["19:00"] },
  ];

  return (
    <section id="horarios" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-church-blue mb-12">
          Horários das Missas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {schedules.map((schedule) => (
            <Card key={schedule.day} className="border-church-gold/20">
              <CardHeader>
                <CardTitle className="text-xl text-church-blue">
                  {schedule.day}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {schedule.times.map((time) => (
                  <p
                    key={time}
                    className="text-lg text-gray-600 font-medium mb-2"
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