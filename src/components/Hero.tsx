import { Button } from "@/components/ui/button";
import { Church, Calendar, Heart } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/photo-1473177104440-ffee2f376098')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <Church className="h-16 w-16 text-church-gold animate-fade-in" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in" style={{ fontFamily: 'Cinzel, serif' }}>
          Paróquia Nossa Senhora
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto animate-fade-in opacity-90">
          Um lugar sagrado de fé, comunidade e adoração, onde todos são bem-vindos para celebrar o amor de Cristo
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          <Button
            className="bg-church-gold hover:bg-church-gold/90 text-church-blue font-semibold text-lg px-8 py-6 rounded-full flex items-center gap-2 transition-all hover:scale-105"
            onClick={() => {
              const element = document.getElementById("horarios");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Calendar className="h-5 w-5" />
            Horários das Missas
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white/80 hover:bg-white/20 text-white font-semibold text-lg px-8 py-6 rounded-full flex items-center gap-2 transition-all hover:scale-105"
            onClick={() => {
              const element = document.getElementById("about");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Heart className="h-5 w-5" />
            Conheça Nossa Igreja
          </Button>
        </div>
      </div>
    </div>
  );
};