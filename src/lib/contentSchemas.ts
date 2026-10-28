import { z } from 'zod';

export const linkSchema = z.object({
  label: z.string(),
  url: z.string().url(),
});

export const noteSchema = z.object({
  kind: z.enum(['note', 'extra', 'warning']),
  text: z.string(),
});

export const exclusionSchema = z.object({
  path: z.string(),
  type: z.string(),
  description: z.string().default(''),
  justification: z.string().default(''),
  /** When the exclusion applies, e.g. a product version, OS or feature. */
  condition: z.string().default(''),
  /** `legacy`: only for older product versions, hidden by default. */
  status: z.enum(['current', 'legacy']).default('current'),
  /** URL of the item source this row comes from; '' means the item's only source. */
  source: z.string().default(''),
});

export const itemSchema = z.object({
  vendor: z.string(),
  title: z.string(),
  order: z.number().optional(),
  sources: z.array(linkSchema).default([]),
  notes: z.array(noteSchema).default([]),
  exclusions: z.array(exclusionSchema).default([]),
  tags: z.array(z.string()).default([]),
  /** Date the item was last checked against its sources. */
  lastReviewed: z.coerce.date().optional(),
  /** Slugs of related items, shown as links on the item page. */
  related: z.array(z.string()).default([]),
});

export const vendorSchema = z.object({
  title: z.string(),
  order: z.number(),
  sources: z.array(linkSchema).default([]),
});

export type Link = z.infer<typeof linkSchema>;
export type Note = z.infer<typeof noteSchema>;
export type Exclusion = z.infer<typeof exclusionSchema>;
export type Item = z.infer<typeof itemSchema>;
export type Vendor = z.infer<typeof vendorSchema>;
