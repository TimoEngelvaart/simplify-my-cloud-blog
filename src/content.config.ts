import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()).optional(),
    youtubeId: z.string().optional(),
    // Injected at render time by remark-reading-time, not stored in frontmatter
    readingTime: z.string().optional(),
  }),
});

export const collections = { posts: postsCollection };
