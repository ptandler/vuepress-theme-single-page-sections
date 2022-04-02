<template>
  <Contact-Information
    :icon="icon"
    :title="title || 'Email'"
    :text="text"
    :url="url"
    :icon_only="icon_only"
    :scale="scale"
    :obfuscate="obfuscate"
  />
</template>
<script>
// import "vue-awesome/icons/envelope"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

library.add(faEnvelope)

/**
 * If Prop "email" is defined, it is used as plain text email address,
 * otherwise an array made up of props [name "@", domain] is used to support obfuscation of the email address
 */
export default {
  name: "Email",
  props: ["email", "name", "domain", "title", "scale", "icon_only", "obfuscate"],
  data() {
    return {
      icon: ["fas", "envelope"],
    }
  },
  computed: {
    text() {
      return this.email || [this.name || "webmaster", "@", this.domain]
    },
    url() {
      if (this.email) {
        return "mailto:" + this.email
      }
      let url = this.text.slice(0)
      url.unshift("lto:")
      url.unshift("mai")
      return url
    },
  },
}
</script>
