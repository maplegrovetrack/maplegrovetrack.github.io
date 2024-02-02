import { describe, expect, it, vi } from 'vitest'
import headPlugin from '../../plugins/head'
import { useAppConfig, useHead, useSeoMeta } from '#imports'

vi.mock('#imports', () => ({
  defineNuxtPlugin: (callback: Function) => callback,
  useHead: vi.fn(),
  useAppConfig: vi.fn(),
  useSeoMeta: vi.fn()
}))

describe('head plugin spec', () => {
  it('site name', () => {
    vi.mocked(useAppConfig).mockReturnValueOnce({
      seo: {
        siteName: 'name'
      }
    } as any)

    headPlugin({} as any)

    expect(useHead).toHaveBeenCalledWith({
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    })

    expect(useSeoMeta).toHaveBeenCalledWith({
      ogSiteName: 'name',
      twitterCard: 'summary_large_image'
    })
  })

  it('No site name', () => {
    vi.mocked(useAppConfig).mockReturnValueOnce({} as any)

    headPlugin({} as any)

    expect(useSeoMeta).toHaveBeenCalledWith({
      twitterCard: 'summary_large_image'
    })
  })
})
