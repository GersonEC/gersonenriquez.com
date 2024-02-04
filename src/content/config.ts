import { z, defineCollection } from 'astro:content'

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
})

export const collections = {
  articles: articlesCollection,
}