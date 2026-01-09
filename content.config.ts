import { z } from 'zod'
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

const Button = z.object({
  label: z.string(),
  icon: z.string().optional(),
  leadingIcon: z.string().optional(),
  trailingIcon: z.string().optional(),
  to: z.string().optional(),
  target: z.enum(['_blank', '_self']).optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  id: z.string().optional(),
  class: z.string().optional()
})

export default defineContentConfig({
  collections: {
    site: defineCollection(asSitemapCollection({
      type: 'page',
      source: '**/*.{md,yml}',
      schema: z.object({
        navigation: z.object({
          title: z.string().optional(),
          description: z.string().optional()
        }),
        links: z.array(Button),
        toc: z.boolean().default(true)
      })
    }))
  }
})
