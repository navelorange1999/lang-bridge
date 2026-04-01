import { defineCollection, z } from 'astro:content';

const conceptsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    sections: z.array(
      z.object({
        id: z.string(),
        code: z.string(),
        lang: z.string().optional(),
      }),
    ),
    explanation: z.string(),
  }),
});

export const collections = {
  concepts: conceptsCollection,
};
