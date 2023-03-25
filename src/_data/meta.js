module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Misremembered',
  siteDescription:
    'The personal website of Jon Michaels, Supervising Sound Editor, containing a variety of words, pictures, and sounds.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Jon Michaels', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'jonmichaels@mac.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https://misremembe.red', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.png', // fallback/default meta image
    opengraph_default_alt:
      'Misremembered in a stacked logo', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: 'https://mastodon.social/@jonmichaels' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Misremembered: Things I might have thought',
    description:
      'Things I feel about writing about... could be anything from roleplaying games, to Mac automation, to thoughts about film sound, to all kinds of things in-between.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Jon Michaels',
    street: '',
    city: 'Marshfield',
    state: 'MA',
    zip: '02050',
    mobileDisplay: '+1 (781) 566-0310',
    mobileCall: '+17815660310',
    email: 'jonmichaels@mac.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
