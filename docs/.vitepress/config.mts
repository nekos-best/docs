import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

export default defineConfig({
  title: "NEKOSBEST DOCS",
  description: "nekos.best's official documentation.",

  themeConfig: {
    search: { provider: "local" },

    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Status Page",
        link: "https://status.nekos.best",
      },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          {
            text: "Introduction",
            link: "/getting-started/introduction",
          },
          {
            text: "API Endpoints",
            link: "/getting-started/api-endpoints",
          },
          {
            text: "Frequently Asked Questions",
            link: "/getting-started/faq",
          },
          {
            text: "Contribute",
            link: "/getting-started/contribute",
            items: [
              {
                text: "Images & GIFs",
                link: "/contribute/images-gifs",
              },
              {
                text: "Code Examples",
                link: "/contribute/code-examples",
              },
              {
                text: "Unofficial Libraries",
                link: "/contribute/unofficial-libraries",
              },
            ],
          },
        ],
      },
      {
        text: "Code Examples",
        items: [
          //
          // ADD YOUR <<CODE EXAMPLE>> UNDER THIS SECTION; KEEP IT ALPHABETICALLY //

          {
            text: "BDFD",
            link: "/examples/bdfd",
          },
          {
            text: "JavaScript",
            link: "/examples/javascript",
          },
          {
            text: "Python",
            link: "/examples/python",
          },

          // ADD YOUR <<CODE EXAMPLE>> ABOVE THIS SECTION; KEEP IT ALPHABETICALLY //
        ],
      },
      {
        text: "Official Libraries",
        items: [
          {
            text: "JavaScript",
            link: "https://github.com/nekos-best/nekos-best.js",
          },
          {
            text: "Python",
            link: "https://github.com/nekos-best/nekos-best.py",
          },
          { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
        ],
      },
      {
        text: "Unofficial Libraries",
        items: [
          {
            text: "About Unofficial Libraries",
            link: "/unofficial/unofficial",
            items: [
              //
              // ADD YOUR <<LIBRARY>> UNDER THIS SECTION; KEEP IT ALPHABETICALLY //

              {
                text: "C#",
                link: "https://github.com/Sylveon76/Nekos.Best-API",
              },
              {
                text: "Dart",
                link: "https://github.com/Yakiyo/nekos_best_dart",
              },
              {
                text: "Go",
                link: "https://github.com/Yakiyo/nekos_best.go",
              },
              {
                text: "Haskell",
                link: "https://github.com/xquantxz/nekos-best.hs",
              },

              // ADD YOUR <<LIBRARY>> ABOVE THIS SECTION; KEEP IT ALPHABETICALLY //
            ],
          },
        ],
      },
      {
        text: "Legal",
        items: [
          { text: "Terms and Conditions", link: "/legal/tos" },
          { text: "Privacy Policy", link: "/legal/privacy" },
          { text: "DMCA Takedown", link: "/legal/dmca" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/nekos-best/docs" },
      { icon: "discord", link: "https://nekos.best/discord?ref=docs" },
    ],

    lastUpdated: {
      text: "Last updated at",
      formatOptions: {
        dateStyle: "long",
      },
    },
  },

  head: [
    [
      "script",
      {
        async: "",
        defer: "",
        "data-website-id": "3e079cfa-6704-4cea-bf37-8c092faf18d3",
        src: "https://alycs.nekos.best/script.js",
      },
    ],
    ["link", { rel: "icon", href: "/logos/favicon.ico" }],
  ],

  sitemap: {
    hostname: "https://docs.nekos.best",
  },

  lastUpdated: true,

  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },

  vite: {
    plugins: [groupIconVitePlugin()],
    server: {
      allowedHosts: ["types-beautifully-match-phd.trycloudflare.com"],
    },
  },
});
