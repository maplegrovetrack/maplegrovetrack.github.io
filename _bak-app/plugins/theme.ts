import { hexToRgb } from '#ui/utils'
import { defineNuxtPlugin } from '#imports'
import colors from '#tailwind-config/theme/colors'

/**
 * https://github.com/nuxt/ui/tree/dev/docs/plugins
 *
 * This plugin was cloned from the Nuxt UI source code and customized to work with this site.
 */
export default defineNuxtPlugin(
  {
    enforce: 'post',
    setup() {
      const appConfig = useAppConfig()

      const root = computed(() => {
        const primary: Record<string, string> | undefined = colors[appConfig.ui.primary]
        const gray: Record<string, string> | undefined = colors[appConfig.ui.gray]

        return `:root {
        ${Object.entries(primary || colors['falu-red']).map(([key, value]: string[]): string => {
          return `--color-primary-${key}: ${hexToRgb(value)};`
        }).join('\n')}
        --color-primary-DEFAULT: var(--color-primary-500);

        ${Object.entries(gray || colors.stone).map(([key, value]: string[]): string => {
          return `--color-gray-${key}: ${hexToRgb(value)};`
        }).join('\n')}
        }

        .dark {
          --color-primary-DEFAULT: var(--color-primary-400);
        }
        `
      })

      if (process.client) {
        watch(root, () => {
          window.localStorage.setItem('mgtf-ui-root', root.value)
        })

        appConfig.ui.primary = window.localStorage.getItem('mgtf-ui-primary') || appConfig.ui.primary
        appConfig.ui.gray = window.localStorage.getItem('mgtf-ui-gray') || appConfig.ui.gray
      }
      if (process.server) {
        useHead({
          script: [
            {
              innerHTML: `
                if (localStorage.getItem('mgtf-ui-root')) {
                  document.querySelector('style#nuxt-ui-colors').innerHTML = localStorage.getItem('mgtf-ui-root')
                }`.replace(/\s+/g, ' '),
              type: 'text/javascript',
              tagPriority: -1
            }
          ]
        })
      }
    }
  }
)
