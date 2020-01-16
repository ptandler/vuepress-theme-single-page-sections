import VIcon from "vue-awesome/components/Icon"

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // register vue-awesome's Icon as global component `v-icon`
  Vue.component("v-icon", VIcon)
}
