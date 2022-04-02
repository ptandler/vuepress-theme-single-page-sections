<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

library.add(faFacebook)

export default generateComponent("Facebook", ["fab", "facebook"], "#3B5998", function urlGenerator() {
  return `https://www.facebook.com/${this.id}`
})
</script>
