const x = {
  icon: 'i-simple-icons-x',
  to: 'https://x.com/maplegrovetrack',
  target: '_blank',
  'aria-label': 'Maple Grove Track & Field on X'
}

const gitHub = {
  icon: 'i-simple-icons-github',
  to: 'https://github.com/maplegrovetrack/maplegrovetrack.github.io',
  target: '_blank',
  'aria-label': 'Maple Grove Track & Field website on GitHub'
}

export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'cool',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [x, gitHub]
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: true,
    links: [x, gitHub]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/maplegrovetrack/maplegrovetrack.github.io/edit/develop/content',
      links: []
    }
  }
})
