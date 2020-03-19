<template>
  <icon :color="iconColor" :url="url" :scale="scale" :title="title" :text="text">
    <ComponentLogo />
  </icon>
</template>
<script>
import { generateCompgenerateComponentWithEmbeddedLogoonent } from "./generateComponent"
import logo from "./nextcloud-logo.svg"
// todo pass null as urlGenerator to get url propery instead of id
export default generateComponentWithEmbeddedLogo("Nextcloud", logo, function urlGenerator() {
  return `${this.id}`
})
</script>
