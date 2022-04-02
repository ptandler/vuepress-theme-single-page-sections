<template>
  <icon color="black" :url="url" :scale="scale" :title="title" :text="text">
    <!--    <ComponentLogo />-->
    <img src="./nextcloud-logo.svg" style="width: 1em; margin: auto" />
  </icon>
</template>
<script>
import { generateComponentWithEmbeddedLogo } from "./generateComponent"
// import logo from "./nextcloud-logo.svg?inline"
// TODO NOW add host prop to link to own nextcloud servers?
export default generateComponentWithEmbeddedLogo("Nextcloud", null, function urlGenerator() {
  return `https://nextcloud.com/sharing/#${this.id}`
})
</script>
