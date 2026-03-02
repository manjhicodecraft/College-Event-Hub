import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  date: text("date").notNull(),
  location: text("location").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertEventSchema = createInsertSchema(events).omit({ id: true });
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

// AI Chat types
export const chatMessages = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
});

export type ChatMessage = z.infer<typeof chatMessages>;

export const aiChatRequestSchema = z.object({
  messages: z.array(chatMessages),
});

export type AIChatRequest = z.infer<typeof aiChatRequestSchema>;

export const aiChatResponseSchema = z.object({
  message: chatMessages,
});

export type AIChatResponse = z.infer<typeof aiChatResponseSchema>;
