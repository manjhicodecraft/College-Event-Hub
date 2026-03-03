import { useState } from "react";
import { useEvents } from "@/hooks/use-events";
import { EventCard } from "@/components/EventCard";
import { Loader2, CalendarX2, Rocket } from "lucide-react";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const CATEGORIES = ["All", "TechEvent", "Workshop", "Seminars", "Cultural Events"];

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data: events, isLoading, error } = useEvents(selectedCategory);

  const handleCategoryClick = (category: string) => {
    if (category === "TechEvent") {
      setLocation("/techevents");
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <Layout>
      <div className="space-y-8 animate-fade-in-up">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Discover Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find and register for the best events happening around your college.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 stagger-1">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`
                  relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                  ${isActive 
                    ? "text-white shadow-md shadow-primary/20" 
                    : "bg-white/60 text-foreground/70 hover:bg-white hover:text-foreground shadow-sm"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-[400px] text-primary">
              <Loader2 className="w-12 h-12 animate-spin mb-4" />
              <p className="font-medium animate-pulse">Loading events...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-[400px] text-destructive bg-destructive/5 rounded-3xl border border-destructive/10">
              <p className="font-semibold text-lg">Failed to load events.</p>
              <p className="text-sm opacity-80">Please try again later.</p>
            </div>
          ) : events?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[400px] bg-white/40 backdrop-blur-sm rounded-3xl border border-white/60">
              <CalendarX2 className="w-16 h-16 text-muted-foreground mb-4 opacity-50" />
              <p className="text-xl font-semibold text-foreground">No events found</p>
              <p className="text-muted-foreground">Try selecting a different category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {events?.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
