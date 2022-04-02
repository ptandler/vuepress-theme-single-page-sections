import { defineClientAppEnhance } from "@vuepress/client"
// import "vue-awesome/icons/book-open"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // register the icons used
  library.add(faBookOpen)
  // you can add further stuff here
})
