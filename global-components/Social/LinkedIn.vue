<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

library.add(faLinkedinIn)

export default generateComponent("LinkedIn", ["fab", "linkedin-in"], "#0077B5", function urlGenerator() {
  return `https://www.linkedin.com/in/${this.id}/`
})
</script>
