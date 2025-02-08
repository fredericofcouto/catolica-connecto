
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Check, Trash2, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Admin = () => {
  const { toast } = useToast();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [filter, setFilter] = useState<"all" | "read" | "unread">("all");

  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages', refreshTrigger, filter],
    queryFn: async () => {
      let query = supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter === "read") {
        query = query.eq('read', true);
      } else if (filter === "unread") {
        query = query.eq('read', false);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    }
  });

  const handleMarkAsRead = async (id: string) => {
    const { error } = await supabase
      .from('messages')
      .update({ read: true })
      .eq('id', id);

    if (error) {
      toast({
        title: "Erro ao marcar mensagem como lida",
        variant: "destructive"
      });
    } else {
      setRefreshTrigger(prev => prev + 1);
      toast({
        title: "Mensagem marcada como lida"
      });
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('messages')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Erro ao excluir mensagem",
        variant: "destructive"
      });
    } else {
      setRefreshTrigger(prev => prev + 1);
      toast({
        title: "Mensagem excluída com sucesso"
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Carregando mensagens...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Mensagens Recebidas</h1>
          <Select value={filter} onValueChange={(value: "all" | "read" | "unread") => setFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar mensagens" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as mensagens</SelectItem>
              <SelectItem value="read">Mensagens lidas</SelectItem>
              <SelectItem value="unread">Mensagens não lidas</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Mensagem</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages?.map((message) => (
                <TableRow key={message.id}>
                  <TableCell>
                    {format(new Date(message.created_at), "dd/MM/yyyy HH:mm", { locale: ptBR })}
                  </TableCell>
                  <TableCell>{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell className="max-w-md">{message.message}</TableCell>
                  <TableCell>
                    {message.read ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Check className="w-4 h-4 mr-1" />
                        Lida
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <X className="w-4 h-4 mr-1" />
                        Não lida
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {!message.read && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleMarkAsRead(message.id)}
                        >
                          Marcar como lida
                        </Button>
                      )}
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(message.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
