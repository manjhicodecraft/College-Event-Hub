import { z } from "zod";
import { insertEventSchema, events } from "./schema";

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  events: {
    list: {
      method: "GET" as const,
      path: "/api/events" as const,
      input: z.object({
        category: z.string().optional(),
      }).optional(),
      responses: {
        200: z.array(z.custom<typeof events.$inferSelect>()),
      },
    },
    create: {
      method: "POST" as const,
      path: "/api/events" as const,
      input: insertEventSchema,
      responses: {
        201: z.custom<typeof events.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    chat: {
      method: "POST" as const,
      path: "/api/ai/chat" as const,
      input: z.object({
        messages: z.array(z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string(),
        })),
      }),
      responses: {
        200: z.object({
          message: z.object({
            role: z.enum(["assistant"]),
            content: z.string(),
          }),
        }),
        400: errorSchemas.validation,
        500: errorSchemas.internal,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type EventResponse = z.infer<typeof api.events.list.responses[200]>[0];
export type EventInput = z.infer<typeof api.events.create.input>;
