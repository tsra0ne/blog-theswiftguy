// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Swift Guy Blog',
  tagline: 'Learn Swift, SwiftUI and UIKit',
  favicon: 'img/favicon.ico',
  url: 'https://blog.theswiftguy.in',
  baseUrl: '/',
  organizationName: 'tsra0ne',
  projectName: 'blog-theswiftguy',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: 'The Swift Guy Blog',
          blogDescription: 'Learn Swift, SwiftUI and UIKit',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          routeBasePath: '/',
          showReadingTime: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/tsra0ne/blog-theswiftguy/blob/main/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} The Swift Guy.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          }
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          }
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'The Swift Guy Blog',
        logo: {
          alt: 'The Swift Guys Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/tsra0ne/blog-theswiftguy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Swift',
                to: 'https://theswiftguy.in/swift/basics',
              },
              {
                label: 'SwiftUI',
                to: 'https://theswiftguy.in/swiftui/introduction',
              },
              {
                label: 'UIKit',
                to: 'https://theswiftguy.in/uikit/integrating-swiftui-into-uikit',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/tsra0ne/blog-theswiftguy/discussions',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/9qAT2vgVy7',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tsra0ne/blog-theswiftguy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Swift Guy.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark,
      },
    }),
};

export default config;
