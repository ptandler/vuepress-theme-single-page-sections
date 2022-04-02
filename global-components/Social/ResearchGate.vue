<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
// import "vue-awesome/icons/brands/researchgate"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faResearchgate } from "@fortawesome/free-brands-svg-icons"

library.add(faResearchgate)

export default generateComponent("ResearchGate", ["fab", "researchgate"], "#0077B5", function urlGenerator() {
  return `https://www.researchgate.net/profile/${this.id}`
})
</script>
