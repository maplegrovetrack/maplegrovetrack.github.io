import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { defineEventHandler } from '#imports'
import type { H3Event } from 'h3'

export default defineEventHandler(async(event: H3Event): Promise<Buffer> => {
  // Fetch all documents
  const docs: ParsedContent[] = await serverQueryContent(event).find()
  const sitemap: SitemapStream = new SitemapStream({
    hostname: 'https://maplegrovetrack.github.io/'
  })

  for (const doc of docs) {
    const path: string | undefined = doc._path
    sitemap.write({
      url: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.8
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
