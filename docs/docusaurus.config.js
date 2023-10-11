// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Master',
  tagline: 'MUI React Next.Js Admin Template',
  favicon: 'images/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'throw',

  plugins: [
    'docusaurus-plugin-sass',
    'plugin-image-zoom',
    async function tailwind() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss: (postcssOptions) => {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          postcssOptions.plugins.push(require('tailwindcss/nesting'))

          return postcssOptions
        },
      }
    },
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@docComponents': path.resolve(__dirname, './src/components'),
          '@docPages': path.resolve(__dirname, './src/pages'),
          '@docViews': path.resolve(__dirname, './src/views'),
          '@': path.resolve(__dirname, '../typescript-version/full-version/src'),
          '@core': path.resolve(__dirname, '../typescript-version/full-version/src/@core'),
          '@layouts': path.resolve(__dirname, '../typescript-version/full-version/src/@layouts'),
          '@menu-package': path.resolve(__dirname, '../typescript-version/full-version/src/@menu-package'),
          '@assets': path.resolve(__dirname, '../typescript-version/full-version/src/assets'),
          '@components': path.resolve(__dirname, '../typescript-version/full-version/src/components'),
          '@configs': path.resolve(__dirname, '../typescript-version/full-version/src/configs'),
          '@views': path.resolve(__dirname, '../typescript-version/full-version/src/views'),
        }
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true,
          path: 'blog',
          routeBasePath: '/articles',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.scss'),
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true
      }
    ],
  ],

  themeConfig: {
    image: 'images/docusaurus-social-card.jpg',
    navbar: {
      title: 'Master',
      logo: {
        alt: 'Logo',
        src: 'images/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guide',
        },
        { 
          type: 'docSidebar', 
          sidebarId: 'userInterfaceSidebar', 
          position: 'left', 
          label: 'UI',
        },
        {
          type: 'docSidebar',
          sidebarId: 'componentsSidebar',
          position: 'left',
          label: 'Components',
        },
        {
          type: 'docSidebar',
          sidebarId: 'formsTablesSidebar',
          position: 'left',
          label: 'Forms & Tables',
        },
        { type: 'docSidebar', sidebarId: 'menuExamplesSidebar', label: 'Menu Examples', position: 'left', },
        { type: 'docSidebar', sidebarId: 'faqSidebar', label: 'FAQs', position: 'right', },
        { to: '/articles', label: 'Articles', position: 'right' },
        {
          href: 'https://themeselection.com/github',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://themeselection.com//changelog',
          label: 'Changelog',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    imageZoom: {
      selector: '.markdown img',
      options: {
        background: '#fff',
      }
    }
  },
}

module.exports = config
