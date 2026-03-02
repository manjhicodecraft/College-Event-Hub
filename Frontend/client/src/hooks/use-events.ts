import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl, type EventInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useEvents(category?: string) {
  return useQuery({
    queryKey: [api.events.list.path, category],
    queryFn: async () => {
      const url = new URL(api.events.list.path, window.location.origin);
      if (category && category !== "All") {
        url.searchParams.append("category", category);
      }
      
      const res = await fetch(url.toString(), { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch events");
      
      const data = await res.json();
      return api.events.list.responses[200].parse(data);
    },
  });
}

export function useCreateEvent() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: EventInput) => {
      const validated = api.events.create.input.parse(data);
      const res = await fetch(api.events.create.path, {
        method: api.events.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.events.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to create event");
      }
      
      return api.events.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.events.list.path] });
      toast({
        title: "Success",
        description: "Event created successfully! 🎉",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: error.message,
      });
    },
  });
}
