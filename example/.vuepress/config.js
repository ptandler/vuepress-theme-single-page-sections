// todo can I get the theme color from some universal place?
// should / could match $primary defined in styles/palette.styl
themeColor = "#2C3E50"

// generate links for favicons
sizes = [16, 32, 96, 192]
headIconLinks = sizes.map((size) => [
  "link",
  {
    rel: "icon",
    type: "image/png",
    sizes: `${size}x${size}`,
    href: `/icon-${size}x${size}.png`,
  },
])

appleSizes = [57, 60, 72, 76, 114, 120, 144, 152, 180]
appleIconLinks = appleSizes.map((size) => [
  "link",
  {
    rel: "apple-touch-icon",
    sizes: `${size}x${size}`,
    href: `/icon-${size}x${size}.png`,
  },
])

module.exports = {
  title: "Example Site for vuepress-theme-single-page-sections",
  description: "This illustrates how the vuepress-theme-single-page-sections Vuepress theme can be used",
  base: "/vuepress-theme-single-page-sections/",
  dest: "docs",
  head: [
    /* // uncomment if you want to use PWA manifest and icons
    ...headIconLinks,
    ["link", { rel: "manifest", href: "manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: themeColor }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ...appleIconLinks,
    ["link", { rel: "mask-icon", href: "icons.svg", color: themeColor }],
    ["meta", { name: "msapplication-TileImage", content: "icon-144x144.png" }],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
*/
  ],
  theme: "single-page-sections",
  themeConfig: {
    sidebar: "auto",
    // search: false,
    // smoothScroll: true,
    social: { monochrome_icons: false },
    editLink: false,
    // nextLinks: false,
    // prevLinks: false,
  },
  markdown: {
    anchor: {
      permalink: false,
    },
  },
  serviceWorker: true,

  extendsMarkdown: (md) => {
    // console.log("md options:", md.options)
    // console.log("md renderer rules:", md.renderer.rules)
    // todo can I somehow detect the language of the current page here? is this instantiated per page?
    md.set({
      xhtmlOut: true,
      linkify: true,
      typographer: true,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      // quotes: '„“‚‘',
      // quotes: '“”‘’',
    })
    // md.use(require('markdown-it-xxx'))
    /*
    var twemoji = require("twemoji");
    md.renderer.rules.emoji = function(token, idx) {
      return twemoji.parse(token[idx].content, {
        folder: "svg",
        ext: ".svg"
      });
    };
*/
  },
}
