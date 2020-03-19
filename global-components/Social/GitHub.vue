<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import "vue-awesome/icons/brands/github"

export default generateComponent(
  "GitHub",
  "brands/github",
  "#171515", // or use github banner color #24292e?
  function urlGenerator() {
    return `https://www.github.com/${this.id}`
  }
)
</script>
