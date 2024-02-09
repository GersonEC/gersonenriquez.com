import { z, defineCollection } from 'astro:content'

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()),

  }),
})

const bookNotesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),

  }),
})

export const collections = {
  articles: articlesCollection,
  bookNotes: bookNotesCollection,
}