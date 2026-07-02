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
});

export const itemSchema = z.object({
  vendor: z.string(),
  title: z.string(),
  order: z.number().optional(),
  sources: z.array(linkSchema).default([]),
  notes: z.array(noteSchema).default([]),
  exclusions: z.array(exclusionSchema).default([]),
  tags: z.array(z.string()).default([]),
  lastReviewed: z.coerce.date().optional(),
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
