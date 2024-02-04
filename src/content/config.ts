import { z, defineCollection } from 'astro:content'

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional()
  }),
})

export const collections = {
  articles: articlesCollection,
}