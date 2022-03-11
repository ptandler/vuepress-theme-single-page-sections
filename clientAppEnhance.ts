import { defineClientAppEnhance } from '@vuepress/client'
import VIcon from "vue-awesome/components/Icon"

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // register vue-awesome's Icon as global component `v-icon`
  app.component("v-icon", VIcon)
})
