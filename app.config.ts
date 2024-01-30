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
  seo: {
    siteName: 'Maple Grove Track & Field',
  },
  ui: {
    primary: 'falu-red',
    gray: 'stone',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  header: {
    logo: {
      alt: 'Maple Grove Senior High Crimson & Gold Maple Leaf',
      light: '/logo_leaf.png',
      dark: '/logo_leaf.png'
    },
    search: false,
    colorPicker: true,
    colorPickerColors: ['vista-white', 'red', 'rose', 'old-rose', 'falu-red', 'sandrift'],
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
