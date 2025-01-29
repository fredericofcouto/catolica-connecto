import { Hero } from "@/components/Hero";
import { MassSchedule } from "@/components/MassSchedule";
import { Events } from "@/components/Events";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MassSchedule />
      <Events />
      <About />
      <Contact />
    </div>
  );
};

export default Index;