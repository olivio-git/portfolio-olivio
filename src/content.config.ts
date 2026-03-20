import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    description_en: z.string(),
    image: z.string(),
    images: z.array(z.string()).optional().default([]),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    type: z.enum(["product", "client", "game", "library"]),
    featured: z.boolean().default(false),
    org: z.string().optional(),
    status: z.enum(["live", "wip", "archived"]).default("live"),
    year: z.number(),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
