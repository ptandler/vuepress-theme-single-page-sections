<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
// import "vue-awesome/icons/brands/twitter-square"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

library.add(faTwitterSquare)

export default generateComponent("Twitter", ["fab", "twitter-square"], "#1DA1F2", function urlGenerator() {
  return `https://twitter.com/${this.id}`
})
</script>
