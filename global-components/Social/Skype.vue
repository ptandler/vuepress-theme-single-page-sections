<template>
  <icon :iconName="iconName" :color="iconColor" :url="url" :scale="scale" :title="title" :text="text" />
</template>
<script>
import { generateComponent } from "./generateComponent"
// import "vue-awesome/icons/brands/skype"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSkype } from "@fortawesome/free-brands-svg-icons"

library.add(faSkype)

export default generateComponent("Skype", ["fab", "skype"], "#00aff0", function urlGenerator() {
  return `skype:${this.id}`
})
</script>
