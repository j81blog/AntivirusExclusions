import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { itemSchema, vendorSchema } from './lib/contentSchemas';

const items = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/items' }),
  schema: itemSchema,
});

const vendors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vendors' }),
  schema: vendorSchema,
});

export const collections = { items, vendors };
