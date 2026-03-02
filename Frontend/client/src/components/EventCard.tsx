import { Calendar, MapPin } from "lucide-react";
import { type EventResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface EventCardProps {
  event: EventResponse;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const { toast } = useToast();

  const handleRegister = () => {
    toast({
      title: "Registration Initiated",
      description: `You are registering for ${event.title}.`,
    });
  };

  // Attempt to parse date safely, fallback to raw string if invalid
  let formattedDate = event.date;
  try {
    const d = new Date(event.date);
    if (!isNaN(d.getTime())) {
      formattedDate = format(d, "MMM d, yyyy • h:mm a");
    }
  } catch (e) {
    // ignore
  }

  return (
    <div
      className="glass-card rounded-[1.5rem] overflow-hidden group flex flex-col h-full opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary shadow-sm">
            {event.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
          {event.description}
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-foreground/80">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            {formattedDate}
          </div>
          <div className="flex items-center text-sm text-foreground/80">
            <MapPin className="w-4 h-4 mr-2 text-accent" />
            {event.location}
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="w-full py-3 px-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
