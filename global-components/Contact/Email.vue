<template>
<Contact icon="envelope" :title="title || 'Email'" :text="text" :url="url"/>
</template>
<script>
import "vue-awesome/icons/envelope"
export default {
  name: "Email",
  props: ["name", "domain", "title"],
  computed: {
    text() {
      return [this.name || "webmaster", "@", this.domain]
    },
    url() {
      let url = this.text.slice(0)
      url.unshift("mailto:")
      return url
    },
  },
}
</script>
