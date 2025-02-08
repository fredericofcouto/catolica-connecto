
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('messages')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <Mail className="h-12 w-12 text-church-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-church-blue mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Entre em Contato
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos aqui para ajudar e responder suas dúvidas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-church-gold/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-church-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-church-blue mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Rua da Igreja, 123 - Centro
                    <br />
                    São Paulo - SP
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-church-gold/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-church-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-church-blue mb-1">Telefone</h3>
                  <p className="text-gray-600">(11) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-church-gold/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-church-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-church-blue mb-1">E-mail</h3>
                  <p className="text-gray-600">contato@paroquia.com</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome"
              className="border-gray-300 focus:border-church-gold"
              required
            />
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className="border-gray-300 focus:border-church-gold"
              required
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Sua mensagem"
              className="min-h-[120px] border-gray-300 focus:border-church-gold"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-church-gold hover:bg-church-gold/90 text-church-blue font-semibold text-lg h-12"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
