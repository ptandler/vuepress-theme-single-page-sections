import { defineClientAppEnhance } from "@vuepress/client"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faFacebook, faGithub, faKeybase } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

export default defineClientAppEnhance(({ app /*router, siteData*/ }) => {
  // register vue-fontawesome's Icon as global component `fa-icon`
  app.component("fa-icon", FontAwesomeIcon)
  library.add(faFacebook, faGithub, faKeybase)
})
