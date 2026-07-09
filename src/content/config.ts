// NOTE: This file is the Astro v4 legacy schema location.
// Astro v5 reads from src/content.config.ts instead — edit that file.
// Kept here only for reference; changes here have no effect.
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({ url: z.string(), alt: z.string() }),
    tags: z.array(z.string()).optional(),
    youtubeId: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = { posts: postsCollection };
