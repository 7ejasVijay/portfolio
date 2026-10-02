// Project write-ups: one Markdown file per project in src/content/projects/.
// Each becomes a page at /projects/<file name>.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const image = z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() });

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    context: z.string(),          // e.g. "Wow Internet Labz, July 2025 to now"
    tagline: z.string(),
    period: z.string().optional(), // shown in the byline, e.g. "Sept 2025 - Sept 2026"
    cover: image,
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    stack: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    // Optional activity chart, e.g. commits per month.
    activity: z.object({ title: z.string(), months: z.array(z.tuple([z.string(), z.number()])) }).optional(),
  }),
});

export const collections = { projects };
