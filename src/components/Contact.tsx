import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-church-blue mb-12">
          Entre em Contato
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-church-gold" />
                <p className="text-gray-600">
                  Rua da Igreja, 123 - Centro
                  <br />
                  São Paulo - SP
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-church-gold" />
                <p className="text-gray-600">(11) 1234-5678</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-church-gold" />
                <p className="text-gray-600">contato@paroquia.com</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input placeholder="Nome" required />
            <Input type="email" placeholder="E-mail" required />
            <Textarea
              placeholder="Sua mensagem"
              className="min-h-[120px]"
              required
            />
            <Button
              type="submit"
              className="w-full bg-church-gold hover:bg-church-gold/90 text-church-blue"
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};