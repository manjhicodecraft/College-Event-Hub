import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed initial dummy events
  const existingEvents = await storage.getEvents();
  if (existingEvents.length === 0) {
    const dummyEvents = [
      {
        title: "Future of AI Summit",
        description: "Explore the latest advancements in Artificial Intelligence and Machine Learning.",
        category: "TechEvent",
        date: "2024-11-15",
        location: "Main Auditorium",
        imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000",
      },
      {
        title: "Web Development Bootcamp",
        description: "Hands-on workshop for learning React and Tailwind CSS.",
        category: "Workshop",
        date: "2024-11-20",
        location: "Lab 3",
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
      },
      {
        title: "Tech Ethics Seminar",
        description: "A deep dive into the ethical implications of modern technology.",
        category: "Seminars",
        date: "2024-11-25",
        location: "Conference Room A",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
      },
      {
        title: "Annual Tech Fest",
        description: "Our biggest cultural and technical celebration of the year.",
        category: "Cultural Events",
        date: "2024-12-05",
        location: "Campus Grounds",
        imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1000",
      }
    ];
    for (const ev of dummyEvents) {
      await storage.createEvent(ev);
    }
  }

  app.get(api.events.list.path, async (req, res) => {
    let events = await storage.getEvents();
    if (req.query.category && req.query.category !== 'All') {
      events = events.filter(e => e.category === req.query.category);
    }
    res.json(events);
  });

  app.post(api.events.create.path, async (req, res) => {
    try {
      const input = api.events.create.input.parse(req.body);
      const event = await storage.createEvent(input);
      res.status(201).json(event);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post(api.events.chat.path, async (req, res) => {
    try {
      const { messages } = api.events.chat.input.parse(req.body);
      
      // Simulate Gemini API call for now as we're in a Node environment
      // In a real Spring Boot app, this would be the Gemini Service
      const lastMessage = messages[messages.length - 1].content.toLowerCase();
      let responseContent = "I'm your CollegeEventHub assistant. How can I help you today?";

      if (lastMessage.includes("suggest") || lastMessage.includes("idea")) {
        responseContent = "How about a 'Code & Coffee' mixer or a 'Sustainable Innovation' workshop?";
      } else if (lastMessage.includes("improve") || lastMessage.includes("description")) {
        responseContent = "I can help polish your event details. Try adding key learning outcomes or speaker highlights!";
      } else if (lastMessage.includes("recommend")) {
        responseContent = "Based on current trends, students are loving the 'Future of AI Summit'.";
      }

      res.json({
        message: {
          role: "assistant",
          content: responseContent
        }
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid request" });
      }
      res.status(500).json({ message: "AI Service unavailable" });
    }
  });

  return httpServer;
}
