import type { H3Event } from 'h3'
import { eventHandler } from 'h3'
import { serverQueryContent } from '#content/server'

export default eventHandler((event: H3Event) => {
  return serverQueryContent(event).where({ _type: 'markdown', navigation: { $ne: false } }).find()
})
