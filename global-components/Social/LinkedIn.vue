<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import "vue-awesome/icons/brands/linkedin-in"

export default generateComponent("LinkedIn", "brands/linkedin-in", "#0077B5", function urlGenerator() {
  return `https://www.linkedin.com/in/${this.id}/`
})
</script>
