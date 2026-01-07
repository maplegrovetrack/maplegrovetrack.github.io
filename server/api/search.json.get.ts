import type { H3Event } from 'h3'
import { eventHandler } from 'h3'

export default eventHandler((event: H3Event) => {
  return queryCollectionSearchSections(event, 'site')
})
