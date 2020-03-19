<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
  <!-- <icon :color="iconColor" :url="url" :scale="scale" :title="title" :text="text"> -->
    <!-- <ComponentLogo /> -->
  <!-- </icon> -->
</template>
<script>
import { generateComponent } from "./generateComponent"
// import { generateComponentWithEmbeddedLogo } from "./generateComponent"
import "vue-awesome/icons/brands/keybase"
// import logo from "./keybase-logo.svg?inline"
// use svg file instead of the version from font awesome to have it multi-color
// pending: maybe add option if primary color should be used to fall back to font awesome.
export default generateComponent("Keybase", "brands/keybase", "#3663ea", function urlGenerator() {
// export default generateComponentWithEmbeddedLogo("Keybase", logo, function urlGenerator() {
  return `https://keybase.io/${this.id}`
})
</script>
