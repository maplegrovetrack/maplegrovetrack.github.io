import type { H3Event } from 'h3'
import { queryCollectionSearchSections } from '@nuxt/content/server'

export default defineEventHandler(async (event: H3Event) => {
  return queryCollectionSearchSections(event, 'site')
})
