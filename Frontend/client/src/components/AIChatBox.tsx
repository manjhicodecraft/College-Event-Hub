import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { type ChatMessage } from "@shared/schema";

export function AIChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Hi! I'm your AI event assistant. Need ideas or help structuring your event?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await apiRequest("POST", "/api/ai/chat", { messages: newMessages });
      const data = await res.json();
      setMessages([...newMessages, data.message]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get AI response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      {isOpen && (
        <Card className="w-[350px] h-[450px] shadow-2xl border-primary/20 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <CardHeader className="p-4 border-b bg-gradient-to-r from-primary/10 to-accent/10 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Event AI Assistant
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 p-0 flex flex-col overflow-hidden">
            <ScrollArea className="flex-1 p-4" viewportRef={scrollRef}>
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.role === "user"
                          ? "bg-primary text-white rounded-tr-none"
                          : "bg-muted text-foreground rounded-tl-none"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-2xl rounded-tl-none">
                      <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="p-4 border-t flex gap-2 bg-background">
              <Input
                placeholder="Ask about event ideas..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button size="icon" onClick={handleSend} disabled={isLoading || !input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform duration-200 p-0"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>
    </div>
  );
}
