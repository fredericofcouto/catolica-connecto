import { Cross } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-church-blue to-[#1a2028] text-white">
      <div className="container max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <Cross className="h-12 w-12 text-church-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Cinzel, serif' }}>
            Nossa Igreja
          </h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p className="leading-relaxed">
              Há mais de 50 anos servindo nossa comunidade, a Paróquia Nossa Senhora
              é um lugar de encontro, oração e celebração da fé católica. Nossa
              missão é propagar o amor de Cristo e servir ao próximo através de
              nossas ações pastorais e trabalhos sociais.
            </p>
            <p className="leading-relaxed">
              Todos são bem-vindos para participar de nossas celebrações e
              atividades. Venha fazer parte desta família!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};