import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['mindset', 'frameworks', 'tools', 'career', 'soft-skills']),
    tags: z.array(z.string()),
    readTime: z.number(),
  }),
});

export const collections = { blog };
