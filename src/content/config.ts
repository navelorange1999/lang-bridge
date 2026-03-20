import { defineCollection, z } from 'astro:content';

const languageSchema = z.object({
  code: z.string(),
  explanation: z.string(),
});

const conceptsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    languages: z.record(languageSchema),
    mental_shift: z.string(),
    gotchas: z.array(z.string()),
  }),
});

export const collections = {
  concepts: conceptsCollection,
};
