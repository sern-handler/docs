// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// WARNING: When changing things in this file, please also change them on the other docgen.docusaurus.config.js file!

const lightCodeTheme = require('prism-react-renderer').themes.nightOwlLight;
const darkCodeTheme = require('prism-react-renderer').themes.oceanicNext;
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'sern - Handlers. Redefined.',
  tagline: 'With the support of the community made plugins and a powerful CLI, it\'s more than just a handler.',
  url: 'https://sern.dev',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico', // this currently not working

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sern-handler', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  markdown: {
    format: 'detect'
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sern-handler/website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogSidebarCount: 'ALL',
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'https://sern.dev/img/logo.png',
      algolia: {
        appId: 'AA9S5J9NYT',
        apiKey: 'ccfe6abc4d12ac6f882565a9d0caafb1',
        indexName: 'sern',
        insights: true,
        container: 'div',
        debug: false,
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        replaceSearchResultPathname: {
          from: '/docs/api',
          to: '/docs/api',
        },
        searchParameters: {},
        searchPagePath: 'search',
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'logo logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs & Guide',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/sern-handler',
            label: 'GitHub',
            position: 'right',
          },
          { to: "/sponsors", label: "Sponsor", position: "left" },
          {
            to: '/plugins',
            label: 'Plugins',
            position: 'left'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Information',
            items: [
              {
                label: 'Docs & Guide',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/sern-handler',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/DwbF5H5JgQ',
              },
              {
                label: 'Open Collective',
                href: 'https://opencollective.com/sern'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sern-handler',
              },
            ],
          },
        ],
        copyright: `Built with ❤️ by the sern Handler team and its contributors`,
      },
      metadata: [
        { name: 'og:title', content: 'sern - Handlers. Redefined.' },
        { name: 'og:description', content: 'A modular, customizable, fast Discord.js framework to streamline bot development' },
        { name: 'og:url', content: 'https://sern.dev' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:site', content: '@sern-handler' },
        { property: 'og:image:alt', content: 'sernlogo' },
        { name: 'twitter:title', content: 'sern - Handlers. Redefined.' },
        { name: 'twitter:description', content: 'A modular, customizable, fast Discord.js framework to streamline bot development' },
        { name: 'keywords', content: 'discord, bot, handler, framework, documentation, sern' },
        { name: 'twitter:image', content: 'https://sern.dev/img/logo.png' },
        { name: 'twitter:url', content: 'https://sern.dev' },
        { property: 'og:image:height', content: '512' },
        { property: 'og:image:width', content: '1024' },
        { name: 'theme-color', content: '#F25186' }
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    /* [
      'docusaurus-plugin-typedoc',
      {
        //if you're editing website, please change this to your local branch of sern to generate documentation
        entryPoints: ['../sernHandlerV2/src/index.ts'],
        tsconfig: '../sernHandlerV2/tsconfig.json',
      },
    ], */
    [
      "@dipakparmar/docusaurus-plugin-umami",
      {
        websiteID: "e82ff65c-b08f-47b5-8e74-5c31cbcec0ad",
        analyticsDomain: "analytics.srizan.dev",
        scriptName: 'ua.js',
        dataAutoTrack: true,
        dataDoNotTrack: true,
        dataCache: true,
        dataDomains: "sern.dev",
      },
    ]
  ]
};

module.exports = config;
