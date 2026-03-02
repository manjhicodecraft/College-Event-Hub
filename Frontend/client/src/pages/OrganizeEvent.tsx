import { Layout } from "@/components/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEventSchema, type InsertEvent } from "@shared/schema";
import { useCreateEvent } from "@/hooks/use-events";
import { Loader2, Image as ImageIcon, Sparkles } from "lucide-react";
import { useLocation } from "wouter";

const CATEGORIES = ["TechEvent", "Workshop", "Seminars", "Cultural Events"];

// Sample beautiful unsplash images for demo purposes
const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", // Tech
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80", // Seminar
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80", // Workshop
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80", // Cultural
];

export default function OrganizeEvent() {
  const [, setLocation] = useLocation();
  const createEvent = useCreateEvent();

  const form = useForm<InsertEvent>({
    resolver: zodResolver(insertEventSchema),
    defaultValues: {
      title: "",
      description: "",
      category: CATEGORIES[0],
      date: "",
      location: "",
      imageUrl: DEMO_IMAGES[0],
    },
  });

  const onSubmit = (data: InsertEvent) => {
    createEvent.mutate(data, {
      onSuccess: () => {
        setLocation("/");
      },
    });
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto animate-fade-in-up">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-accent" />
            Organize an Event
          </h2>
          <p className="text-muted-foreground mt-2">
            Fill out the details below to publish your event to the campus hub.
          </p>
        </div>

        <div className="glass-card rounded-[2rem] p-6 sm:p-10">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground ml-1">Event Title</label>
              <input
                {...form.register("title")}
                className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all"
                placeholder="e.g. Annual Hackathon 2024"
              />
              {form.formState.errors.title && (
                <p className="text-sm text-destructive ml-1">{form.formState.errors.title.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground ml-1">Category</label>
                <select
                  {...form.register("category")}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  {CATEGORIES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground ml-1">Date & Time</label>
                <input
                  type="datetime-local"
                  {...form.register("date")}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all"
                />
                 {form.formState.errors.date && (
                  <p className="text-sm text-destructive ml-1">{form.formState.errors.date.message}</p>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground ml-1">Location</label>
              <input
                {...form.register("location")}
                className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all"
                placeholder="e.g. Main Auditorium"
              />
               {form.formState.errors.location && (
                <p className="text-sm text-destructive ml-1">{form.formState.errors.location.message}</p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground ml-1">Description</label>
              <textarea
                {...form.register("description")}
                rows={4}
                className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all resize-none"
                placeholder="Tell students what this event is about..."
              />
               {form.formState.errors.description && (
                <p className="text-sm text-destructive ml-1">{form.formState.errors.description.message}</p>
              )}
            </div>

            {/* Image URL Selection (Simplified for demo) */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground ml-1 flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> Cover Image
              </label>
              <div className="grid grid-cols-4 gap-3">
                {DEMO_IMAGES.map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => form.setValue("imageUrl", img)}
                    className={`
                      relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-all
                      ${form.watch("imageUrl") === img ? "border-primary shadow-md scale-105" : "border-transparent opacity-60 hover:opacity-100"}
                    `}
                  >
                    <img src={img} alt="Demo" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={createEvent.isPending}
                className="w-full py-4 px-6 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300 flex justify-center items-center"
              >
                {createEvent.isPending ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin mr-2" />
                    Publishing...
                  </>
                ) : (
                  "Publish Event"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
