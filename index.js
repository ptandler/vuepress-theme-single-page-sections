const { path } = require("@vuepress/utils")
const slugify = require("@vuepress/markdown/lib/utils/slugify")
const svgLoader = require("vite-svg-loader")

const sectionRE = RegExp(/<PageSection([^>]*)>/, "g"),
  attributesRE = RegExp(/([a-z0-9]+)="([^"]*)"/, "ig")

function addSectionHeadings(content, $page) {
  let match
  // make sure the pattern has the global flag
  // console.info($page.headers)
  while ((match = sectionRE.exec(content))) {
    let match_attr
    let id = null,
      title = null
    while ((match_attr = attributesRE.exec(match[1]))) {
      const key = match_attr[1],
        val = match_attr[2]

      switch (key) {
        case "id":
          id = val
          break
        case "title":
          title = val
          break
      }
    }
    const slug = id ? id : slugify(title)
    if (!$page.headers) {
      $page.headers = []
    }
    $page.headers.push({ level: 2, title, slug })
  }
  // console.info($page.headers)
}

module.exports = {
  extends: "@vuepress/theme-default",
  alias: {
    "@components": path.resolve(__dirname, "global-components"),
    "@fonts": path.resolve(__dirname, "fonts"),
    "@styles": path.resolve(__dirname, "styles"),
  },
  plugins: [
    /*
        [
          "@vuepress/plugin-container",
          {
            type: "section",
            before: (info) => `<PageSection title="${info}">`,
            after: "</PageSection>",
          },
        ],
    */
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./global-components"),
      },
    ],
  ],
  clientAppEnhanceFiles: path.resolve(__dirname, "./clientAppEnhance.ts"),
  bundlerConfig: {
    viteOptions: {
      plugins: [svgLoader()],
    },
  },
  extendsPage($page) {
    /*
    const {
      _filePath, // file's absolute path
      _computed, // access the client global computed mixins at build time, e.g _computed.$localePath.
      _content, // file's raw content string
      _strippedContent, // file's content string without frontmatter
      key, // page's unique hash key
      frontmatter, // page's frontmatter object
      regularPath, // current page's default link (follow the file hierarchy)
      path, // current page's real link (use regularPath when permalink does not exist)
    } = $page
*/

    addSectionHeadings($page._strippedContent, $page)
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg")

    svgRule.uses.clear()
    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .options({
        svgo: {
          plugins: [{ removeDoctype: true }, { removeComments: true }, { removeViewBox: false }],
          removeViewBox: false,
        },
      })
      .end()
  },
}
