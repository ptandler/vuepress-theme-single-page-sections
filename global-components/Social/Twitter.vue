<template>
  <icon :name="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import "vue-awesome/icons/brands/twitter-square"

export default generateComponent("Twitter", "brands/twitter-square", "#1DA1F2", function urlGenerator() {
  return `https://twitter.com/${this.id}`
})
</script>
