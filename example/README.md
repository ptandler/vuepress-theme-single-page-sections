---
title: My Resume
pageClass: sections-layout
sidebarImage: /dummy-person.svg
sidebarImageAlt: Dummy picture of a person
---

<PageSection id="welcome" title="Single Page Example">

Nice that you're here! You could use this layout for your personal homepage and tell the world something about you.

This example uses the VuePress theme `vuepress-theme-single-page-sections` for a layout for single page sites that
contain several sections, each covering at least one view height.

</PageSection>

---

<PageSection id="contact" title="Contact Information and Social Profiles">

The template provides predefined Vue components that you can easily use to link all your social profiles:

<Social-LinkedIn id="myid" />
<Social-XING id="myid" />
<Social-Facebook id="myid" />
<Social-GitHub id="myid" />
<Social-Twitter id="myid" />
<Social-Skype id="myid" />
<Social-Telegram id="myid" />
<Social-Mastodon id="myid" />
<Social-Keybase id="myid" />
<Social-ResearchGate id="myid" />
<Social-ORCID id="myid" />
<Social-Nextcloud id="myid" />
<Social-StackOverflow id="myid" />

And also, you can include your contact information that will be obfuscated to reduce spam:

<Contact-Phone title="Telefon" country="49" city="1234" number="5678" />
<br/>
<Contact-Email name="someone" domain="example.com" /> <!-- webmaster is the default name -->

</PageSection>

---

<PageSection title="Privacy-friendly Contact Information">

Privacy-friendly way to pass <u>**sensitive contact information**</u> (e.g. mobile number, private email, messanger
name) <u>**via URL**</u> in (e.g.) email footer - that will be included in the homepage exactly as the other icons. Some
information can be passed directly in VuePress:

```vue
// provide public information here
// to be included in the homepage:
<Contact-Details
  :email_as_icon="false"
  :phone_as_icon="false"
  linkedin="myid"
  xing="myid"
  github="myid"
  twitter="myid"
/>
```

<Contact-Details
:email_as_icon="false"
:phone_as_icon="false"
linkedin="myid"
xing="myid"
github="myid"
keybase="myid"
twitter="myid"
researchgate="myid"
/>

The "private" contact information can be passed via URL:

If called via a
[link like this one that contains `email`, `skype`, and `phone` as URL parameters](/vuepress-theme-single-page-sections/?email=my-private@example.com&skype=not-everyone-should-get-my-skype-id&phone=%2B49-1234-56789-0)
the email and skype information will be included in the Contact-Details - and also stored in localStorage to be still
available when navigating to other pages.

</PageSection>

---

<PageSection title="Font Awesome Icons">

<fa-icon :icon="['fas', 'book-open']" style="float: right; margin: 0 0 1rem 1rem;" scale="4" />
You can use font awesome icons. But remember that you need to import the icons that you are using, e.g. in your `.vuepress/clientAppEnhance.ts`:

<<< @/example/.vuepress/clientAppEnhance.ts{1}

</PageSection>

---

<PageSection title="Credits">

- Made with [VuePress](https://vuepress.vuejs.org/) – I just :heart: [Vue.js](https://vuejs.org/) :-P
- The VuePress theme [single-page-sections](https://github.com/ptandler/vuepress-theme-single-page-sections) is inspired
  by [Start Bootstrap's resume](https://startbootstrap.com/template-overviews/resume), with colors taken
  from [Bootswatch/flatly](https://bootswatch.com/3/flatly/)
- Dummy person icon by <a href="https://www.freevector.com/person-icon-set-19087">FreeVector.com</a>

</PageSection>
