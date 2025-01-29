import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/photo-1473177104440-ffee2f376098')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          Paróquia Nossa Senhora
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fadeIn">
          Um lugar de fé, comunidade e adoração
        </p>
        <Button
          className="bg-church-gold hover:bg-church-gold/90 text-church-blue font-semibold text-lg px-8 py-6"
          onClick={() => {
            const element = document.getElementById("horarios");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Horários das Missas
        </Button>
      </div>
    </div>
  );
};