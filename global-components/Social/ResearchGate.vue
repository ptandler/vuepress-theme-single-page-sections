<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import "vue-awesome/icons/brands/researchgate"

export default generateComponent("ResearchGate", "brands/researchgate", "#0077B5", function urlGenerator() {
  return `https://www.researchgate.net/profile/${this.id}`
})
</script>
