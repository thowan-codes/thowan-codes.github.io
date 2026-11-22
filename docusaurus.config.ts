import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Thowan',
  tagline: 'Where Thowan comes to share his thoughts and projects.',
  favicon: 'img/docusaurus/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://thowan-codes.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thowan-codes', // Usually your GitHub org/user name.
  projectName: 'thowan-codes.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: 'devlog',
          blogTitle: 'Devlog',
          blogDescription: 'Development updates from Thowan.',

          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus/docusaurus-social-card.jpg',
    colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
    },
    navbar: {
/*       title: 'Thowan',
      logo: {
        alt: 'Thowan',
        src: 'img/thowan/ThowanBigGrin.jpg',
      }, */
      items: [
          {to: '/', label: 'Home', position: 'left'},

          {
              type: 'dropdown',
              label: 'Projects',
              position: 'left',
              items: [
                  {
                      label: 'Signals & Symbols',
                      to: '/projects/signals-and-symbols',
                  },
                  ],
              },


        {to: '/devlog', label: 'DevLog', position: 'left'},
        {
          href: 'https://github.com/thowan-codes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contacts',
          items: [
            {
              label: 'Discord',
              to: 'https://discordapp.com/users/141646284401541120',
            },
                {
                  label: 'GitHub',
                  href: 'https://github.com/thowan-codes',
                },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'DevLog',
              to: '/devlog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Thowan. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
