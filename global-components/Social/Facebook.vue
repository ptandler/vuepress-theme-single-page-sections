<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import "vue-awesome/icons/brands/facebook"

export default generateComponent("Facebook", "brands/facebook", "#3B5998", function urlGenerator() {
  return `https://www.facebook.com/${this.id}`
})
</script>
