<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faMastodon } from "@fortawesome/free-brands-svg-icons"

library.add(faMastodon)

export default generateComponent("Mastodon", ["fab", "mastodon"], "#2b90d9", function urlGenerator() {
  // not sure which is the correct URL to use ...
  // https://stackoverflow.com/questions/49955335/how-to-link-to-a-fediverse-mastodon-account-in-html
  return `https://${this.host}/users/${this.id}/remote_follow`
}, { host: { type: String, default: "mastodon.social" } })
</script>
