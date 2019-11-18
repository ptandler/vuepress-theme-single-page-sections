# Single Page VuePress Theme

This these extends the VuePress default theme `@vuepress/theme-default` for a layout for single page sites that contain several sections, each covering at least one view height.
I this this is easier described with a picture:

![vuepress-theme-single-page-sections on desktop](./example/desktop.png)

![vuepress-theme-single-page-sections on mobile](./example/mobile.png)
![vuepress-theme-single-page-sections on mobile with menu open](./example/mobile-with-menu.png)

I developed this theme as the basis for my personal homepage. So it can well be used to put your resume online.

It also defines a couple of social icons that you can use to link to your online profiles.

## Example

In the [`example` directory](./example/README.md), there is a simple sample project.

You can see this live at https://ptandler.github.io/vuepress-theme-single-page-sections/

## Setup

This theme uses VuePress v1.

Install the theme:
```cmd
yarn install -D vuepress-theme-single-page-sections
```

## Usage

In your `.vuepress/config.js` include `theme: "single-page-sections"`. And I recommend the following `themeConfig`. The themeConfig comes from the default theme.

```js
module.exports = {
  theme: "single-page-sections",
  themeConfig: {
    sidebar: "auto",
    search: false,
    smoothScroll: true,
    social: { monochrome_icons: false },
    editLinks: false,
    nextLinks: false,
    prevLinks: false,
  },
}
```

And on the pages that should contain several sections use the following frontmatter:

```md
---
title: Page Title...
pageClass: sections-layout
sidebarImage: /small-image.jpg
---

<PageSection id="welcome" title="First Section">

Some content...

</PageSection>

-----

::: section Second Section

Some content... this time using the markdown "custom container" syntax.

:::
```

The `sidebarImage` is optional. If defined, this image is included in the sidebar above the navigation links. In the mobil version, it is included in the navbar instead, as the sidebar is hidden then.
