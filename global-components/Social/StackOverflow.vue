<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
  <!-- <icon :color="iconColor" :url="url" :scale="scale" :title="title" :text="text"> -->
    <!-- <ComponentLogo /> -->
  <!-- </icon> -->
</template>
<script>
import { generateComponent } from "./generateComponent"
import "vue-awesome/icons/brands/stack-overflow"
// import { generateComponentWithEmbeddedLogo } from "./generateComponent"
// import logo from "./stack-overflow-logo.svg?inline"

export default generateComponent("StackOverflow", "brands/stack-overflow", "#f48023", function urlGenerator() {
// export default generateComponentWithEmbeddedLogo("StackOverflow", logo, function urlGenerator() {
  return `https://stackoverflow.com/users/${this.id}`
})
</script>
