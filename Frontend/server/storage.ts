import { type Event, type InsertEvent } from "@shared/schema";

export interface IStorage {
  getEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
}

export class MemStorage implements IStorage {
  private events: Map<number, Event>;
  private currentId: number;

  constructor() {
    this.events = new Map();
    this.currentId = 1;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentId++;
    const event: Event = { ...insertEvent, id };
    this.events.set(id, event);
    return event;
  }
}

export const storage = new MemStorage();
