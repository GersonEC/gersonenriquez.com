import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const blog = await getCollection('articles')
  return rss({
    title: 'Our nice blog',
    description: 'Very cool blog',
    site: 'https://gersonenriquez.com',
    items: blog.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      link: `/blog/${article.slug}/`,
    })),
  })
}