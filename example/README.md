---
title: My Resume
pageClass: sections-layout
sidebarImage: /dummy-person.svg
sidebarImageAlt: Dummy picture of a person
---

<PageSection id="welcome" title="Single Page Example">

Nice that you're here! You could use this layout for your personal homepage and tell the world something about you.

The template provides predefined Vue components that you can easily use to link all your social profiles:

<Social-LinkedIn id="myid" />
<Social-XING id="myid" />
<Social-Facebook id="myid" />
<Social-GitHub id="myid" />
<Social-Twitter id="myid" />
<Social-Telegram id="myid" />
<Social-Keybase id="myid" />
<Social-ResearchGate id="myid" />
<Social-ORCID id="myid" />

And also, you can include your contact information that will be obfuscated to reduce spam:

<Contact-Phone title="Telefon" country="49" city="1234" number="56789" />
<br/>
<Contact-Email name="someone" domain="example.com" /> <!-- webmaster is the default name -->

</PageSection>

---

<PageSection title="Font Awesome Icons">

<v-icon name="book-open" style="float: right; margin: 0 0 1rem 1rem;" scale="4" />
You can use font awesome icons. But remember that you need to import the icons that you are using, e.g. in your `.vuepress/enhanceApp.js`:

<<< @/example/.vuepress/enhanceApp.js{1}

</PageSection>

---

::: section Not included in TOC
By the way: This theme also defines a [custom container](https://vuepress.vuejs.org/guide/markdown.html#custom-containers) that you can use to create the page sections.
But for technical reasons they won't show up in the navigation links.
:::

---

<PageSection title="Credits">

- Made with [VuePress](https://vuepress.vuejs.org/) – I just :heart: [Vue.js](https://vuejs.org/) :-P
- The VuePress theme [single-page-sections](https://github.com/ptandler/vuepress-theme-single-page-sections) is inspired by [Start Bootstrap's resume](https://startbootstrap.com/template-overviews/resume), with colors taken from [Bootswatch/flatly](https://bootswatch.com/3/flatly/)
- Dummy person icon by <a href="https://www.freevector.com/person-icon-set-19087">FreeVector.com</a>

</PageSection>
