import { z, defineCollection } from 'astro:content'

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    abstract: z.string(),
    date: z.date(),
    subtitle: z.string().optional(),
    tags: z.array(z.string()),
    title: z.string(),
  }),
})

const bookNotesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    tags: z.array(z.string()),
    title: z.string(),

  }),
})

export const collections = {
  articles: articlesCollection,
  booknotes: bookNotesCollection,
}