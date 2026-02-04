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

const instagram = {
  icon: 'i-simple-icons-instagram',
  to: 'https://www.instagram.com/mgtrackandfield',
  target: '_blank',
  'aria-label': 'Maple Grove Track & Field on Instagram'
}

export default defineAppConfig({
  teamAppContextRoot: 'https://mgtf.teamapp.com/clubs/397955',
  seo: {
    siteName: 'Maple Grove Track & Field'
  },
  ui: {
    colors: {
      primary: 'falu-red',
      neutral: 'stone'
    }
  },
  header: {
    logo: {
      alt: 'Maple Grove Senior High Crimson & Gold Maple Leaf',
      light: '/logo_leaf.png',
      dark: '/logo_leaf.png'
    },
    search: true,
    colorMode: true,
    links: [x, instagram, gitHub]
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: true,
    links: [x, instagram, gitHub]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/maplegrovetrack/maplegrovetrack.github.io/edit/main/content'
    }
  }
})
